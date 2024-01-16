import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQSQjmpln_glMLBOzM0ssJtbByDB12hDA",
  authDomain: "beatblend-88ffc.firebaseapp.com",
  projectId: "beatblend-88ffc",
  storageBucket: "beatblend-88ffc.appspot.com",
  messagingSenderId: "703730659549",
  appId: "1:703730659549:web:7c2de11a201e3547912b34",
  measurementId: "G-E3NW1JMZGT",
  databaseURL:"https://beatblend-88ffc-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);