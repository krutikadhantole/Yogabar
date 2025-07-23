import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import vdo1 from "../../assets/vdo1.mp4";
import vdo2 from "../../assets/vdo2.mp4";
import vdo3 from "../../assets/vdo3.mp4";
import vdo4 from "../../assets/vdo4.mp4";
import PeanutButter1 from "../../assets/PeanutButter1.png";
import PeanutButter3 from "../../assets/PeanutButter3.png";
import PeanutButter4 from "../../assets/PeanutButter4.png";
import PeanutButter5 from "../../assets/PeanutButter5.png";

const videos = [
  {
    id: 1,
    title: "Rice creamy , Peanut Delish",
    src: vdo1,
    poster: PeanutButter1,
    aos: "zoom-in-up",
  },
  {
    id: 2,
    title: "Dellicious wholesome , kinda morning...",
    src: vdo2,
    poster: PeanutButter3,
    aos: "fade-up",
  },
  {
    id: 3,
    title: "Easy sandwich recipe for those busy days",
    src: vdo3,
    poster: PeanutButter4,
    aos: "flip-left",
  },
  {
    id: 4,
    title: "Museli make it more tastier",
    src: vdo4,
    poster: PeanutButter5,
    aos: "fade-right",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Video = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="py-10 px-4 md:px-20 bg-[#FFEAEA] mt-5">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#AC1754]">
        Let's create some healthy dishes <br></br>
        <span className="text-[#7E2C23] text-2xl md:text-3xl font-bold text-center italic">
          with yogaBar products
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {videos.map((video, i) => (
          <motion.div
            key={video.id}
            className="bg-[#F5CBCB] rounded-2xl overflow-hidden shadow-md cursor-pointer"
            custom={i}
            initial={{ opacity: 0, x: -100 }} // 🡐 Start off-screen to the left
            whileInView={{ opacity: 1, x: 0 }} // 🡒 Slide in to final position
            viewport={{ once: true, amount: 0.3 }} // Only run once when 30% in view
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: i * 0.2,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 25px rgba(74, 69, 69, 0.3)",
              transition: { type: "tween", duration: 0.4 },
            }}
          >
            <video
              className="w-full h-[420px] object-contain bg-[#F5CBCB]rounded-t-2xl"
              controls
              poster={video.poster}
              onMouseEnter={(e) => e.target.play()}
              onMouseLeave={(e) => {
                e.target.pause();
                e.target.currentTime = 0;
              }}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#7A1F1F]">
                {video.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Video;
