<template>
    <div class="apply-loan-container">
        <div class="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <h2 class="text-4xl font-bold mb-8 text-center text-gray-800">
                Loan Application
            </h2>

            <form @submit.prevent="submitApplication" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                    <BaseInput label="First Name"
                               v-model="application.firstName"
                               placeholder="Enter your first name"
                               required />
                    <BaseInput label="Last Name"
                               v-model="application.lastName"
                               placeholder="Enter your last name"
                               required />
                </div>

                <div>
                    <BaseInput label="Identity Card Number"
                               v-model="application.identityCardNumber"
                               placeholder="Enter 8-digit ID number"
                               :maxlength="8"
                               @input="formatIdentityCardNumber"
                               required />
                </div>

                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Loan Amount (AMD)
                    </label>
                    <input type="range"
                           v-model="application.loanAmount"
                           min="100000"
                           max="10000000"
                           step="50000"
                           class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                           style="
                            -webkit-appearance: none;
                            background: bg-gray-200 ;
                        " />
                    <div class="text-center mt-2">
                        {{ formatCurrency(application.loanAmount) }}
                    </div>
                </div>

                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Loan Duration (Months)
                    </label>
                    <input type="range"
                           v-model="application.loanDuration"
                           min="12"
                           max="120"
                           step="1"
                           class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                           style=" -webkit-appearance: none;
                           background: bg-gray-200; " />
                    <div class="text-center mt-2">
                        {{ application.loanDuration }} Months
                    </div>
                </div>

                <div class="text-center">
                    <BaseButton labelText="See available banks"
                                variant="primary"
                                @click="submitApplication" />
                </div>

                

                <div v-if="loading" class="flex justify-center items-center my-4">
                    <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-green-500"></div>
                </div>
            </form>

            <!-- Banks List -->
            <div v-if="eligibleBanks.length" class="mt-6">
                <h3 class="text-2xl font-semibold mb-4 text-center">Eligible Banks</h3>
                <div class="grid gap-4">
                    <div v-for="bank in eligibleBanks"
                         :key="bank._id"
                         class="border rounded-lg p-4 flex justify-between items-center">
                        <div>
                            <div style="display:flex;">
                                <img
                                
                                
                                    :src="`https://loanly-59855e6cf246.herokuapp.com/${bank.img_path}`"
                                    :alt="`${bank.bankName} logo`"
                                    class="w-12 h-12 object-contain p-1.5"
                                    
                                />
                                <h4 class="font-bold">{{ bank.bankName }}</h4>
                            </div>
                            <p>Interest Rate: {{ bank.percentage }}</p>
                            <p>Monthly Payment: {{ calculateMonthlyPayment(bank) }} AMD</p>
                        </div>
                        <BaseButton labelText="Select Bank"
                                    @click="selectBank(bank)"
                                    variant="outline" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>import axios from 'axios';
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import BaseInput from '@/components/BaseInput.vue';
    import BaseButton from '@/components/BaseButton.vue';

    export default {
        name: 'ApplyLoan',
        components: {
            BaseInput,
            BaseButton
        },
        setup() {
            const router = useRouter();
            const loading = ref(false);
            const eligibleBanks = ref([]);
            const userScore = ref(null);
            const validationErrorShown = ref(false);

            const application = ref({
                firstName: '',
                lastName: '',
                identityCardNumber: '',
                loanAmount: 1000000, // Default midpoint
                loanDuration: 36 // Default 3-year term
            });

            // Custom styling for range inputs
            onMounted(() => {
                const styleRangeInputs = () => {
                    const rangeInputs = document.querySelectorAll('input[type="range"]');
                    rangeInputs.forEach(input => {
                        input.style.setProperty('--tw-ring-color', 'green');

                        // Custom thumb styling
                        const style = document.createElement('style');
                        style.textContent = `
                        input[type="range"]::-webkit-slider-thumb {
                            -webkit-appearance: none;
                            appearance: none;
                            width: 20px;
                            height: 20px;
                            background: green;
                            cursor: pointer;
                            border-radius: 50%;
                        }
                        input[type="range"]::-moz-range-thumb {
                            width: 20px;
                            height: 20px;
                            background: green;
                            cursor: pointer;
                            border-radius: 50%;
                        }
                    `;
                        document.head.appendChild(style);
                    });
                };
                styleRangeInputs();
            });

            const formatCurrency = (amount) => {
                return new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'AMD',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                }).format(amount);
            };

            const formatIdentityCardNumber = () => {
                // Remove non-digit characters
                application.value.identityCardNumber = application.value.identityCardNumber
                    .replace(/\D/g, '')
                    .slice(0, 8);
            };

            const calculateMonthlyPayment = (bank) => {
                const loanAmount = parseFloat(application.value.loanAmount);
                const loanDuration = parseFloat(application.value.loanDuration);
                const annualInterestRate = parseFloat(bank.percentage);

                if (isNaN(loanAmount) || isNaN(loanDuration) || isNaN(annualInterestRate)) {
                    console.error('Invalid input for monthly payment calculation');
                    return '0';
                }

                const monthlyInterestRate = annualInterestRate / 100 / 12;
                const numberOfPayments = loanDuration;

                const monthlyPayment = loanAmount *
                    (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
                    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

                return Math.round(monthlyPayment).toLocaleString('en-US');
            };

            const generateCreditScore = () => {
                return parseFloat((Math.random() * 4 + 6).toFixed(2));
            };

            const fetchEligibleBanks = async (score) => {
                try {
                
                //"http://localhost:3000/banks"
                    const response = await axios.get("https://loanly-59855e6cf246.herokuapp.com/banks");
                    return response.data;
                } catch (error) {
                    console.error("Error fetching banks:", error);
                    return [];
                }
            };

            const validateForm = () => {
                const requiredFields = [
                    'firstName',
                    'lastName',
                    'identityCardNumber',
                    'loanAmount',
                    'loanDuration'
                ];

                // Check if all required fields are filled
                const isValid = requiredFields.every(field => {
                    const value = application.value[field];
                    return value !== null && value !== '';
                });

                // Check identity card number length
                const isIdentityCardValid = application.value.identityCardNumber.length === 8;

                if (!isValid || !isIdentityCardValid) {
                    if (!validationErrorShown.value) {
                        alert('Please fill in all required fields correctly. Identity card number must be 8 digits.');
                        validationErrorShown.value = true;
                    }
                    return false;
                }

                // Reset validation flag
                validationErrorShown.value = false;
                return true;
            };

            const submitApplication = async () => {
                // Validate form first
                if (!validateForm()) return;

                // Start loading
                loading.value = true;

                // Simulate processing time
                setTimeout(async () => {
                    // Generate credit score
                    userScore.value = generateCreditScore();

                    // Fetch eligible banks
                    eligibleBanks.value = await fetchEligibleBanks(userScore.value);

                    // Stop loading
                    loading.value = false;
                }, 2500);
            };

            const selectBank = (bank) => {
                        // Navigate to form page with bank and application details

                    router.push({
                        name: 'Form',
                        params: { bankId: bank._id },
                        query: {
                          firstName: application.value.firstName,
                          lastName: application.value.lastName,
                          identityCardNumber: application.value.identityCardNumber,
                          loanAmount: application.value.loanAmount,
                          loanDuration: application.value.loanDuration,
                          bankName: bank.bankName,
                          interestRate: bank.percentage,
                          monthlyPayment: calculateMonthlyPayment(bank)
                        }
                    });
                };

            return {
                application,
                submitApplication,
                selectBank,
                loading,
                eligibleBanks,
                userScore,
                formatIdentityCardNumber,
                formatCurrency,
                calculateMonthlyPayment
            };
        }
    }</script>

<style scoped>
    /* Any additional styles can be added here */


    .animate-spin {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
</style>