import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RootLayout from "./components/styled/RootLayout";
import FootwearPage from "./pages/FootwearPage";
import SignInPage from "./pages/SignInPage";
import ProductsPage from "./pages/ProductsPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <RootLayout>
      <Header />

      <Routes>
        <Route path="/" element={<FootwearPage />}/>
        <Route path="/sign-up" element={<SignUpPage />}/>
        <Route path="/sign-in" element={<SignInPage />}/>
        <Route path="/products" element={<ProductsPage />}/>
      </Routes>

      <Footer />
    </RootLayout>
  );
}

export default App;
