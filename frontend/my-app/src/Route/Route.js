import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Product from "../pages/product/Products";
import FashionPage from "../pages/fashions/FashionPage";
import NewsPage from "../pages/newspage/NewsPage";
import ContactUs from "../pages/contact/ContactUs";
import Dashboard from "../admin/pages/Dashboard/Dashboard";
import AddProduct from "../admin/pages/Product/AddProduct";
import ViewProduct from "../admin/pages/Product/ViewProduct";
import CreateUser from "../pages/createuser/CreateUser";
import SignIn from "../pages/login/SignIn";
import Cart from "../component/cart/Cart";

export default function route() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/fashion" element={<FashionPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<CreateUser />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/viewproduct" element={<ViewProduct />} />
      </Routes>
    </div>
  );
}
