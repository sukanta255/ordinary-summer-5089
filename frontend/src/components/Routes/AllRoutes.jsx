import React from "react";
import { Route,Routes } from "react-router-dom";
import CartItem from "../cartPage/CartItem";
import EmptyCart from "../cartPage/EmptyCart";
import HomePage from "../Homepage/HomePage";
import Productspage from "../Productspage/Productspage";

const AllRoutes=()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/products" element={<Productspage/>} />
                <Route path="/cartPage" element={<CartItem/>} />
                <Route path="/emptyCart" element={<EmptyCart/>} />
                
            </Routes>
        </div>
    );
};

export default AllRoutes;