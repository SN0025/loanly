<template>
  <div class="chatbot-container">
    <!-- Chat button that appears in the corner -->
    <button 
      @click="toggleChat" 
      class="chat-button"
      :class="{ 'hidden': isChatOpen }"
    >
      <div class="chat-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
      <div v-if="unreadMessages > 0" class="notification-badge">
        {{ unreadMessages }}
      </div>
    </button>

    <!-- Chat window that appears when the button is clicked -->
    <div class="chat-window" :class="{ 'open': isChatOpen }">
      <div class="chat-header">
        <div class="chat-header-title">
          <div class="chat-avatar">
            <img src="" alt="Chatbot Avatar" @error="useDefaultAvatar"/>
          </div>
          <div>
            <h3>Support Chat</h3>
            <p class="chat-status">
              <span class="status-dot"></span>
              Online
            </p>
          </div>
        </div>
        <button @click="toggleChat" class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div class="chat-messages" ref="messageContainer">
        <div 
          v-for="(message, index) in messages" 
          :key="index" 
          class="message"
          :class="{ 'user-message': message.sender === 'user', 'bot-message': message.sender === 'bot' }"
        >
          <div class="message-content">
            {{ message.text }}
          </div>
          <div class="message-time">{{ formatTime(message.timestamp) }}</div>
        </div>
        <div v-if="isTyping" class="message bot-message">
  <div class="message-content typing-indicator">
    <span v-for="i in 3" :key="i" :class="{ active: i <= typingDots }"></span>
  </div>
</div>
      </div>
      
      <div class="chat-input">
        <input 
          type="text" 
          v-model="userInput" 
          placeholder="Type your message here..." 
          @keyup.enter="sendMessage"
        />
        <button @click="sendMessage" class="send-button" :disabled="!userInput.trim()">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ChatbotInterface',
  data() {
    return {
      isChatOpen: false,
      typingDots: 0,
      typingInterval: null,
      userInput: '',
      messages: [],
      isTyping: false,
      unreadMessages: 0,
      botResponses: {
        greeting: [
          "Hello! How can I help you with your loan application today?",
          "Welcome to our loan service! What questions do you have?",
          "Hi there! I'm here to assist with your banking needs. What can I help you with?"
        ],
        loan: [
          "Our loan application process is simple. You can select a bank, fill out the application form, and receive an instant decision. Would you like me to guide you through the steps?",
          "We offer various loan options with competitive interest rates. The minimum loan amount is 100,000 AMD and the maximum is 10,000,000 AMD with terms from 12 to 120 months."
        ],
        bank: [
          "We partner with multiple banks to find you the best rates. Each bank has different requirements regarding minimum credit scores and interest rates.",
          "You can view all available banks on our platform along with their locations on the map. Is there a specific bank you're interested in?"
        ],
        application: [
          "To complete your application, you'll need to provide your personal details, employment information, and verify your identity with an OTP sent to your email.",
          "After submitting your application, you'll receive a confirmation email with your application reference number for tracking purposes."
        ],
        fallback: [
          "I'm not sure I understand your question. Could you please rephrase it?",
          "I'm here to help with loan and banking questions. Could you provide more details about what you need?",
          "I don't have information about that specific topic. Would you like to know more about our loan application process instead?"
        ]
      }
    };
  },
  mounted() {
    // Add an initial greeting message after a short delay
    setTimeout(() => {
      this.addMessage('bot', 'Hello! Welcome to our loan service. How can I help you today?');
      this.unreadMessages = 1;
    }, 1000);
  },
  methods: {
    toggleChat() {
      this.isChatOpen = !this.isChatOpen;
      if (this.isChatOpen) {
        this.unreadMessages = 0;
        // Focus the input when chat opens
        this.$nextTick(() => {
          const inputElement = this.$el.querySelector('.chat-input input');
          if (inputElement) inputElement.focus();
        });
      }
    },
    
    sendMessage() {
      const message = this.userInput.trim();
      if (!message) return;
      
      // Add user message
      this.addMessage('user', message);
      
      // Clear input
      this.userInput = '';
      
      // Show typing indicator
      this.isTyping = true;
      
      // Simulate response time (500-1500ms)
      const responseTime = Math.floor(Math.random() * 1000) + 500;
      
      setTimeout(() => {
        this.isTyping = false;
        this.respondToMessage(message);
      }, responseTime);
    },
    
    addMessage(sender, text) {
      this.messages.push({
        sender,
        text,
        timestamp: new Date()
      });
      
      // If chat is closed and a bot message comes in, increment unread count
      if (sender === 'bot' && !this.isChatOpen) {
        this.unreadMessages++;
      }
      
      // Scroll to the bottom of the message container
      this.$nextTick(() => {
        if (this.$refs.messageContainer) {
          this.$refs.messageContainer.scrollTop = this.$refs.messageContainer.scrollHeight;
        }
      });
    },
    
    async respondToMessage(message_user) {
  try {
    this.isTyping = true;
    let fullResponse = '';
    
    //http://localhost:3000/api/chatbot
    const response = await fetch('http://localhost:3000/api/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: message_user })
    });

    if (!response.ok) throw new Error('Network response was not ok');

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        this.isTyping = false;
        break;
      }
      
      const chunk = decoder.decode(value);
      const lines = chunk.split('\n\n').filter(line => line.startsWith('data: '));
      
      for (const line of lines) {
        try {
          const message = JSON.parse(line.substring(6)); // Remove "data: " prefix
          fullResponse += message;
          
          // Update the last message or add new one
          const lastMsg = this.messages[this.messages.length - 1];
          if (lastMsg && lastMsg.sender === 'bot') {
            lastMsg.text = fullResponse;
          } else {
            this.addMessage('bot', fullResponse);
          }
        } catch (e) {
          console.error("Error parsing chunk:", e);
        }
      }
    }
  } catch (error) {
    console.error("Chat error:", error);
    this.isTyping = false;
    this.addMessage('bot', "Sorry, something went wrong.");
  }
},
startTypingAnimation() {
  this.typingInterval = setInterval(() => {
    this.typingDots = (this.typingDots + 1) % 4;
  }, 500);
},
stopTypingAnimation() {
  clearInterval(this.typingInterval);
  this.typingDots = 0;
},
    
    formatTime(timestamp) {
      return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    },
    
    useDefaultAvatar(event) {
      // If avatar image fails to load, use a data URI for a fallback
      event.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='11' fill='%23808080'/%3E%3Cpath fill='white' d='M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'/%3E%3Cpath fill='white' d='M12 16c-3.31 0-6 1.79-6 4h12c0-2.21-2.69-4-6-4z'/%3E%3C/svg%3E";
    }
  }
};
</script>

