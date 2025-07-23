import React, { useState } from "react";
import products from "../../assets/data.js";
import { motion } from "framer-motion";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
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
      const matchesGoal = !answers.goal || product.tags?.includes(mappedGoal);

      const matchesDiet =
        answers.diet.length === 0 ||
        answers.diet.every((diet) => product.tags?.includes(diet));

      const matchesAllergies =
        answers.allergies.length === 0 ||
        answers.allergies.every(
          (allergy) => !product.ingredients?.includes(allergy)
        );

      return matchesGoal && matchesDiet && matchesAllergies;
    });

    setRecommendations(result);
    nextStep();
  };

  return (
    <div className="bg-[#FFEAEA] min-h-screen flex items-center justify-center px-4 py-10">
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
            <div>
              <label className="block text-sm font-medium text-[#3F1B1B] mb-2">
                Your Fitness Goal:
              </label>
              <select
                name="goal"
                value={answers.goal}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full border border-[#AC1754] focus:outline-none focus:ring-2 focus:ring-[#AC1754] bg-[#FFEAEA] text-[#AC1754]"
                required
              >
                <option value="">Select...</option>
                <option value="weight_loss">Weight Loss</option>
                <option value="muscle_gain">Muscle Gain</option>
                <option value="energy">Energy Boost</option>
                <option value="healthy_snack">Healthy Snacking</option>
              </select>
            </div>
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
                {/* Non-Allergic */}
                <label className="block text-[#3F1B1B]">
                  <input
                    type="checkbox"
                    value="none"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setAnswers((prev) => ({ ...prev, allergies: [] }));
                      }
                    }}
                    checked={answers.allergies.length === 0}
                    className="mr-2"
                  />
                  Non-Allergic
                </label>

                {/* Allergic*/}
                {["nuts", "soy", "dairy", "milk"].map((item) => (
                  <label key={item} className="block text-[#3F1B1B]">
                    <input
                      type="checkbox"
                      value={item}
                      onChange={(e) => handleCheckboxChange(e, "allergies")}
                      checked={answers.allergies.includes(item)}
                      disabled={answers.allergies.length === 0}
                      className="mr-2"
                    />
                    {item.toUpperCase()}
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <label className="block text-sm font-medium text-[#3F1B1B] mb-2">
                Your Lifestyle:
              </label>
              <select
                name="lifestyle"
                value={answers.lifestyle}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full border border-[#AC1754] focus:outline-none focus:ring-2 focus:ring-[#AC1754] bg-white text-[#3F1B1B]"
                required
              >
                <option value="">Select...</option>
                <option value="athlete">Athlete</option>
                <option value="professional">Busy Professional</option>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
              </select>
            </div>
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
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#AC1754] mb-4">
              Recommended Products:
            </h3>
            {recommendations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendations.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-4 rounded-xl border border-[#AC1754] shadow"
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
              <p className="text-red-500 text-center">
                No matches found. Try different preferences!
              </p>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default NutritionRecommend;
