<template>
  <div class="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 my-10">
    <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">
      Complete Your Application
    </h2>
    
    <div v-if="currentStep === 'form'" class="space-y-6">
      <div class="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 class="font-semibold text-lg mb-2">Application Summary</h3>
        <p><span class="font-medium">Bank:</span> {{ bankDetails.bankName }}</p>
        <p><span class="font-medium">Loan Amount:</span> {{ formatCurrency(loanDetails.loanAmount) }}</p>
        <p><span class="font-medium">Duration:</span> {{ loanDetails.loanDuration }} months</p>
        <p><span class="font-medium">Monthly Payment:</span> {{ loanDetails.monthlyPayment }} AMD</p>
      </div>

      <form @submit.prevent="submitForm" class="space-y-6">
        <!-- Personal Information -->
        <div class="grid md:grid-cols-2 gap-6">
          <BaseInput
            label="First Name"
            v-model="formData.firstName"
            placeholder="Enter your first name"
            :disabled="true"
          />
          <BaseInput
            label="Last Name"
            v-model="formData.lastName"
            placeholder="Enter your last name"
            :disabled="true"
          />
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <BaseInput
            label="Phone Number"
            v-model="formData.phoneNumber"
            
            :maxlength="12"
            placeholder="+374 XX XXX XXX"
            :class="{ 'error': phoneError }"
            @input="formatPhoneNumber"

            required />
          <BaseInput
            label="Email Address"
            v-model="formData.email"
            placeholder="Enter your email address"
            type="email"
            required
          />
        </div>

        <!-- Employment Information -->
        <div>
          <BaseInput
            label="Current Job Title"
            v-model="formData.jobTitle"
            placeholder="Enter your current job title"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Employment Status
          </label>
          <select
            v-model="formData.employmentStatus"
            class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="" disabled>Select your employment status</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Self-employed">Self-employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Retired">Retired</option>
          </select>
        </div>

        <div>
          <BaseInput
            label="Monthly Salary (AMD)"
            v-model="formData.monthlySalary"
            placeholder="Enter your monthly salary"
            type="number"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Additional Information
          </label>
          <textarea
            v-model="formData.additionalInfo"
            rows="3"
            class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Any additional information you'd like to share"
          ></textarea>
        </div>

        <div class="flex items-center">
          <input
            type="checkbox"
            id="termsAgreement"
            v-model="formData.termsAgreed"
            required
            class="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
          />
          <label for="termsAgreement" class="ml-2 block text-sm text-gray-700">
            I agree to the terms and conditions and privacy policy
          </label>
        </div>

        <div class="text-center">
          <BaseButton
            labelText="Submit Application"
            variant="primary"
            type="submit"
            :disabled="loading"
          />
          <div id="recaptcha-container"></div>
        </div>
      </form>
    </div>

    <!-- OTP verification step -->
    <div v-if="currentStep === 'otp'" class="space-y-6">
    <div :class="['p-4 rounded-lg mb-6 text-center', otpError ? 'bg-red-50' : 'bg-green-50']">
      <p :class="[otpError ? 'text-red-700' : 'text-green-700']" class="mb-2">
        {{ otpError ? 'Invalid OTP! Please enter the correct one.' : 'Verification code sent!' }}
      </p>
      <p>We've sent a verification code to {{ formData.phoneNumber }}</p>
    </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Enter Verification Code
        </label>
        <div class="flex justify-center space-x-2">
          <input
            v-for="(digit, index) in 6"
            :key="index"
            v-model="otpDigits[index]"
            type="text"
            maxlength="1"
            class="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            @input="moveToNextInput(index)"
            @keydown.delete="handleBackspace(index)"
            ref="otpInputs"
          />
        </div>

        <p v-if="otpError" class="mt-2 text-sm text-red-600 text-center">
          The verification code you entered is incorrect. Please try again.
        </p>
      </div>

      <div class="text-center mt-6">
        <BaseButton
          labelText="Verify"
          variant="primary"
          @click="verifyOtp"
          :disabled="!isOtpComplete || verifyingOtp"
        />
      </div>

      <div class="text-center mt-4 text-sm text-gray-600">
        <p>
          Didn't receive a code?
          <button @click="resendOtp" class="text-green-600 hover:underline">
            Resend
          </button>
        </p>
      </div>
    </div>

    <!-- Confirmation step -->
    <div v-if="currentStep === 'confirmation'" class="text-center space-y-6">
      <div class="bg-green-50 p-6 rounded-lg">
        <div class="text-5xl text-green-500 mb-4">✓</div>
        <h3 class="text-2xl font-bold text-green-700">Application Confirmed!</h3>
        <p class="mt-2">
          Your loan application has been successfully submitted and confirmed.
        </p>
        <p class="mt-1">
          A confirmation email has been sent to {{ formData.email }}
        </p>
        <p class="mt-4 text-sm text-gray-600">
          Application Reference: {{ applicationId }}
        </p>
      </div>

      <div class="mt-6">
        <BaseButton
          labelText="Return to Home"
          variant="outline"
          @click="goToHome"
        />
      </div>
    </div>

    <div v-if="loading" class="flex justify-center items-center my-4">
      <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-green-500"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch  } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../firebase";

