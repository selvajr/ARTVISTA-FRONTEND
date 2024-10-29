import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArtDisplay from "./Pages/ArtDisplay/ArtDisplay";
import OnlyAdminPrivateRoute from "./Components/OnlyAdminPrivateRoute/OnlyAdminPrivateRoute";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import CartPage from "./Pages/CartPage/CartPage";
import AddItem from "./Components/AdminPanel/AddItem";
import ListItem from "./Components/AdminPanel/ListItem";
import Order from "./Components/AdminPanel/Order";
import EditItem from "./Components/AdminPanel/EditItem";
import Cart from "./Pages/Cart/Cart";
import OrderAddress from "./Pages/OrderAddress/OrderAddress";
import Myorder from "./Pages/MyOrders/Myorder";
import Verify from "./Pages/Verify/Verify";
import AdminVerify from "./Components/AdminVerification/AdminVerify";
import AdminActivating from "./Components/AdminVerification/AdminActivating";
import Footer from "./Components/Footer/Footer";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/admin-artist" element={<AdminVerify />} />
          <Route path="/admin-bio/:id/:token" element={<AdminActivating />} />

          {/* registered user routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/arts" element={<ArtDisplay />} />
            <Route path="/placeorder" element={<OrderAddress />} />
            <Route path="/cartpage" element={<Cart />} />
            <Route path="/cart/:id" element={<CartPage />} />
            <Route path="/myorder" element={<Myorder />} />
            <Route path="/verify" element={<Verify />} />
          </Route>

          {/* admin routes */}
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/add" element={<AddItem />} />
            <Route path="/admin/list" element={<ListItem />} />
            <Route path="/admin/orders" element={<Order />} />
            <Route path="/admin/edit/:id" element={<EditItem />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
