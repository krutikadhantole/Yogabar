import { toast } from "react-hot-toast";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import data from "../../assets/data.js";
import babyLeft from "../../assets/healthy.png";
import { CartContext } from "../../context/CartContext.jsx";

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Product added to cart!");
  };

  return (
    <div className="bg-[#FFEAEA] min-h-screen">
      <div className="flex justify-center items-center gap-6 mt-24 px-4 flex-wrap text-center">
        <motion.img
          src={babyLeft}
          alt="Left Baby"
          className="w-24 md:w-28 h-auto ml-0"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#AC1754]">
            Discover Our Deliciously Nutritious Range.
          </h1>
          <p className="text-lg text-[#7E2C23] italic mt-2">
            Nourish your body, fuel your soul.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 p-10">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-[#F5CBCB] rounded-2xl p-4 shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 flex flex-col items-center"
          >
            <img
              src={product.img}
              alt={product.title}
              onClick={() => navigate(`/product/${product.id}`)}
              className="w-48 h-48 object-contain rounded-xl mb-4 transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-[1.5deg] cursor-pointer"
            />
            <h2 className="text-lg font-bold text-[#AC1754] mb-1 text-center">
              {product.title}
            </h2>
            <p className="text-[#3F1B1B] text-sm mb-1 font-semibold">
              ₹{product.price}
            </p>
            <p className="text-[#6B3A3A] text-xs mb-2 italic">
              {product.weight}
            </p>

            <div className="flex gap-4">
              {/*Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-[#AC1754] text-white px-4 py-2 rounded-full text-sm hover:bg-[#8d1245] transition-colors duration-300 cursor-pointer"
              >
                Add to Cart
              </button>

              {/* See Details */}
              <Link to={`/product/${product.id}`}>
                <button className="border border-[#AC1754] text-[#AC1754] px-4 py-2 rounded-full text-sm hover:bg-[#FFEAEA] transition duration-300 cursor-pointer">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
