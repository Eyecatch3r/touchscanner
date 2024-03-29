'use client';
import React, { useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import Searchbar from "./components/searchbar/Searchbar";
import { useSpring } from '@react-spring/web';
import { animated } from "@react-spring/web";
import { products, productData } from './products';

export default function Home() {  
  const [props, api] = useSpring(
      () => ({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 }
      }),
      []
  )

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState("");
  function searchProduct(words: string) {
    setSearchTerm(words);
  }

  const filteredProducts = products
    .map((product) => ({
      ...product,
      matchCount: getMatchCount(product),
    }))
    .filter((product) => product.matchCount > 0)
    .sort((a, b) => {
      if (a.matchCount !== b.matchCount) {
        return b.matchCount - a.matchCount; // Sort by match count in descending order
      }
      if (a.distance !== b.distance) {
        return a.distance - b.distance; // Sort by distance in ascending order
      }
      return a.price - b.price; // Sort by price in ascending order
    });

  function handleSortChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSortBy(event.target.value);
  }

  const sortedProducts = [...filteredProducts];
  if (sortBy === "price") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "distance") {
    sortedProducts.sort((a, b) => a.distance - b.distance);
  }

  const featuredProducts: productData[] = products.filter((product) => product.isFeatured);
  if (sortBy === "price") {
    featuredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "distance") {
    featuredProducts.sort((a, b) => a.distance - b.distance);
  }

  function getMatchCount(product: productData) {
    const { name, description, keywords } = product;
    const searchWords = searchTerm.toLowerCase().trim().split(' ');
    const matchCount =
      searchWords.filter((word) => {
        const regex = new RegExp(word, 'i');
        return (
          regex.test(name) ||
          regex.test(description) ||
          keywords.some((keyword) => regex.test(keyword))
        );
      }).length;
    return matchCount;
  }

  return (
    <main className="h-screen">
      <div className="h-1/2 flex items-center justify-center">
        <Searchbar searchProduct={searchProduct}/>
      </div>
      <div className="my-10 flex items-center justify-between mb-1">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ml-5 lg:ml-20">
          {searchTerm || "Local  treasures:"}
        </h2>
        <div className="flex flex-wrap mr-5 lg:mr-20">
          <label htmlFor="sort" className="text-lg md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Sort by:
          </label>
          <select
              id="sort"
              value={sortBy}
              onChange={handleSortChange}
              className="ml-2 bg-whiteCard dark:bg-darkCard text-gray-900 dark:text-white px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">None</option>
            <option value="price">Price</option>
            <option value="distance">Distance</option>
          </select>
        </div>
      </div>
      <hr className="border-t-1 border-gray-300 mt-2 mb-6"/>
      <animated.div style={props} className="flex flex-wrap gap-6 justify-center items-center mb-40">
          {(searchTerm == '' ? featuredProducts : sortedProducts).map((product, index) => (
              <ProductCard key={index} {...product} />
          ))}
      </animated.div>
    </main>
  );
}
