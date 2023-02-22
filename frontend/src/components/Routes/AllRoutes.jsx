import React from "react";
import { Route,Routes } from "react-router-dom";
import HomePage from "../Homepage/HomePage";
import Productspage from "../Productspage/Productspage";

const AllRoutes=()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/products" element={<Productspage/>} />
            </Routes>
        </div>
    );
};

export default AllRoutes;