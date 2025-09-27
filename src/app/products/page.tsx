"use client";

import { useState, useMemo } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Star,
  Grid as GridIcon,
  List as ListIcon,
} from "lucide-react";

// Example product data
const products = [
  {
    id: 1,
    name: "Eco-friendly Water Bottle",
    description: "Reusable stainless steel water bottle with insulation.",
    price: 24.99,
    originalPrice: 29.99,
    category: "Home & Kitchen",
    rating: 4.5,
    reviews: 128,
    image: "https://via.placeholder.com/400x300",
    inStock: true,
    isBestSeller: true,
    isNew: false,
    isPremium: false,
    badges: ["Eco-Friendly", "BPA Free"],
    size: "750ml",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    description: "Noise-cancelling earbuds with long battery life.",
    price: 79.99,
    category: "Electronics",
    rating: 4.8,
    reviews: 342,
    image: "https://via.placeholder.com/400x300",
    inStock: true,
    isBestSeller: true,
    isNew: true,
    isPremium: true,
    badges: ["Free Shipping", "1-Year Warranty"],
    size: "One Size",
  },
  // Add more products as needed...
];

const categories = ["all", "Electronics", "Fashion", "Home & Kitchen", "Books"];

export default function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("popularity");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const [quickFilters, setQuickFilters] = useState({
    inStock: false,
    bestSellers: false,
    newProducts: false,
    premiumOnly: false,
  });

  const toggleQuickFilter = (key: keyof typeof quickFilters) => {
    setQuickFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Filtering & sorting
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesSearch = product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesCategory =
          selectedCategory === "all" || product.category === selectedCategory;
        const matchesPrice =
          product.price >= priceRange[0] && product.price <= priceRange[1];
        const matchesQuickFilters =
          (!quickFilters.inStock || product.inStock) &&
          (!quickFilters.bestSellers || product.isBestSeller) &&
          (!quickFilters.newProducts || product.isNew) &&
          (!quickFilters.premiumOnly || product.isPremium);

        return (
          matchesSearch && matchesCategory && matchesPrice && matchesQuickFilters
        );
      })
      .sort((a, b) => {
        if (sortBy === "priceLowHigh") return a.price - b.price;
        if (sortBy === "priceHighLow") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return b.reviews - a.reviews; // popularity default
      });
  }, [searchTerm, selectedCategory, priceRange, quickFilters, sortBy]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 bg-gray-50">
      {/* Sidebar Filters */}
      <aside className="lg:w-1/4 bg-white p-6 rounded-2xl shadow-sm space-y-6">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition ${
                    selectedCategory === category
                      ? "bg-blue-100 text-blue-600 font-medium"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-semibold mb-2">Price Range</h3>
          <input
            type="range"
            min={0}
            max={1000}
            step={10}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        {/* Quick Filters */}
        <div>
          <h3 className="font-semibold mb-2">Quick Filters</h3>
          <div className="space-y-2">
            {[
              { key: "inStock", label: "In Stock Only" },
              { key: "bestSellers", label: "Best Sellers" },
              { key: "newProducts", label: "New Products" },
              { key: "premiumOnly", label: "Premium Products" },
            ].map(({ key, label }) => (
              <label key={key} className="flex items-center">
                <input
                  type="checkbox"
                  checked={quickFilters[key as keyof typeof quickFilters]}
                  onChange={() =>
                    toggleQuickFilter(key as keyof typeof quickFilters)
                  }
                  className="mr-2"
                />
                <span className="text-sm">{label}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:w-3/4">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          {/* Search */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          {/* Sort + View Mode */}
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-3 py-2"
            >
              <option value="popularity">Sort by Popularity</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg ${
                  viewMode === "grid"
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                <GridIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg ${
                  viewMode === "list"
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                <ListIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div
          className={
            viewMode === "grid"
              ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6"
              : "space-y-6"
          }
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              {/* Product Image */}
              <div
                className={`${
                  viewMode === "list" ? "w-1/3" : "w-full"
                } relative`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    New
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                    Best Seller
                  </span>
                )}
                {product.isPremium && (
                  <span className="absolute bottom-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                    Premium
                  </span>
                )}
              </div>

              {/* Product Content */}
              <div
                className={`${viewMode === "list" ? "w-2/3 p-6" : "p-4"}`}
              >
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.size}</p>

                {/* Rating */}
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.round(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.reviews})
                  </span>
                </div>

                {/* Description (list view only) */}
                {viewMode === "list" && (
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                )}

                {/* Price */}
                <div className="flex items-center mb-3">
                  <span className="text-lg font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="ml-2 text-sm text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.badges.map((badge) => (
                    <span
                      key={badge}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    <ShoppingCart className="h-4 w-4 inline mr-1" />
                    Add to Cart
                  </button>
                  <button className="p-2 border rounded-lg text-gray-500 hover:text-red-500 hover:border-red-500">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