const route = useRoute();
const router = useRouter();
const loading = ref(false);
const currentStep = ref('form');
const otpDigits = ref(['', '', '', '', '', '']);
const otpInputs = ref([]);
const verifyingOtp = ref(false);
const applicationId = ref(generateApplicationId());
const message = ref("");
const otpSent = ref(false);
const confirmationResult = ref(null);

const isRecaptchaReady = ref(false);

const otpError = ref(false);

const emailError = ref(null);
const emailSent = ref(false);


//changing letters in phone number field

const formatPhoneNumber = () => {
                // Remove non-digit characters
                formData.value.phoneNumber = formData.value.phoneNumber
                .replace(/[^\d+]/g, '') 
                .replace(/^([+])/, '$1') 
                .replace(/(.)[+]/g, '$1')
                .slice(0, 12);
                console.log("typing")
            };

// Watch for when we reach the confirmation step
watch(currentStep, (newStep) => {
  if (newStep === 'confirmation' && !emailSent.value) {
    sendConfirmationEmail();
  }
});

//Sending an email by posting the request to the server
const sendConfirmationEmail = async () => {
  try {
    loading.value = true;
    emailError.value = null;
    
    // Prepare email data
    const emailData = {
      to: formData.value.email,
      subject: `Your Loan Application Confirmation - ${applicationId.value}`,
      body: `
        <h1>Application Confirmed!</h1>
        <p>Dear ${formData.value.firstName} ${formData.value.lastName},</p>
        <p>Your loan application with ${bankDetails.bankName} has been successfully submitted.</p>
        
        <h2>Application Details</h2>
        <ul>
          <li><strong>Reference Number:</strong> ${applicationId.value}</li>
          <li><strong>Bank:</strong> ${bankDetails.bankName}</li>
          <li><strong>Loan Amount:</strong> ${formatCurrency(loanDetails.loanAmount)}</li>
          <li><strong>Duration:</strong> ${loanDetails.loanDuration} months</li>
          <li><strong>Monthly Payment:</strong> ${loanDetails.monthlyPayment} AMD</li>
        </ul>
        
        <p>We will process your application and contact you shortly.</p>
        <p>Thank you for choosing ${bankDetails.bankName}!</p>
      `,
      customerName: `${formData.value.firstName} ${formData.value.lastName}`
    };

    // In a real app, you would call your backend API here
    
    //http://localhost:3000/api/send-confirmation-email
    const response = await axios.post('https://loanly-59855e6cf246.herokuapp.com/api/send-confirmation-email', emailData);
    
    // For demo purposes, we'll simulate the API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Email sent successfully', emailData);
    
    emailSent.value = true;
  } catch (error) {
    console.error('Error sending email:', error);
    emailError.value = error.message || 'Failed to send confirmation email';
  } finally {
    loading.value = false;
  }
};



onMounted(() => {
  initializeRecaptcha();
});

const initializeRecaptcha = () => {
  try {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'normal',
      'callback': () => {
        // This callback is called when the user completes the reCAPTCHA
        isRecaptchaReady.value = true;
      },
      'expired-callback': () => {
        isRecaptchaReady.value = false;
      }
    });
    window.recaptchaVerifier.render();
  } catch (error) {
    console.error("Recaptcha Error:", error);
    message.value = "Error initializing Recaptcha.";
  }
};


// Get loan and bank details from the route
const loanDetails = {
  loanAmount: route.query.loanAmount,
  loanDuration: route.query.loanDuration,
  monthlyPayment: route.query.monthlyPayment
};

const bankDetails = {
  bankId: route.params.bankId,
  bankName: route.query.bankName,
  interestRate: route.query.interestRate
};

