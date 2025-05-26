<template>
    <div class="container">
        <h1>🏦 Apply for a Loan</h1>

        <!-- Loan Application Form -->
        <div class="form">
            <!-- Left Side of the Form -->
            <div class="left-side">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="name" placeholder="Enter your name" />

                <label for="surname">Surname</label>
                <input type="text" id="surname" v-model="surname" placeholder="Enter your surname" />

                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" placeholder="Enter your email" />

                <label for="idNumber">ID Number</label>
                <input type="text" id="idNumber" v-model="idNumber" maxlength="8" placeholder="Enter 8-digit ID" />
            </div>

            <!-- Right Side of the Form -->
            <div class="right-side">
                <label for="loanSize">Loan Size: {{ loanSize.toLocaleString() }} AMD</label>
                <input type="range" id="loanSize" v-model="loanSize" min="100000" max="20000000" step="100000" />

                <label for="loanMonths">Loan Term: {{ loanMonths }} months</label>
                <input type="range" id="loanMonths" v-model="loanMonths" min="6" max="60" step="6" />

                <button @click="applyForLoan">Apply</button>
            </div>
        </div>

        <!-- Show Loan Results -->
        <div v-if="userScore !== null">
            <h2>Your Credit Score: {{ userScore.toFixed(2) }}</h2>
            <h3 v-if="filteredBanks.length">Approved Banks</h3>
            <table v-if="filteredBanks.length" class="bank-table">
                <thead>
                    <tr>
                        <th>Bank Name</th>
                        <th>Interest Rate (%)</th>
                        <th>Monthly Payment (AMD)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="bank in filteredBanks" :key="bank._id">
                        <td>{{ bank.bankName }}</td>
                        <td>{{ bank.percentage }}</td>
                        <td>{{ calculateMonthlyPayment(bank.percentage).toLocaleString() }} AMD</td>
                        <td><button @click="applyWithBank(bank)">Apply with {{ bank.bankName }}</button></td>
                    </tr>
                </tbody>
            </table>
            <p v-else>No banks approved your loan.</p>
        </div>

        <p v-if="loading">Loading...</p>
        <p v-if="error" class="error">{{ error }}</p>
        <p v-if="validationError" class="error">{{ validationError }}</p>
    </div>
</template>

<script>import axios from "axios";
    import { ref, onMounted } from "vue";
    import { useRouter } from 'vue-router';

    export default {
        setup() {
            const banks = ref([]);
            const filteredBanks = ref([]);
            const loanSize = ref(1000000); // Default: 1,000,000 AMD
            const loanMonths = ref(12);
            const userScore = ref(null);
            const name = ref("");
            const surname = ref("");
            const email = ref("");
            const idNumber = ref("");
            const loading = ref(false);
            const error = ref(null);
            const validationError = ref("");
            const router = useRouter(); // For navigation

            // Fetch banks from backend
            const fetchBanks = async () => {
                try {
                    const response = await axios.get("http://localhost:3000/banks");
                    banks.value = response.data;
                } catch (err) {
                    error.value = "Error fetching banks. Please try again later.";
                    console.error("Error fetching banks:", err);
                }
            };

            // Generate random credit score & filter banks
            const applyForLoan = async () => {
                // Validate that all fields are filled and valid
                if (!name.value || !surname.value || !email.value || !idNumber.value || loanSize.value <= 0 || loanMonths.value <= 0) {
                    validationError.value = "Please fill in all fields.";
                    return;
                }

                // Validate email format
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value)) {
                    validationError.value = "Please enter a valid email address.";
                    return;
                }

                // Validate ID number (should be numeric and exactly 8 digits)
                if (!/^\d{8}$/.test(idNumber.value)) {
                    validationError.value = "ID number must be exactly 8 digits.";
                    return;
                }

                // If validation passes, clear the error and proceed
                validationError.value = "";
                loading.value = true;  // Start loading spinner

                // Simulate a delay of 2-3 seconds
                setTimeout(() => {
                    userScore.value = parseFloat((Math.random() * 5 + 5).toFixed(2)); // Random float [5-10]
                    filteredBanks.value = banks.value.filter(bank => bank.minimumScore <= userScore.value);
                    loading.value = false;  // Stop loading spinner
                }, 2000);
            };

            // Calculate monthly payment
            const calculateMonthlyPayment = (percentage) => {
                const interestRate = parseFloat(percentage) / 100;
                const monthlyRate = interestRate / 12;
                return (loanSize.value * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanMonths.value));
            };

            // Function to redirect to the SelectedBank page
            const applyWithBank = (bank) => {
                router.push({
                    name: 'SelectedBank', // Assuming the route name is "SelectedBank"
                    params: { bankId: bank._id },
                    query: { bankName: bank.bankName, interestRate: bank.percentage }
                });
            };

            onMounted(fetchBanks);

            return { banks, filteredBanks, loanSize, loanMonths, userScore, name, surname, email, idNumber, applyForLoan, calculateMonthlyPayment, applyWithBank, loading, error, validationError };
        },
    };</script>

<style scoped>
    /* General Styles */
    .container {
        text-align: center;
        margin-top: 30px;
        color: black; /* ✅ All text black */
    }

    /* Form Layout */
    .form {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 30px;
        margin-bottom: 20px;
    }

    /* Left side of the form */
    .left-side,
    .right-side {
        flex: 1;
        text-align: left;
    }

    /* Form fields */
    label {
        display: block;
        font-weight: bold;
        margin: 10px 0;
        color: black; /* ✅ Labels black */
    }

    input[type="text"], input[type="email"], input[type="range"] {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
    }

    button {
        background-color: #007bff;
        color: white;
        padding: 10px 15px;
        border: none;
        cursor: pointer;
        font-size: 16px;
        margin-top: 10px;
    }

        button:hover {
            background-color: #0056b3;
        }

    /* Bank table styles */
    .bank-table {
        width: 80%;
        margin: 20px auto;
        border-collapse: collapse;
        color: black; /* ✅ Table text black */
    }

        .bank-table th,
        .bank-table td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: center;
            color: black; /* ✅ Table content black */
        }

        .bank-table th {
            background-color: #007bff;
            color: white; /* Keeps headers white for contrast */
        }

        .bank-table tr:nth-child(even) {
            background-color: #f2f2f2;
        }

    /* Loading spinner */
    .loading {
        font-size: 18px;
        color: #007bff;
        font-weight: bold;
        margin-top: 10px;
    }

    /* Error message styles */
    .error {
        color: red;
        margin-top: 10px;
    }
</style>
