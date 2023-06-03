'use client';
import { useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import Searchbar from "./components/searchbar/Searchbar";
import Link from "next/link";
interface productData {
  name: string,
  price: number,
  distance: number,
  description: string,
  keywords: string[];
}

export default function Home() {
  const products = [
    {
      id: 0,
      name: 'AP Royale Oak Gold',
      image: '/RoyaleOak.png',
      price: 1239,
      shopName: 'Watches & jewerlery',
      distance: 0.4,
      description: 'This is the description for Product 1',
      keywords: ['keyword1', 'keyword2', 'keyword3'],
    },
    {
      id: 1,
      name: 'AP Royale Oak',
      image: '/RoyaleOak.png',
      price: 2343,
      shopName: 'Watches & jewerlery',
      distance: 0.4,
      description: 'This is the description for Product 1',
      keywords: ['keyword1', 'keyword2', 'keyword3'],
    },
    {
      id: 2,
      name: 'AP Royale Oak',
      image: '/RoyaleOak.png',
      price: 999,
      shopName: 'Watches & jewerlery',
      distance: 0.9,
      description: 'This is the description for Product 1',
      keywords: ['keyword1', 'keyword2', 'keyword3'],
    },
    {
      id: 3,
      name: 'AP Royale Oak',
      image: '/RoyaleOak.png',
      price: 109,
      shopName: 'Watches & jewerlery',
      distance: 5,
      description: 'This is the description for Product 1',
      keywords: ['keyword1', 'keyword2', 'keyword3'],
    },
    {
      id: 4,
      name: 'AP Royale Oak',
      image: '/RoyaleOak.png',
      price: 1239,
      shopName: 'Watches & jewerlery',
      distance: 0.23,
      description: 'This is the description for Product 1',
      keywords: ['keyword1', 'keyword2', 'keyword3'],
    },
    {
      id: 5,
      name: 'AP Royale Oak',
      image: '/RoyaleOak.png',
      price: 2343,
      shopName: 'Watches & jewerlery',
      distance: 0.4,
      description: 'This is the description for Product 1',
      keywords: ['keyword1', 'keyword2', 'keyword3'],
    },
    {
      id: 6,
      name: 'AP Royale Oak',
      image: '/RoyaleOak.png',
      price: 999,
      shopName: 'Watches & jewerlery',
      distance: 0.9,
      description: 'This is the description for Product 1',
      keywords: ['keyword1', 'keyword2', 'keyword3'],
    },
    {
      id: 7,
      name: 'AP Royale Oak',
      image: '/RoyaleOak.png',
      price: 109,
      shopName: 'Watches & jewerlery',
      distance: 5,
      description: 'This is the description for Product 1',
      keywords: ['keyword1', 'keyword2', 'keyword3'],
    },
    {
      id: 8,
      name: 'AP Royale Oak',
      image: '/RoyaleOak.png',
      price: 109,
      shopName: 'Watches & jewerlery',
      distance: 5,
      description: 'This is the description for Product 1',
      keywords: ['keyword1', 'keyword2', 'keyword3'],
    },
    {
      id: 9,
      name: 'AP Royale Oak',
      image: '/RoyaleOak.png',
      price: 109,
      shopName: 'Watches & jewerlery',
      distance: 5,
      description: 'This is the description for Product 1',
      keywords: ['keyword1', 'keyword2', 'keyword3'],
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

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
      <div className="my-10">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ml-5 lg:ml-20">
          {searchTerm || "Local treasures:"}
        </h2>
        <hr />
      </div>
      <div className="flex flex-wrap gap-6 justify-center items-center mb-40">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

    </main>
  )
}
