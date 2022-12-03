import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RootLayout from "./components/styled/RootLayout";
import FootwearPage from "./pages/FootwearPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <RootLayout>
      <Header />

      <Routes>
        <Route path="/" element={<FootwearPage />}/>
        <Route path="/products" element={<ProductsPage />}/>
      </Routes>

      <Footer />
    </RootLayout>
  );
}

export default App;
