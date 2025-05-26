import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBBc-dUbMgCFJr_nIDioSHn5ypGlwFYWVM",
  authDomain: "loanly-f0a3b.firebaseapp.com",
  projectId: "loanly-f0a3b",
  storageBucket: "loanly-f0a3b.firebasestorage.app",
  messagingSenderId: "986006448000",
  appId: "1:986006448000:web:3703101b715d5372e2c365"
 
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Export auth instance
export { auth };
export default firebaseApp;







// <template>
  // <div>
  //   <h2>Phone OTP Verification</h2>
  //   <input v-model="phone" type="tel" placeholder="Enter your phone number" required />
  //   <button @click="sendOTP">Send OTP</button>

  //   <div v-if="otpSent">
  //     <input v-model="otp" type="text" placeholder="Enter OTP" required />
  //     <button @click="verifyOTP">Verify OTP</button>
  //   </div>

  //   <p v-if="message">{{ message }}</p>
  //   <div id="recaptcha-container"></div>
  // </div>
// </template>

// <script>
// import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
// import firebaseApp from "../firebase";

// export default {
//   data() {
//     return {
//       phone: "",
//       otp: "",
//       otpSent: false,
//       confirmationResult: null,
//       message: "",
//     };
//   },
//   methods: {
//     sendOTP() {
//       if (!this.phone.startsWith("+")) {
//         this.message = "Phone number must start with country code (e.g., +1 for USA)";
//         return;
//       }

//       const auth = getAuth(firebaseApp);
//       auth.useDeviceLanguage();

//       window.recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", { size: "invisible" }, auth);

//       signInWithPhoneNumber(auth, this.phone, window.recaptchaVerifier)
//         .then((confirmation) => {
//           this.otpSent = true;
//           this.confirmationResult = confirmation;
//           this.message = "OTP sent!";
//         })
//         .catch((error) => {
//           this.message = error.message;
//         });
//     },
//     verifyOTP() {
//       if (!this.confirmationResult) return;
//       this.confirmationResult.confirm(this.otp)
//         .then(() => {
//           this.message = "OTP verified!";
//         })
//         .catch(() => {
//           this.message = "Invalid OTP!";
//         });
//     },
//   },
// };
// </script>

// <style>
// input, button { display: block; margin: 10px 0; }
// </style>