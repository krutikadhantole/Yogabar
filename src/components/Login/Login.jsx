import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // Add real authentication logic here
  };

  return (
    <div className="bg-[#FFEAEA] min-h-screen flex items-center justify-center px-4 mt-10">
      <motion.div
        className="bg-[#F5CBCB] p-8 rounded-3xl shadow-2xl w-full max-w-md"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-center text-[#AC1754] mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#3F1B1B]">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 mt-1 rounded-full border border-[#AC1754] focus:outline-none focus:ring-2 focus:ring-[#AC1754] bg-white text-[#3F1B1B]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#3F1B1B]">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 mt-1 rounded-full border border-[#AC1754] focus:outline-none focus:ring-2 focus:ring-[#AC1754] bg-white text-[#3F1B1B]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#AC1754] hover:bg-[#8d1245] text-white font-semibold rounded-full transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-[#6B3A3A] mt-4">
          Don't have an account?{" "}
          <Link to="/Signup" className="text-[#AC1754] hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
