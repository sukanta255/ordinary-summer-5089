import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/Homepage/HomePage";
import Productspage from "../components/Productspage/Productspage";
import SingleProductPage from "../components/Productspage/SingleProductPage";
import EmptyCart from "../components/cartPage/EmptyCart";
import AddData from "../components/AdminPage/AddData";
import AdminDashboard from "../components/AdminPage/AdminDashboard";
import UpdateData from "../components/AdminPage/UpdateData";
import { CheckCircleIcon } from "@chakra-ui/icons";
import CreateData from "../components/AdminPage/CreateData";
import PieChart from "../components/AdminPage/PieChart";
import Login from "../Pages/Login";
// import SignUp from "../../Pages/Signup";
import SignUp from "../Pages/SignUp";
import PaymentPage from "../components/PaymentPage/PaymentPage";
import Cart from "../Pages/Cart";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Productspage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/cartpage" element={<Cart />} />
        <Route path="/emptycart" element={<EmptyCart />} />
        <Route path="/adddata" element={<CreateData />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/updatedata" element={<UpdateData />} />
        <Route path="/chart" element={<PieChart />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
