import React, { useEffect } from "react";
import FirestoreService from "./services/FirestoreService";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/productsSlice";
import { fetchCartByUserId } from "./store/cartSlice";

function App() {

  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.user);
  const items = useSelector(state => state.cart.items);

  // useEffect(() => {
  //   FirestoreService.setCart(userId, JSON.parse(localStorage.getItem("cart")));
  //   console.log("SET CART")
  // }, [items, userId])

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCartByUserId(userId));
    console.log("FETCHED CART AND USER DATA")
  }, []);

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
