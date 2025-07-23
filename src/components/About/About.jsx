import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import vedio1 from "../../assets2/vedio1.mp4";
import vedio2 from "../../assets2/vedio2.mp4";
import vedio3 from "../../assets2/vedio3.mp4";
import vedio4 from "../../assets2/vedio4.mp4";

import twosister from "../../assets2/twosister.webp";
import yogabar1 from "../../assets2/yogabar1.jpg";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="px-6 md:px-20 py-12 bg-[#FFF3F3] mt-15">
      <h1
        className="text-4xl font-bold text-center text-[#AC1754] mb-6"
        data-aos="fade-down"
      >
        About Yoga Bar
      </h1>
      <p
        className="text-center text-[#7D1C4A] text-lg max-w-3xl mx-auto mb-10"
        data-aos="fade-up"
      >
        At Yoga Bar, we believe that healthy living starts with what you eat.
        That’s why we’re on a mission to create snacks that are clean,
        nutritious, and irresistibly delicious.
      </p>

      {/* Our Story Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <img
            src={twosister}
            alt="Our Team"
            className="rounded-2xl shadow-lg"
            data-aos="fade-right"
          />
          <h4 className="text-2xl text-center font-bold text-[#7A1F1F] mb-4">
            Suhasini & Anindita Sampath
          </h4>
        </div>
        <div data-aos="fade-left">
          <h2 className="text-2xl font-bold text-[#7A1F1F] mb-4">
            Our Journey
          </h2>
          <p className="text-[#7D1C4A] text-base">
            Yoga Bar started with a simple goal — to make healthy eating easy,
            fun, and flavorful. What began as a kitchen experiment quickly grew
            into a movement of health-conscious snacking powered by real
            ingredients.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center flex-row-reverse mb-16">
        <img
          src={yogabar1}
          alt="Our Mission"
          className="rounded-2xl shadow-lg"
          data-aos="fade-left"
        />
        <div data-aos="fade-right">
          <h2 className="text-2xl font-bold text-[#7A1F1F] mb-4">
            Our Mission
          </h2>
          <p className="text-[#7D1C4A] text-base">
            We're here to redefine snacking with nutrient-dense, high-protein
            bars, muesli, and nut butters – all made without junk. Our aim?
            Empower every individual to live a healthier and happier life.
          </p>
        </div>
      </div>

      {/* Videos & Instagram Section */}
      <div className="mb-10" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-[#AC1754] mb-6">
          Follow Us on Instagram
        </h2>
        <p className="text-center text-[#7D1C4A] mb-8">
          Catch behind-the-scenes moments, product sneak peeks, and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[vedio1, vedio2, vedio3, vedio4].map((vid, idx) => (
            <video
              key={idx}
              src={vid}
              controls
              className="w-full h-[450px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
        <div className="text-center mt-6">
          <a
            href="https://www.instagram.com/yogabars.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#AC1754] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#891342] transition"
          >
            Follow @YogaBar on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
