import React from "react";
import Marquee from "react-fast-marquee";
import yoga1 from "../../assets/yoga1.png";
import yoga2 from "../../assets/yoga2.png";
import yoga3 from "../../assets/yoga3.png";
import yoga4 from "../../assets/yoga4.png";
import yoga5 from "../../assets/yoga5.png";
import yoga6 from "../../assets/yoga6.png";
import yoga7 from "../../assets/yoga7.png";

const yogaImages = [
  yoga1,
  yoga2,
  yoga3,
  yoga4,
  yoga5,
  yoga6,
  yoga7,
  yoga1,
  yoga2,
  yoga3,
  yoga4,
  yoga5,
  yoga6,
  yoga7,
];

const Asan = () => {
  return (
    <div className="bg-[#FFEAEA] py-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-[#FFEAEA] to-transparent z-10" />
      <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#FFEAEA] to-transparent z-10" />

      <Marquee pauseOnHover={true} speed={40} gradient={false}>
        {yogaImages.map((img, index) => (
          <div
            key={index}
            className="p-4 hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <img
              src={img}
              alt={`yoga-${index}`}
              className="w-24 h-24 rounded-full shadow-md object-contain "
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Asan;
