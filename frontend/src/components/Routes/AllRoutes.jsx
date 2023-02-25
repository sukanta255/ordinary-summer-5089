import React from "react";
import { Route,Routes } from "react-router-dom";
import CartItem from "../cartPage/CartItem";
import EmptyCart from "../cartPage/EmptyCart";
import AddData from "../AdminPage/AddData";
import AdminDashboard from "../AdminPage/AdminDashboard";

import HomePage from "../Homepage/HomePage";
import Productspage from "../Productspage/Productspage";
import SingleProductPage from "../Productspage/SingleProductPage";

const AllRoutes=()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/products" element={<Productspage/>} />
                <Route path="/products/:id" element={<SingleProductPage/>} />

                <Route path="/cartpage" element={<CartItem/>} />
                <Route path="/emptycart" element={<EmptyCart/>} />
               
                     <Route path="/admindashboard" element={<AdminDashboard/>} /> 
                <Route path="/admin" element={<AdminDashboard/>} /> 
            </Routes>
        </div>
    );
};

export default AllRoutes;
