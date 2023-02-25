import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../Homepage/HomePage";
import Productspage from "../Productspage/Productspage";
import SingleProductPage from "../Productspage/SingleProductPage";
import CartItem from "../cartPage/CartItem";
import EmptyCart from "../cartPage/EmptyCart";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Productspage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/cartpage" element={<CartItem />} />
        <Route path="/emptycart" element={<EmptyCart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
