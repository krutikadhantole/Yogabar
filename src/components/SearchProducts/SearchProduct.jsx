import React, { useState } from "react";
import products from "../../assets/data.js";

const SearchProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (title) => {
    setSearchQuery(title);
    setShowSuggestions(false);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const productSuggestions = searchQuery
    ? products
        .filter((p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((p) => p.title)
        .filter((value, index, self) => self.indexOf(value) === index)
    : [];

  return (
    <div className="p-6 bg-[#FFEAEA] min-h-screen mt-20">
      <h2 className="text-2xl font-bold text-[#AC1754] mb-4 text-center">
        Search Products
      </h2>

      <div className="relative text-center">
        <input
          type="text"
          placeholder="Search by title or description..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-100 p-3 mb-2 rounded-full border border-[#AC1754] focus:outline-none focus:ring-2 focus:ring-[#AC1754] text-[#3F1B1B]"
        />

        {/* Suggestions */}
        {showSuggestions && searchQuery && productSuggestions.length > 0 && (
          <ul className="absolute left-100 z-10 bg-[#FFEAEA] border border-[#AC1754] w-100 max-h-48 overflow-y-auto rounded-xl mt-1 shadow-lg ">
            {productSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-3 hover:bg-[#FEE0ED] cursor-pointer text-[#3F1B1B]"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Show products only after searchQuery is not empty */}
      {searchQuery && (
        <>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-[#F5CBCB] rounded-xl shadow border border-[#AC1754] p-4"
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-40 object-contain mb-3 rounded"
                  />
                  <h3 className="font-bold text-[#3F1B1B]">{product.title}</h3>
                  <p className="text-sm text-[#3F1B1B]">
                    {product.description}
                  </p>
                  <p className="font-semibold text-[#AC1754] mt-2">
                    ₹{product.price} ({product.weight})
                  </p>
                  <p className="text-yellow-500">⭐ {product.rating}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-500 mt-6">No products found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default SearchProducts;
