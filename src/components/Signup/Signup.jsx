import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("User signed up:", formData);
    // Add your sign-up logic here (API/Firebase etc.)
  };

  return (
    <div className="bg-[#FFEAEA] min-h-screen flex items-center justify-center px-4 mt-10">
      <motion.div
        className="bg-[#F5CBCB] p-8 rounded-3xl shadow-2xl w-full max-w-md mt-20 mb-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-center text-[#AC1754] mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#3F1B1B]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 rounded-full border border-[#AC1754] focus:outline-none focus:ring-2 focus:ring-[#AC1754] bg-white text-[#3F1B1B]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#3F1B1B]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 rounded-full border border-[#AC1754] focus:outline-none focus:ring-2 focus:ring-[#AC1754] bg-white text-[#3F1B1B]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#3F1B1B]">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 rounded-full border border-[#AC1754] focus:outline-none focus:ring-2 focus:ring-[#AC1754] bg-white text-[#3F1B1B]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#3F1B1B]">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 rounded-full border border-[#AC1754] focus:outline-none focus:ring-2 focus:ring-[#AC1754] bg-white text-[#3F1B1B]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#AC1754] hover:bg-[#8d1245] text-white font-semibold rounded-full transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-[#6B3A3A] mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#AC1754] hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
