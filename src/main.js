import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtNg3QWmLq5ZPDShyp017yAnOCawVa9Ew",
  authDomain: "week7-tian.firebaseapp.com",
  projectId: "week7-tian",
  storageBucket: "week7-tian.firebasestorage.app",
  messagingSenderId: "496497879158",
  appId: "1:496497879158:web:fc85399a558c8097575757"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);


const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')
initializeApp(firebaseConfig)