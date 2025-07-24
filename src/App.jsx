import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Products from "./components/Products/Products.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProductDetail from "./components/Productdetails/ProductDetail.jsx";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/Signup/Signup.jsx";
import NutritionRecommend from "./components/NutritionRecommend/Nutritionrecomend.jsx";
import CartPage from "./components/CartPage/Cartpage.jsx";
import Spinner from "./components/Spinner/Spinner.jsx";
import SearchProducts from "./components/SearchProducts/SearchProduct.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen w-full ">
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/SearchProducts" element={<SearchProducts />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Product/:id" element={<ProductDetail />} />
        <Route path="/About" element={<About />} />
        <Route path="/NutritionRecommend" element={<NutritionRecommend />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