// Form data with pre-filled values from the previous page
const formData = ref({
  firstName: route.query.firstName || '',
  lastName: route.query.lastName || '',
  identityCardNumber: route.query.identityCardNumber || '',
  phoneNumber: '',
  email: '',
  jobTitle: '',
  employmentStatus: '',
  monthlySalary: '',
  additionalInfo: '',
  termsAgreed: false
});

// Computed property to check if OTP is complete
const isOtpComplete = computed(() => {
  return otpDigits.value.every(digit => digit !== '');
});

// Format currency function
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AMD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

// Generate a random application ID
function generateApplicationId() {
  return 'APP-' + Math.random().toString(36).substring(2, 10).toUpperCase();
}

const verifyOTP = async () => {
  if (!confirmationResult.value) return false;
  
  const otpCode = otpDigits.value.join('');
  
  try {
    await confirmationResult.value.confirm(otpCode);
    message.value = "OTP verified!";
    return true;
  } catch (error) {
    message.value = "Invalid OTP!";
    return false;
  }
};

const submitForm = async () => {
 if (!isRecaptchaReady.value) {
    message.value = "Please complete the reCAPTCHA verification";
    return;
  }
  loading.value = true;
  //alert("OTP SENT sendOTP()" + formData.value.phoneNumber);
  
  if (!formData.value.phoneNumber.startsWith("+")) {
    message.value = "Phone number must start with +374 xx xxx-xxx";
    return;
  }

  // Debugging: Check if auth is defined
  console.log("Auth Instance:", auth);

  if (!auth) {
    message.value = "Firebase Auth not initialized.";
    return;
  }

  // Ensure RecaptchaVerifier is only created once
  if (!window.recaptchaVerifier) {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
      console.log("create captcha")
    } catch (error) {
      console.error("Recaptcha Error:", error);
      message.value = "Error initializing Recaptcha.";
      return;
    }
  }

  
  signInWithPhoneNumber(auth, formData.value.phoneNumber, window.recaptchaVerifier)
    .then((confirmation) => {
      otpSent.value = true;
      confirmationResult.value = confirmation;
      console.log("Confirmation Result from sendingOTP" + confirmationResult.value);
      message.value = "OTP sent!";
    })
    .catch((error) => {
      console.error("OTP Error:", error);
      message.value = error.message;
    });
  
  try {
    // In a real application, you would send this data to your backend
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call

    // Simulate sending OTP
    console.log("Sending OTP to", formData.value.email);
    
    // Move to OTP verification step
    currentStep.value = 'otp';
    loading.value = false;
    
    // Focus on the first OTP input
    setTimeout(() => {
      if (otpInputs.value[0]) {
        otpInputs.value[0].focus();
      }
    }, 100);
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("There was an error submitting your application. Please try again.");
    loading.value = false;
  }
  

  
};

// Function to handle input in OTP fields
const moveToNextInput = (index) => {
  if (otpDigits.value[index].length === 1 && index < 5) {
    otpInputs.value[index + 1].focus();
  }
};

// Handle backspace in OTP fields
const handleBackspace = (index) => {
  if (otpDigits.value[index] === '' && index > 0) {
    otpInputs.value[index - 1].focus();
  }
};

// Verify OTP function
const verifyOtp = async () => {
  verifyingOtp.value = true;
  otpError.value = false; // Reset error state
  
  try {
    const otpCode = otpDigits.value.join('');
    
    if (!await verifyOTP()) {
      otpError.value = true;
      // Clear OTP fields and focus on first input
      otpDigits.value = ['', '', '', '', '', ''];
      setTimeout(() => {
        if (otpInputs.value[0]) {
          otpInputs.value[0].focus();
        }
      }, 100);
      return;
    }
    
    // Move to confirmation step if successful
    currentStep.value = 'confirmation';
  } catch (error) {
    console.error("Error verifying OTP:", error);
    otpError.value = true;
  } finally {
    verifyingOtp.value = false;
  }
};

// Resend OTP function
const resendOtp = async () => {
  
  // Reset OTP digits
  otpDigits.value = ['', '', '', '', '', ''];
  // Focus on first input
  setTimeout(() => {
    if (otpInputs.value[0]) {
      otpInputs.value[0].focus();
    }
  }, 100);
};

// Return to home page
const goToHome = () => {
  router.push({ name: 'Calculator' });
};
</script>

<style scoped>
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