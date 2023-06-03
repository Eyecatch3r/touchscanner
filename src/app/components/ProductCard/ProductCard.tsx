import Link from 'next/link';
import React from 'react';

interface productCardProps {
    id: number,
    name: string,
    image: string,
    price: number,
    shopName: string,
    distance: number,
};

const ProductCard = ({ id, name, image, price, shopName, distance}: productCardProps) => {
  return (
    <Link href={`/product/${id}`}>
        <div className="w-64 bg-whiteCard border border-whiteCard rounded-lg shadow-md dark:bg-darkCard dark:border-darkCard overflow-hidden transition duration-300 hover:shadow-xl hover:scale-105">
            <img className="p-8 rounded-t-lg transition duration-500 hover:scale-125 hover:rotate-12" src={image} alt={name} />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className="text-sm font-semibold tracking-tight text-whiteTextSecondary dark:text-darkTextSecondary">{shopName}</p>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}€</span>
                    <span className="text-1xl font-bold text-gray-900 dark:text-white">{distance}km</span>
                </div>
            </div>
        </div>
    </Link>
  );
};

export default ProductCard;