import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Logo from "../Logos/Logo.jsx";
import Child from "../Child/Child.jsx";
import Asan from "../Asanas/Asan.jsx";
import Category from "../Category/Category.jsx";
import Vedio from "../Vedio/Vedio.jsx";
import Faqs from "../Faqs/Faqs.jsx";

import chochomuesli from "../../assets/chochomuesli.png";
import bars from "../../assets/bars.png";
import img1 from "../../assets/img1.png";
import oatsA1 from "../../assets/oatsA1.png";
import pp from "../../assets/pp.png";
import BarA1 from "../../assets/BarA1rb.png";
import MasalaOats from "../../assets/MasalaOats.png";

import "./Home.css";

const imagesData = [
  {
    id: 1,
    img: chochomuesli,
    title: "Choco Muesli",
    tagline: "Start your day with crunch & chocolate",
  },
  {
    id: 2,
    img: pp,
    title: "Pro Clean Plant Protein",
    tagline: "Natural sweetness packed with energy",
  },
  {
    id: 3,
    img: oatsA1,
    title: "Dark Chocolate oats",
    tagline: "Healthy & indulgent snack anytime",
  },
  {
    id: 4,
    img: BarA1,
    title: "Protein bars",
    tagline: "Power-packed bars for your active day",
  },
  {
    id: 5,
    img: img1,
    title: "Pancake Mix",
    tagline: "Pancakes Just Got a Protein Makeover!",
  },
  {
    id: 6,
    img: bars,
    title: "Power Up Bar",
    tagline: "Nutritious start with ancient grains",
  },
  {
    id: 7,
    img: MasalaOats,
    title: "Masala Oats",
    tagline: "Nutritious start with ancient grains",
  },
];

const Home = () => {
  const flipSound = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    AOS.init({ offset: 100, duration: 600, easing: "ease-in-out" });
    AOS.refresh();

    const initialTimeout = setTimeout(() => {
      controls.start({
        x: [0, -5, 5, -5, 5, 0],
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    }, 2000);

    const interval = setInterval(() => {
      controls.start({
        x: [0, -5, 5, -5, 5, 0],
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    }, 6000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [controls]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    if (flipSound.current) {
      flipSound.current.currentTime = 0;
      flipSound.current.play();
    }
  };

  const activeData = imagesData[activeIndex];

  return (
    <div className="Home ">
      <div className="HomePage w-full overflow-x-hidden bg-[#FFEAEA] py-12 px-4 sm:px-10">
        <div className="max-w-6xl mx-auto mt-15">
          {/* <h1
            className="text-center text-[#7E2C23] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight tracking-wide"
            data-aos="fade-up"
          >
            Real Ingredients. Real Energy. Real You.
          </h1> */}

          <div
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 rounded-3xl shadow-lg p-8 bg-[#F49BAB]"
            data-aos="zoom-in-up"
          >
            <div
              className="flex flex-col gap-4 items-center md:items-start text-center md:text-left transition-all duration-500 ease-in-out ml-4 sm:ml-10"
              data-aos="fade-right"
            >
              <h2 className="text-[#7E2C23] uppercase font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                {activeData?.title}
              </h2>
              <p className="text-[#7D1C4A] text-base sm:text-lg md:text-xl font-medium">
                {activeData?.tagline}
              </p>
              <motion.div animate={controls}>
                <Link
                  to="/products"
                  className="text-black font-bold bg-yellow-300 rounded px-4 py-2 hover:scale-105 transition duration-300 inline-block"
                >
                  Buy now
                </Link>
              </motion.div>
            </div>

            <div className="flex justify-center" data-aos="fade-left">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                onSlideChange={handleSlideChange}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]"
              >
                {imagesData.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    style={{
                      width: "300px",
                      height: "400px",
                      boxShadow: "0 25px 45px rgba(197, 90, 110, 0.3)",
                      borderRadius: "1.5rem",
                    }}
                    className="bg-[#FFEAEA] rounded-2xl overflow-hidden flex items-center justify-center hover:scale-105 transition-all duration-300"
                  >
                    <img
                      src={item.img}
                      alt={`product-${item.id}`}
                      className="object-contain w-full h-full rounded-xl p-4 bg-[#F5CBCB]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="features w-full" data-aos="fade-up" data-aos-delay="200">
        <Logo />
        <Child />
        <Asan />
        <Category />
        <Vedio />
        <Faqs />
      </div>
    </div>
  );
};

export default Home;
