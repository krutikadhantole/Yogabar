import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const faqs = [
  {
    question: "What are Yoga Bars made of?",
    answer:
      "Yoga Bars are made using real, natural ingredients like oats, nuts, seeds, and honey with no preservatives or artificial flavors.",
  },
  {
    question: "Are Yoga Bars suitable for kids?",
    answer:
      "Yes! Yoga Bars are safe for kids above the age of 5. They are made from wholesome ingredients, making them a great school snack.",
  },
  {
    question: "Do Yoga Bars contain added sugar?",
    answer:
      "No added refined sugar. We use natural sweeteners like dates and honey in most of our products.",
  },
  {
    question: "Are your protein bars vegan?",
    answer:
      "Some of our protein bars are 100% vegan. Please check the ingredient list on the packaging or product page.",
  },
  {
    question: "How should I store Yoga Bars?",
    answer:
      "Store in a cool and dry place, away from direct sunlight. No refrigeration required unless stated.",
  },
  {
    question: "Where can I buy Yoga Bars?",
    answer:
      "You can buy directly from our website, Amazon, Flipkart, and leading retail stores across India.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-[#FFEAEA] text-[#AC1754] py-20 px-4 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl font-extrabold text-center mb-12"
          data-aos="fade-up"
        >
          FAQ's
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F5CBCB] rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-300"
              data-aos="fade-up"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <span className="text-2xl transform transition-transform duration-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-base text-[#7E2C23]"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
