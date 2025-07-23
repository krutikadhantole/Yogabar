import React, { useState } from "react";
import { Link } from "react-router-dom";
import barbox from "../../assets/barbox.png";
import ragi from "../../assets/ragi.png";
import oats from "../../assets/oats.png";
import chunknut from "../../assets/chunknut.png";
import cream from "../../assets/cream.png";
import dates from "../../assets/dates.png";
import pista from "../../assets/pista.png";
import peanutbutter from "../../assets/peanutbutter.png";
import shakes from "../../assets/shakes.png";

const data = [
  {
    id: 1,
    img: barbox,
    title: "Yoga Bar Box",
    desc: "A delightful assortment of our best-selling bars.",
    price: "₹ 499",
    buttonText: "Add to Cart",
    buttonText2: "See Details",
  },
  {
    id: 2,
    img: ragi,
    title: "Ragi Mix",
    desc: "A nutritious mix made with ragi, perfect for a healthy snack.",
    price: "₹ 299",
    buttonText: "Add to Cart",
    buttonText2: "See Details",
  },
  {
    id: 3,
    img: oats,
    title: "Oats Mix",
    desc: "A wholesome mix packed with oats for sustained energy.",
    price: "₹ 199",
    buttonText: "Add to Cart",
    buttonText2: "See Details",
  },
  {
    id: 4,
    img: chunknut,
    title: "Chunk Nuts",
    desc: "A crunchy nuts loaded with nuts and seeds.",
    price: "₹ 249",
    buttonText: "Add to Cart",
    buttonText2: "See Details",
  },
  {
    id: 5,
    img: shakes,
    title: "Protein shakes",

    desc: "A delicious and nutritious protein shakes",
    price: "₹ 840",
    buttonText: "Add to Cart",
    buttonText2: "See Details",
  },
  {
    id: 6,
    img: dates,
    title: "Monk fruit & Dates",
    desc: "ProClean Whey with Monk Fruit (Chocolate) ",
    price: "₹ 199",
    buttonText: "Add to Cart",
    buttonText2: "See Details",
  },
  {
    id: 7,
    img: pista,
    title: "Pista Power Bar",
    desc: "A power-packed bar with the goodness of pistachios.",
    price: "₹ 249",
    buttonText: "Add to Cart",
    buttonText2: "See Details",
  },
  {
    id: 8,
    img: peanutbutter,
    title: " Peanunt butter",
    desc: "High protein spread that’s smooth, creamy, and delightfully buttery ",
    price: "₹ 249",
    buttonText: "Add to Cart",
    buttonText2: "See Details",
  },
];

const Category = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="bg-[#FFEAEA] min-h-screen mt-5">
      {/* Heading */}
      <div className="text-center  ">
        <h1 className="text-3xl md:text-4xl font-bold text-[#AC1754]">
          Discover Our Yoga Bar Range
        </h1>
        <p className="text-lg text-[#7E2C23] font-bold italic mt-2">
          Nourish your body, fuel your soul.
        </p>
      </div>

      {/* Products*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 p-10">
        {data.map((data, index) => (
          <div
            key={index}
            className="bg-[#F5CBCB] rounded-2xl p-4 shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 flex flex-col items-center "
          >
            <img
              src={data.img}
              alt={data.title}
              className="w-[180px] h-[180px] object-cover rounded-xl mb-4 
               
               transition-transform duration-300 ease-in-out 
               hover:scale-105 hover:rotate-[1.5deg]"
            />

            <h2 className="text-xl font-bold text-[#3A0519] text-center mb-2">
              {data.title}
            </h2>
            <p className="text-[#3F1B1B] text-center text-sm mb-4">
              {data.desc}
            </p>
            <p className="text-[#3F1B1B] text-lg font-bold text-center mb-4">
              {data.price}
            </p>
            <div className="flex gap-4">
              <button className="bg-[#AC1754] text-white px-4 py-2 rounded-full text-sm hover:bg-[#8d1245] transition-colors duration-300">
                Add to Cart
              </button>
              <button className="border border-[#AC1754] text-[#AC1754] px-4 py-2 rounded-full text-sm hover:bg-[#FFEAEA] transition duration-300">
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {!showMore && (
        <div className="flex justify-center items-center mt-6">
          <Link
            to="/products"
            className="inline-block bg-[#AC1754] text-white px-6 py-2 rounded-full hover:bg-[#8d1245] transition-colors duration-300"
          >
            Show More Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default Category;
