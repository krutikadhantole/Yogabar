import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import highcalcium from "../../assets/highcalcium.png";
import strength1 from "../../assets/strength1.png";
import gluten from "../../assets/gluten.png";
import preservative from "../../assets/preservative.png";
import sugar from "../../assets/sugarfree.png";
import probiotics from "../../assets/probiotics1.png";
import fiber from "../../assets/fiber.png";
import pre from "../../assets/pre.png";

const Logo = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-[#FFEAEA]">
      <div className="flex flex-wrap justify-center items-center gap-10 p-10">
        <div
          className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img className="w-20 h-20" src={sugar} alt="" />
          <p className=" text-[#AC1754] font-semibold font-sm">
            No Added Sugar
          </p>
        </div>

        <div
          className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            className="w-20 h-20 bg-[#FBB80F] rounded-full"
            src={pre}
            alt=""
          />
          <p className="text-[#AC1754] font-semibold font-sm">
            No Preservatives
          </p>
        </div>
        <div
          className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            className="w-20 h-20 object-contain bg-[#8DC73F]  rounded-full"
            src={highcalcium}
            alt=""
          />
          <p className="text-[#AC1754] font-semibold font-sm">
            Rich in Calcium
          </p>
        </div>
        <div
          className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img
            className="w-20 h-20 bg-blue-200 rounded-full p-2"
            src={probiotics}
            alt=""
          />
          <p className="text-[#AC1754] font-semibold font-sm">Probiotics</p>
        </div>

        <div
          className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img
            className="w-20 h-20 bg-[#8DC73F] rounded-full p-2"
            src={strength1}
            alt=""
          />
          <p className="text-[#AC1754] font-semibold font-sm">
            Rich in Protein
          </p>
        </div>

        <div
          className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <img className="w-20 h-20  " src={gluten} alt="" />
          <p className="text-[#AC1754] font-semibold font-sm">Gluten Free</p>
        </div>

        <div
          className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <img
            className="w-20 h-20 bg-[#8DC73F] rounded-full p-2"
            src={fiber}
            alt=""
          />
          <p className="text-[#AC1754] font-semibold font-sm">High Fiber</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
