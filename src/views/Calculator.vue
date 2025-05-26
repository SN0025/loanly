<template>
    <div class="container mx-auto p-6">
        <!-- Top Currencies Dashboard -->
        <!--<div class="mb-12">
        <h2 class="text-3xl font-bold mb-6 text-gray-800">DramStream</h2>
        <div class="grid md:grid-cols-3 gap-6">
            <div v-for="currency in topCurrencies" :key="currency.code"
                 class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex justify-between items-center">
                    <div>
                        <h3 class="text-xl font-semibold">{{ currency.code }}</h3>
                        <p class="text-gray-600">{{ currency.name }}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl font-bold"
                           :class="currency.change >= 0 ? 'text-green-600' : 'text-red-600'">
                            {{ currency.rateToAMD.toFixed(2) }} AMD
                        </p>
                        <p class="text-sm"
                           :class="currency.change >= 0 ? 'text-green-500' : 'text-red-500'">
                            {{ currency.change >= 0 ? '+' : '' }}{{ currency.change.toFixed(2) }}%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>-->

        <div class="container mx-auto p-6">
            <h2 class="text-3xl font-bold mb-6 text-gray-800">
                DramStream
            </h2>

            <div v-if="loading" class="text-center">
                <p>Loading currency rates...</p>
            </div>

            <div v-else-if="error" class="text-red-600">
                {{ error }}
            </div>

            <div v-else class="grid md:grid-cols-3 gap-6">
                <div v-for="currency in currencies" :key="currency.code"
                     class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex justify-between items-center">
                        <div>
                            <h3 class="text-xl font-semibold">{{ currency.code }}</h3>
                            <p class="text-gray-600">{{ currency.name }}</p>
                        </div>
                        <div class="text-right">
                            <p class="text-2xl font-bold"
                               :class="currency.change >= 0 ? 'text-green-600' : 'text-red-600'">
                                = {{ currency.rate.toFixed(4) }} AMD
                            </p>
                            <p class="text-sm"
                               :class="currency.change >= 0 ? 'text-green-500' : 'text-red-500'">
                                {{ currency.change >= 0 ? '+' : '' }}{{ currency.change.toFixed(2) }}%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Currency Converter -->
        <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div>
                <h2 class="text-3xl font-bold mb-6 text-gray-800">Currency Converter</h2>
                <div class="bg-white p-8 rounded-lg shadow-md">
                    <div class="space-y-4">
                        <BaseInput labelText="Amount"
                                   type="number"
                                   v-model="converterAmount"
                                   placeholder="Enter amount to convert" />
                        <div class="grid grid-cols-2 gap-4">
                            <BaseSelect labelText="From Currency"
                                        :options="availableCurrencyOptions"
                                        v-model="fromCurrency" />
                            <BaseSelect labelText="To Currency"
                                        :options="availableCurrencyOptions"
                                        v-model="toCurrency" />
                        </div>
                        <BaseButton labelText="Convert"
                                    @click="convertCurrency"
                                    class="w-full" />
                    </div>
                    <div v-if="convertedAmount !== null" class="mt-6 text-center">
                        <p class="text-2xl font-bold text-primary-600">
                            {{ converterAmount }} {{ fromCurrency }} =
                            {{ convertedAmount.toFixed(4) }} {{ toCurrency }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Loan Calculator -->
            <div>
                <h2 class="text-3xl font-bold mb-6 text-gray-800">Loan Calculator</h2>
                <div class="bg-white p-8 rounded-lg shadow-md">
                    <div class="space-y-4">
                        <BaseInput labelText="Loan Amount (AMD)"
                                   type="number"
                                   v-model="loanAmount"
                                   placeholder="Enter loan amount in AMD" />
                        <BaseInput labelText="Interest Rate (%)"
                                   type="number"
                                   v-model="interestRate"
                                   placeholder="Annual interest rate" />
                        <BaseInput labelText="Loan Term (Years)"
                                   type="number"
                                   v-model="loanTerm"
                                   placeholder="Loan duration" />
                        <BaseButton labelText="Calculate Monthly Payment"
                                    @click="calculateMonthlyPayment"
                                    class="w-full" />
                    </div>
                    <div v-if="monthlyPayment" class="mt-6 text-center">
                        <p class="text-2xl font-bold text-primary-600">
                            Monthly Payment: {{ monthlyPayment.toFixed(2) }} AMD
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue"
import BaseInput from "@/components/BaseInput.vue"
import BaseSelect from "@/components/BaseSelect.vue"
import axios from 'axios';

    export default {
        components: {
            BaseButton,
            BaseInput,
            BaseSelect
        },
        data() {
            return {
                // Loan Calculator
                loanAmount: null,
                interestRate: null,
                loanTerm: null,
                monthlyPayment: null,

                // Currency Converter
                currencies: [],
                loading: true,
                error: null,
                converterAmount: null,
                fromCurrency: 'USD',
                toCurrency: 'AMD',
                convertedAmount: null,

                // Top Currencies Dashboard
                topCurrencies: [
                    {
                        code: 'USD',
                        name: 'US Dollar',
                        rateToAMD: 0.0026,
                        change: 0.5
                    },
                    {
                        code: 'EUR',
                        name: 'Euro',
                        rateToAMD: 0.0028,
                        change: -0.3
                    },
                    {
                        code: 'RUB',
                        name: 'Russian Ruble',
                        rateToAMD: 0.00019,
                        change: 0.2
                    },
                    {
                        code: 'GBP',
                        name: 'British Pound',
                        rateToAMD: 0.0032,
                        change: 0.7
                    },
                    {
                        code: 'CHF',
                        name: 'Swiss Franc',
                        rateToAMD: 0.0030,
                        change: 0.1
                    }
                ]
            }
        },
        computed: {
            availableCurrencyOptions() {
                // Create options array from loaded currencies plus AMD
                const options = ['AMD'];
                if (this.currencies && this.currencies.length > 0) {
                    this.currencies.forEach(currency => {
                        if (!options.includes(currency.code)) {
                            options.push(currency.code);
                        }
                    });
                }
                return options;
            }
        },
        methods: {
            calculateMonthlyPayment() {
                if (!this.loanAmount || !this.interestRate || !this.loanTerm) return
                const monthlyRate = (this.interestRate / 100) / 12
                const termMonths = this.loanTerm * 12
                this.monthlyPayment = (this.loanAmount * monthlyRate) /
                    (1 - Math.pow(1 + monthlyRate, -termMonths))
            },
            
            convertCurrency() {
                if (!this.converterAmount || !this.currencies.length) return;

                // If converting from or to the same currency
                if (this.fromCurrency === this.toCurrency) {
                    this.convertedAmount = this.converterAmount;
                    return;
                }

                // Get real-time rates from API data
                const getRateToAMD = (currencyCode) => {
                    if (currencyCode === 'AMD') return 1;
                    
                    const currency = this.currencies.find(c => c.code === currencyCode);
                    return currency ? currency.rate : null;
                };

                const fromRate = getRateToAMD(this.fromCurrency);
                const toRate = getRateToAMD(this.toCurrency);

                if (fromRate === null || toRate === null) {
                    console.error('Currency rate not found');
                    return;
                }

                // Convert: amount * fromRate / toRate
                // If fromCurrency is not AMD, first convert to AMD, then to target currency
                if (this.fromCurrency === 'AMD') {
                    // Converting FROM AMD TO another currency
                    this.convertedAmount = this.converterAmount / toRate;
                } else if (this.toCurrency === 'AMD') {
                    // Converting TO AMD FROM another currency
                    this.convertedAmount = this.converterAmount * fromRate;
                } else {
                    // Converting between two non-AMD currencies
                    // First convert to AMD, then to target currency
                    const amountInAMD = this.converterAmount * fromRate;
                    this.convertedAmount = amountInAMD / toRate;
                }
            },

            async fetchCurrencyRates() {
                try {
                    const response = await axios.get(`https://loanly-59855e6cf246.herokuapp.com/api/currencies`);
                    console.log(response.data);
                    this.currencies = response.data;
                    this.loading = false;
                } catch (error) {
                    this.error = 'Failed to load currency rates';
                    this.loading = false;
                    console.error('Currency fetch error:', error);
                }
            }
        },

        mounted() {
            this.fetchCurrencyRates();
        }
    }
</script>

<style scoped>
.container {
    max-width: 1200px;
}
</style>