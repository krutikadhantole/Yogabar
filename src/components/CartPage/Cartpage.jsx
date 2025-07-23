import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { motion } from "framer-motion";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="bg-[#FFEAEA] min-h-screen flex items-center justify-center px-4 py-10 mt-20">
      <motion.div
        className="bg-[#F5CBCB] p-6 sm:p-8 rounded-3xl shadow-2xl w-full max-w-4xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#AC1754] mb-6">
          Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-[#3F1B1B] font-medium text-lg">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-md flex flex-col sm:flex-row justify-between sm:items-center gap-4"
              >
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-[#AC1754]">
                    {item.title}
                  </h4>
                  <p className="text-[#3F1B1B] text-sm sm:text-base">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 font-medium text-sm sm:text-base"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="text-right mt-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#3F1B1B]">
                Total: ₹{total.toFixed(2)}
              </h3>

              <button
                onClick={clearCart}
                className="mt-4 py-2 px-6 bg-[#AC1754] hover:bg-[#8d1245] text-white font-semibold rounded-full transition duration-300"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CartPage;
