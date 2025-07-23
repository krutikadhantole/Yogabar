import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ragi from "../../assets/ragi.png";
import oats from "../../assets/oats.png";
import jaggery from "../../assets/jaggery.png";
import datesPowder from "../../assets/datesPowder.png";
import baby from "../../assets/baby.png";
import baby2 from "../../assets/baby2.png";

//

const child = () => {
  // const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-[#FFEAEA]">
      <div className="flex flex-col p-10">
        {/* Headings with baby images on both sides */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <motion.img
              src={baby}
              alt="baby-left"
              className="w-24 h-24 object-contain"
              // className="w-24 md:w-28 h-auto"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />

            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-[#AC1754]">
                Wholesome Nutrition for Your Little One
              </h1>
              <h2 className="text-xl  font-bold  text-[#7E2C23]">
                <i>"Tiny Tummies, Big Nutrition."</i>
              </h2>
            </div>

            <motion.img
              src={baby2}
              alt="baby-right"
              className="w-24 h-24 object-contain"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {/* Card */}
          {[
            {
              img: ragi,
              title: "Sprouted & Ragi Mix",
              desc: "A nutritious blend of sprouted grains and ragi for healthy growth.",
            },
            {
              img: oats,
              title: "Saffron & Oats Mix",
              desc: "A wholesome mix of oats with a hint of saffron for flavor.",
            },
            {
              img: jaggery,
              title: "Jaggery Powder",
              desc: "Natural jaggery powder for a healthy sweetener option.",
            },
            {
              img: datesPowder,
              title: "Dates Powder",
              desc: "Nutritious dates powder for added sweetness and energy.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#F5CBCB] rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                className="w-48 h-48 object-cover mb-4 rounded-md"
                src={item.img}
                alt={item.title}
              />
              <h3 className="text-lg font-bold text-[#AC1754] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-center text-[#3F1B1B] px-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default child;
