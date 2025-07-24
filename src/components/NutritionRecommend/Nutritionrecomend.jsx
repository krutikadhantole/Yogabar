import React, { useState } from "react";
import products from "../../assets/data.js";
import { motion } from "framer-motion";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const NutritionRecommend = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: "",
    diet: [],
    allergies: [],
    lifestyle: "",
  });
  const [recommendations, setRecommendations] = useState([]);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleCheckboxChange = (e, type) => {
    const { value, checked } = e.target;
    setAnswers((prev) => {
      const updated = checked
        ? [...prev[type], value]
        : prev[type].filter((item) => item !== value);
      return { ...prev, [type]: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const goalMapping = {
      weight_loss: "fiber",
      muscle_gain: "protein",
      energy: "energy",
      healthy_snack: "bar",
    };

    const mappedGoal = goalMapping[answers.goal];

    const result = products.filter((product) => {
      const matchesGoal =
        !answers.goal || product.tags?.some((tag) => tag.includes(mappedGoal));

      const matchesDiet =
        answers.diet.length === 0 ||
        answers.diet.some((diet) => product.tags?.includes(diet));

      const matchesAllergies =
        answers.allergies.length === 0 ||
        !answers.allergies.some((allergy) =>
          product.ingredients?.some((ingredient) =>
            ingredient.toLowerCase().includes(allergy.toLowerCase())
          )
        );

      return matchesGoal && matchesDiet && matchesAllergies;
    });

    if (result.length === 0) {
      const fallback = products.filter(
        (product) =>
          !answers.allergies.some((allergy) =>
            product.ingredients?.some((ingredient) =>
              ingredient.toLowerCase().includes(allergy.toLowerCase())
            )
          )
      );

      setRecommendations(fallback.slice(0, 3));
    } else {
      setRecommendations(result);
    }

    nextStep();
  };

  const CustomSelect = ({ label, value, onChange, options }) => (
    <div>
      <label className="block text-sm font-medium text-[#3F1B1B] mb-2">
        {label}
      </label>
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button className="w-full px-4 py-2 rounded-full border border-[#AC1754] bg-[#FFEAEA] text-[#AC1754] focus:outline-none focus:ring-2 focus:ring-[#AC1754] flex justify-between items-center">
            <span>
              {options.find((opt) => opt.value === value)?.label || "Select..."}
            </span>
            <ChevronUpDownIcon className="w-5 h-5 text-[#AC1754]" />
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-2 w-full rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                value={option.value}
                className={({ active }) =>
                  `cursor-pointer select-none relative px-4 py-2 ${
                    active ? "bg-[#F5CBCB] text-[#AC1754]" : "text-[#3F1B1B]"
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {option.label}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 right-4 flex items-center text-[#AC1754]">
                        <CheckIcon className="w-5 h-5" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );

  return (
    <div className="bg-[#FFEAEA] min-h-screen flex items-center justify-center px-4 py-10 mt-20">
      <motion.div
        className="bg-[#F5CBCB] p-8 rounded-3xl shadow-2xl w-full max-w-2xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-center text-[#AC1754] mb-6">
          Smart Nutrition Recommender
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <CustomSelect
              label="Your Fitness Goal:"
              value={answers.goal}
              onChange={(val) => setAnswers((prev) => ({ ...prev, goal: val }))}
              options={[
                { label: "Weight Loss", value: "weight_loss" },
                { label: "Muscle Gain", value: "muscle_gain" },
                { label: "Energy Boost", value: "energy" },
                { label: "Healthy Snacking", value: "healthy_snack" },
              ]}
            />
          )}

          {step === 2 && (
            <div>
              <label className="block text-sm font-medium text-[#3F1B1B] mb-2">
                Diet Preferences:
              </label>
              <div className="space-y-2">
                {["vegan", "gluten_free", "vegetarian", "keto"].map(
                  (option) => (
                    <label key={option} className="block text-[#3F1B1B]">
                      <input
                        type="checkbox"
                        value={option}
                        onChange={(e) => handleCheckboxChange(e, "diet")}
                        checked={answers.diet.includes(option)}
                        className="mr-2"
                      />
                      {option.replace("_", " ").toUpperCase()}
                    </label>
                  )
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <label className="block text-sm font-medium text-[#3F1B1B] mb-2">
                Allergies:
              </label>
              <div className="space-y-2">
                {["nuts", "soy", "dairy", "milk", "non-allergatic"].map(
                  (item) => (
                    <label key={item} className="block text-[#3F1B1B]">
                      <input
                        type="checkbox"
                        value={item}
                        onChange={(e) => handleCheckboxChange(e, "allergies")}
                        checked={answers.allergies.includes(item)}
                        className="mr-2"
                      />
                      {item.toUpperCase()}
                    </label>
                  )
                )}
              </div>
            </div>
          )}

          {step === 4 && (
            <CustomSelect
              label="Your Lifestyle:"
              value={answers.lifestyle}
              onChange={(val) =>
                setAnswers((prev) => ({ ...prev, lifestyle: val }))
              }
              options={[
                { value: "athlete", label: "Athlete" },
                { value: "professional", label: "Busy Professional" },
                { value: "student", label: "Student" },
                { value: "parent", label: "Parent" },
              ]}
            />
          )}

          <div className="flex justify-between pt-4">
            {step > 1 && step <= 4 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 text-[#3F1B1B] px-4 py-2 rounded-full"
              >
                Back
              </button>
            )}
            {step < 4 && (
              <button
                type="button"
                onClick={nextStep}
                className="bg-[#AC1754] hover:bg-[#8d1245] text-white px-6 py-2 rounded-full font-semibold"
              >
                Next
              </button>
            )}
            {step === 4 && (
              <button
                type="submit"
                className="bg-[#AC1754] hover:bg-[#8d1245] text-white px-6 py-2 rounded-full font-semibold"
              >
                Get Recommendations
              </button>
            )}
          </div>
        </form>

        {step === 5 && (
          <div className="mt-2 text-center">
            <h3 className="text-xl font-semibold text-[#AC1754] mb-4">
              Recommended Products:
            </h3>
            {recommendations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-10">
                {recommendations.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#FFEAEA] p-4 rounded-xl border border-[#AC1754] shadow"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-32 object-contain mb-3 rounded"
                    />
                    <h4 className="font-bold text-[#3F1B1B]">{item.title}</h4>
                    <p className="text-sm text-[#3F1B1B]">{item.description}</p>
                    <p className="text-[#AC1754] font-semibold mt-2">
                      ₹{item.price} ({item.weight})
                    </p>
                    <p className="text-yellow-500">⭐ {item.rating}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center">
                <p className="text-red-500 mb-4">
                  No matches found. But here are some popular picks you might
                  like:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {products
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 3)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="bg-white p-4 rounded-xl border border-[#AC1754] shadow"
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-32 object-contain mb-3 rounded"
                        />
                        <h4 className="font-bold text-[#3F1B1B]">
                          {item.title}
                        </h4>
                        <p className="text-sm text-[#3F1B1B]">
                          {item.description}
                        </p>
                        <p className="text-[#AC1754] font-semibold mt-2">
                          ₹{item.price} ({item.weight})
                        </p>
                        <p className="text-yellow-500">⭐ {item.rating}</p>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default NutritionRecommend;
