import React from "react";

type FilterPanelProps = {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  priceRange: number[];
  onPriceChange: (range: number[]) => void;
  minRating: number;
  onRatingChange: (rating: number) => void;
  onClearFilters: () => void;
};

const FilterPanel: React.FC<FilterPanelProps> = ({
  categories,
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceChange,
  minRating,
  onRatingChange,
  onClearFilters,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl">
      <h4 className="font-bold text-xl text-gray-800 mb-4">Filters</h4>
      {/* Category Filter */}
      <div className="mb-6">
        <p className="text-gray-700 font-semibold mb-2">Categories</p>
        {categories.map((cat) => (
          <label key={cat} className="flex items-center mb-1 cursor-pointer">
            <input
              type="checkbox"
              className="form-checkbox text-indigo-600 h-5 w-5"
              checked={selectedCategories.includes(cat)}
              onChange={() => onCategoryChange(cat)}
            />
            <span className="ml-2 text-gray-600">{cat}</span>
          </label>
        ))}
      </div>
      {/* Price Range Filter */}
      <div className="mb-6">
        <p className="text-gray-700 font-semibold mb-2">Price Range</p>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) =>
            onPriceChange([priceRange[0], Number(e.target.value)])
          }
          className="w-full h-2 bg-gradient-to-r from-green-300 to-blue-500 rounded-lg appearance-none cursor-pointer"
        />
        <div className="text-sm text-gray-500 mt-1">
          ${priceRange[0]} - ${priceRange[1]}
        </div>
      </div>
      {/* Minimum Rating Selector */}
      <div className="mb-6">
        <p className="text-gray-700 font-semibold mb-2">Minimum Rating</p>
        <select
          value={minRating}
          onChange={(e) => onRatingChange(Number(e.target.value))}
          className="form-select w-full py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        >
          {[0, 1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r} Stars
            </option>
          ))}
        </select>
      </div>
      {/* Clear Filters Button */}
      <button
        onClick={onClearFilters}
        className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition-colors duration-300 shadow"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterPanel;
