'use client'
import {useState} from "react";
import ProductForm from "@/app/components/ProductForm/ProductForm";
import {products} from "@/app/products";
import ProductCard from "@/app/components/ProductCard/ProductCard";

export default function Page() {
    const [isCardVisible, setIsCardVisible] = useState(true);

    const handleAddReservation = () => {
        setIsCardVisible(false);
    };

    return (
        <main className="h-screen">
            <div className="min-h-screen mx-4">
                <h1 className="text-2xl font-bold my-2">
                    Manage Reservations
                </h1>
                <hr className="w-full border-t mb-4 border-darkTextSecondary" />
                {isCardVisible && (<div><ProductCard className="flex flex-wrap gap-6 justify-center items-center mt-4 mb-40" key={1} {...products[0]}></ProductCard>
                    <button
                        className="mb-8 bg-darkCard text-whiteCard dark:bg-whiteCard dark:text-darkCard font-bold py-1 px-8 mt-4 rounded focus:outline-none"
                        onClick={handleAddReservation}
                    >
                        remove reservation
                    </button></div>)}
                <h2 className="text-xl font-bold my-2">
                    My Reservations
                </h2>
                <hr className="w-full border-t border-darkTextSecondary" />
            </div>
        </main>
    )
}