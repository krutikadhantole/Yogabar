import { useParams } from "react-router-dom";
import products from "../../assets/data.js";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  if (!product)
    return <div className="text-center mt-10">Product not found.</div>;

  return (
    <div className="min-h-screen bg-[#fff5f5] px-4 py-8 flex justify-center items-center mt-20">
      <div className="bg-[#F5CBCB] shadow-xl rounded-xl p-6 max-w-4xl w-full flex flex-col md:flex-row gap-6">
        <img
          src={product.img}
          alt={product.title}
          className="w-full md:w-1/2 h-auto object-contain rounded-lg"
        />

        <div className="flex-1 space-y-4 mt-10">
          <h2 className="text-3xl font-bold text-[#5A2D2D]">{product.title}</h2>
          <p className="text-gray-600 text-lg">{product.description}</p>

          <div className="space-y-1 text-sm">
            <p>
              <span className="font-medium">Category:</span> {product.category}
            </p>
            <p>
              <span className="font-medium">Weight:</span> {product.weight}
            </p>
            <p>
              <span className="font-medium">Rating:</span> ⭐ {product.rating}
            </p>
            <p>
              <span className="font-medium">Status:</span>{" "}
              <span
                className={`${
                  product.status === "sale" ? "text-green-600" : "text-red-600"
                } font-semibold`}
              >
                {product.status.toUpperCase()}
              </span>
            </p>
          </div>

          <div className="text-2xl font-bold text-[#B22222]">
            ₹{product.price}
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-[#5A2D2D] hover:bg-[#7a4444] text-white px-5 py-2 rounded-lg transition"
            >
              Add to Cart
            </button>
            <button className="bg-yellow-300 hover:bg-yellow-200 text-black px-5 py-2 rounded-lg transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
