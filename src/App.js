import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RootLayout from "./components/styled/RootLayout";
import FootwearPage from "./pages/FootwearPage";
import SignInPage from "./pages/SignInPage";
import ProductsPage from "./pages/ProductsPage";
import SignUpPage from "./pages/SignUpPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <RootLayout>
      <Header />

      <Routes>
        <Route path="/" element={<FootwearPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/sign-up" element={<SignUpPage />}/>
        <Route path="/sign-in" element={<SignInPage />}/>
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/products/:id" element={<ProductDetailsPage />}/>
        <Route path="/cart" element={<CartPage />}/>
      </Routes>

      <Footer />
    </RootLayout>
  );
}

export default App;
