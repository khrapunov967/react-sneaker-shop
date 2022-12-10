import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAvMfktO8orMSOj4sXtq2qO210Q8QQP6kg",
  authDomain: "react-sneaker-shop.firebaseapp.com",
  projectId: "react-sneaker-shop",
  storageBucket: "react-sneaker-shop.appspot.com",
  messagingSenderId: "698716112873",
  appId: "1:698716112873:web:623bc50848c7d689e06d78"
};

export const app = initializeApp(firebaseConfig);