'use client'
import React from 'react';
import { useSpring} from '@react-spring/web';
import {animated} from "@react-spring/web";
interface productDetailsCardProps {
    name: string;
    image: string;
    price: number;
    shopName: string;
    distance: number;
    description: string;
    keywords: string[];
}

const ProductDetailsCard = ({ name, image, price, shopName, distance, description, keywords}: productDetailsCardProps) => {
    const [props, api] = useSpring(
        () => ({
            from: { opacity: 0 },
            to: { opacity: 1 },
            config: { duration: 500 }
        }),
        []
    )

    return (
    <animated.div style={props} className="bg-blur bg-opacity-70 backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-lg shadow-lg p-6 md:flex">
      <div className="md:w-1/2">
        <img src={image} alt={name} className="w-full h-auto rounded-lg md:rounded-none object-contain" />
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
        <h2 className="text-2xl font-bold mb-1">{name}</h2>
        <hr className="w-full border-t border-darkTextSecondary" />
        <p className="text-gray-600 dark:text-gray-300 mt-2">${price}</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          <span className="font-bold">Shop:</span> {shopName}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          <span className="font-bold">Distance:</span> {distance} miles
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
        <div className="mt-4">
          <h3 className="text-gray-600 dark:text-gray-300 font-bold">Keywords:</h3>
          <ul className="mt-2">
            {keywords.map((keyword, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-300">
                {keyword}
              </li>
            ))}
          </ul>
        </div>
        <button className="mb-8 bg-darkCard text-whiteCard dark:bg-whiteCard dark:text-darkCard font-bold py-1 px-8 mt-4 rounded focus:outline-none">
          Reserve
        </button>
      </div>
    </animated.div>
  );
};

export default ProductDetailsCard;