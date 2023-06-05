'use client'
import React, { useState } from 'react';
import { useSpring} from '@react-spring/web';
import {animated} from "@react-spring/web";
import { productData } from '../../products';
import Link from 'next/link';

const ProductDetailsCard = ({ name, image, price, shopName, distance, description, keywords}: productData) => {
    const [isReserved, setReserved] = useState(false);

    const [props, api] = useSpring(
        () => ({
            from: { opacity: 0 },
            to: { opacity: 1 },
            config: { duration: 500 }
        }),
        []
    )

    return (
    <animated.div style={props} className="bg-blur bg-opacity-70 backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-lg shadow-lg p-6 md:flex mb-20">
      <div className="md:w-1/2">
        <img src={image || "/ImagePlaceholder.png"} alt={name} className="w-full h-auto rounded-lg md:rounded-none object-contain" />
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
        <h2 className="text-2xl font-bold mb-1">
          {name}
          </h2>
        <hr className="w-full border-t border-darkTextSecondary" />
        <p className="text-gray-600 font-bold text-xl dark:text-gray-300 mt-2">
          ${price}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2 mb-6">
          {description}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          <span className="font-bold">Shop:</span> {shopName}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          <Link href="https://www.exampelShop.com" target='blank'>
            <span className="font-bold">
              Website:{" "}
            </span> 
            <span className="underline">
              exampelShop.com
            </span>
          </Link>
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          <Link href="tel:02342 543918">
            <span className="font-bold">
              Contact:{" "}
            </span> 
            <span className="underline">
              02342 543918
            </span>
          </Link>
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          <span className="font-bold">Distance:</span> {distance}km
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          <Link href="https://www.google.com/maps/dir/?api=1&origin=Heinrich-Heine-Universität+Düsseldorf,+Universitätsstraße,+Düsseldorf&destination=Düsseldorf+Hauptbahnhof,+Konrad-Adenauer-Platz,+Düsseldorf&travelmode=car" target="_blank">
            <span className="font-bold">
              Address:{" "}
            </span> 
            <span className="underline">
              Example Address, 40225 Düsseldorf 
            </span>
          </Link>
        </p>
        <div className="mt-4">
          <h3 className="text-gray-600 dark:text-gray-300 font-bold">Keywords:</h3>
          <p className="text-gray-600 dark:text-gray-300">
            {keywords && keywords.map((keyword, index) => (
              keyword + (index != keywords.length-1 ? " | " : "")
            ))}
          </p>
        </div>
        <button onClick={() => setReserved(!isReserved)} className="mb-8 bg-darkCard text-whiteCard dark:bg-whiteCard dark:text-darkCard font-bold py-1 px-8 mt-4 rounded focus:outline-none">
          {isReserved ? "Reserved" : "Reserve"}
        </button>
      </div>
      </animated.div>
  );
};

export default ProductDetailsCard;