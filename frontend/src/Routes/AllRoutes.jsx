import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Productspage from "../Pages/Productspage";
import SingleProductPage from "../components/Productspage/SingleProductPage";
// import AdminDashboard from "../components/AdminPage/AdminDashboard";
import UpdateData from "../components/AdminPage/UpdateData";
import CreateData from "../components/AdminPage/CreateData";
import PieChart from "../components/AdminPage/PieChart";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PaymentPage from "../Pages/PaymentPage";
import CartPage from "../Pages/CartPage";
import Admin_Home from "../components/Abhisek_Admin/Admin_Home";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Productspage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/adddata" element={<CreateData />} />
        <Route path="/admin" element={<Admin_Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/updatedata" element={<UpdateData />} />
        <Route path="/chart" element={<PieChart />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
