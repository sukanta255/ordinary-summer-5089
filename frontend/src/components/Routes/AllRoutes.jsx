import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Homepage/HomePage";
import Productspage from "../Productspage/Productspage";
import SingleProductPage from "../Productspage/SingleProductPage";
import CartItem from "../cartPage/CartItem";
import EmptyCart from "../cartPage/EmptyCart";
import AddData from "../AdminPage/AddData";
import AdminDashboard from "../AdminPage/AdminDashboard";
import UpdateData from "../AdminPage/UpdateData";
import { CheckCircleIcon } from "@chakra-ui/icons";
import CreateData from "../AdminPage/CreateData";
import PieChart from "../AdminPage/PieChart";
import Login from "../../Pages/Login";
// import SignUp from "../../Pages/Signup";
import SignUp from "../../Pages/SignUp";



const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Productspage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/cartpage" element={<CartItem />} />
        <Route path="/emptycart" element={<EmptyCart />} />
        <Route path="/adddata" element={<CreateData />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/updatedata" element={<UpdateData />} />
        <Route path="/chart" element={<PieChart />} />

      </Routes>
    </div>
  );
};

export default AllRoutes;
