require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Import CORS
const path = require("path");
const connectDB = require("./config/db");
const axios = require('axios');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 300 }); 
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3000;
const Bank = require("./models/Bank");

const OPENAI_API_KEY = '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';


// 5-minute cache

const API_KEY = '04f3c02ca2106e5153a0b9b0';
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

//using cors in app
app.use(cors()); 


// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use("/data",express.static(path.join(__dirname, "data")));

app.use(express.json());

connectDB();





async function askOllama(prompt) {
  try {
    const response = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3",
        messages: [{ role: "user", content: prompt }],
        stream: false
      })
    });

    // Clone the response to read it multiple times if needed
    const responseClone = response.clone();
    
    // First check for errors
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Ollama API Error:", errorText);
      throw new Error(`API request failed: ${response.status}`);
    }

    // Then parse the JSON (using the clone)
    const data = await responseClone.json();
    
    // Handle all possible response formats
    return data.message?.content || 
           data.response || 
           data.choices?.[0]?.message?.content || 
           "Error: Unexpected response format";
    
  } catch (error) {
    console.error("Ollama request failed:", error);
    return "Sorry, I'm having trouble connecting to the AI.";
  }
}




async function getOpenAIResponse(message) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: message}]
    })
  });
  const data = await response.json();
  return data.choices[0].message.content;
}

app.get('/api/currencies', async (req, res) => {
    try {
        // Check cache first
        const cachedData = cache.get('currency_rates');
        if (cachedData) {
            return res.json(cachedData);
        }

        // Fetch latest rates
        const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/AMD`);
        const data = response.data;

        // Extract top currencies
        const topCurrencies = [
            { code: 'USD', name: 'US Dollar', rate: 1 / data.conversion_rates.USD  },
            { code: 'EUR', name: 'Euro', rate: 1 / data.conversion_rates.EUR },
            { code: 'RUB', name: 'Russian Ruble', rate: 1 / data.conversion_rates.RUB },
            { code: 'GBP', name: 'British Pound', rate: 1 / data.conversion_rates.GBP },
            { code: 'CHF', name: 'Swiss Franc', rate: 1 / data.conversion_rates.CHF },
            { code: 'AED', name: 'UAE Dirham ', rate: 1 / data.conversion_rates.AED }

        ];

        // Calculate percentage changes (mock for this example)
        topCurrencies.forEach(currency => {
            currency.change = Math.random() * 2 - 1; // Random change between -1% and 1%
        });

        // Cache the result
        cache.set('currency_rates', topCurrencies);

        res.json(topCurrencies);
    } catch (error) {
        console.error('Currency fetch error:', error);
        res.status(500).json({ error: 'Failed to fetch currency rates' });
    }
});


// Handling email sending requests from frontend

app.post('/api/send-confirmation-email', async (req, res) => {
  try {
    const { to, subject, body, customerName } = req.body;

    // Create transporter (configure with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email provider
      auth: {
        user: "loanly.notifications@gmail.com",
        pass: "swad mufl bsmf fxlx"
      }
    });
    
    // Send mail
    await transporter.sendMail({
      from: '"Loanly" <loanly.notifications@gmail.com>',
      to,
      subject,
      html: body
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error: from backend', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});


// In server.js, modify the /api/chatbot endpoint
app.post('/api/chatbot', async (req, res) => {
  const { message } = req.body;
  
  try {
    const dbContext = await getDatabaseContext(message);
    const response = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3",
        messages: [ { role: "system", content: "You are a helpful assistant already integrated in a website like a chatbot. Website is designed for an online loan proccessing. Website name is LoanLy. LoanLy is proccessing loans for armenian banks, specificly in Armenia" + `Here's some database context: ${dbContext}` },{ role: "user", content: message }],
        stream: true
      })
    });

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value);
      const lines = chunk.split('\n').filter(line => line.trim());
      
      for (const line of lines) {
        try {
          const parsed = JSON.parse(line);
          if (parsed.message?.content) {
            res.write(`data: ${JSON.stringify(parsed.message.content)}\n\n`);
          }
        } catch (e) {
          console.error("Error parsing chunk:", e);
        }
      }
    }
  } catch (error) {
    console.error("Ollama error:", error);
    res.write(`data: ${JSON.stringify("Sorry, I encountered an error.")}\n\n`);
  } finally {
    res.end();
  }
});

async function handleDatabaseQuery(message) {
  const dbKeywords = ['bank', 'loan', 'interest', 'rate', 'score', 'address', 'location', 'branch'];
  const containsDbKeyword = dbKeywords.some(keyword => 
    message.toLowerCase().includes(keyword)
  );

  if (!containsDbKeyword) return null;

  try {
    const banks = await Bank.find({
      $or: [
        { bankName: new RegExp(message, 'i') },
        { description: new RegExp(message, 'i') }
      ]
    }).limit(5); // Increase limit to show more results

    if (banks.length === 0) return null;

    return formatBankResponse(banks);
  } catch (err) {
    console.error("Database query error:", err);
    return null;
  }
};
function formatBankResponse(banks) {
  let response = "Here are relevant banks:\n\n";
  
  banks.forEach(bank => {
    response += `🏦 **${bank.bankName}**\n` +
                `• Interest Rate: ${bank.percentage}%\n` +
                `• Minimum Credit Score: ${bank.minimumScore}\n` +
                `• Address: ${bank.address || 'Not specified'}\n\n`;
  });

  response += "Would you like more details about any specific bank?";
  return response;
};

async function getDatabaseContext(prompt) {
  const keywords = prompt.toLowerCase().split(/\s+/)
    .filter(word => word.length > 1);

  let context = "Available banking information:\n";
  
  if (keywords.length > 0) {
    const banks = await Bank.find({
      $or: keywords.map(kw => ({
        $or: [
          { bankName: new RegExp(kw, 'i') },
          { address: new RegExp(kw, 'i') }
        ]
      }))
    }).limit(3);

    banks.forEach(bank => {
      context += `- ${bank.bankName}: ` +
                `${bank.percentage}% interest, ` +
                `min score ${bank.minimumScore}, ` +
                `located at ${bank.address}\n`;
    });
  }

  return context;
};




app.put("/banks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        // Find and update the document
        const result = await Bank.findByIdAndUpdate(id, { $set: updateData }, { new: true });

        if (!result) return res.status(404).json({ error: "Bank not found" });

        res.json({ message: "Bank updated successfully", updatedBank: result });
    } catch (error) {
        console.error("Update error:", error);
        res.status(500).json({ error: "Update failed" });
    }
});

//Connecting to Database


// Set EJS as the template engine
app.set("view engine", "ejs");





// Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/banks", require("./routes/banks"));



// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});