<style scoped>

.typing-indicator span.active {
  background-color: var(--color-green-600);
}
.chatbot-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.chat-button {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--color-green-600);
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.chat-button:hover {
  transform: scale(1.05);
}

.chat-button.hidden {
  display: none;
}

.chat-icon {
  width: 24px;
  height: 24px;
}

.notification-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ef4444;
  color: white;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 2px solid white;
}

.chat-window {
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 350px;
  height: 450px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform: scale(0.9);
  opacity: 0;
  transform-origin: bottom right;
  pointer-events: none;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.chat-window.open {
  transform: scale(1);
  opacity: 1;
  pointer-events: all;
}

.chat-header {
  background-color: var(--color-green-600);
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-header-title {
  display: flex;
  align-items: center;
}

.chat-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  background-color: white;
}

.chat-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;

}

.chat-status {
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-top: 2px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #10b981;
  margin-right: 5px;
}

.close-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px;
}

.chat-messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f9fafb;
}

.message {
  max-width: 80%;
  padding: 10px 14px;
  border-radius: 18px;
  position: relative;
  margin-bottom: 5px;
}

.user-message {
  align-self: flex-end;
  background-color: var(--color-green-600);
  color: white;
  border-bottom-right-radius: 5px;
}

.bot-message {
  align-self: flex-start;
  background-color: #e5e7eb;
  color: #1f2937;
  border-bottom-left-radius: 5px;
}

.message-time {
  font-size: 10px;
  margin-top: 5px;
  opacity: 0.7;
  text-align: right;
}

.chat-input {
  padding: 15px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  background-color: white;
}

.chat-input input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  outline: none;
  font-size: 14px;
  transition: border-color 0.3s;
}

.chat-input input:focus {
  border-color: var(--color-green-600);
}

.send-button {
  margin-left: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-green-600);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.send-button:hover {
  background-color: #4338ca;
}

.send-button:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}

/* Typing indicator */
.typing-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
}

.typing-indicator span {
  height: 8px;
  width: 8px;
  background-color: #9ca3af;
  border-radius: 50%;
  margin: 0 2px;
  display: inline-block;
  animation: bounce 1.3s linear infinite;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.15s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes bounce {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
}

@media (max-width: 480px) {
  .chat-window {
    width: calc(100% - 40px);
    height: 60vh;
    bottom: 80px;
  }
}
</style>