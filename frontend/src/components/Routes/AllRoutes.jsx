import React from "react";
import { Route,Routes } from "react-router-dom";
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
                <Route path="/products/:_id" element={<SingleProductPage/>} />
                <Route path="/adddata" element={<AddData/>} />
                <Route path="/admindash" element={<AdminDashboard/>} />

                
            </Routes>
        </div>
    );
};

export default AllRoutes;
