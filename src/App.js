import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import RootLayout from "./components/styled/RootLayout";
import FootwearPage from "./pages/FootwearPage";

function App() {
  return (
    <RootLayout>
      <Header />

      <Routes>
        <Route path="/" element={<FootwearPage />}/>
      </Routes>
    </RootLayout>
  );
}

export default App;
