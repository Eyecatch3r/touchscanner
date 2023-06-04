'use client'
import {useState} from "react";
import ProductForm from "@/app/components/ProductForm/ProductForm";

export default function Page() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleAddProduct = () => {
        setIsFormVisible(true);
    };

    return (
      <main className="h-screen">
        <div className="min-h-screen mx-4">
            <h1 className="text-2xl font-bold my-2">
                Manage Products
            </h1>
            <hr className="w-full border-t border-darkTextSecondary" />
            <button
                className="mb-8 bg-darkCard text-whiteCard dark:bg-whiteCard dark:text-darkCard font-bold py-1 px-8 mt-4 rounded focus:outline-none"
                onClick={handleAddProduct}
            >
                Add new Product
            </button>

            {isFormVisible && (
                <div>
                    <ProductForm></ProductForm>
                </div>
            )}

            <h2 className="text-xl font-bold my-2">
                My Products
            </h2>
            <hr className="w-full border-t border-darkTextSecondary" />
        </div>
      </main>
    )
  }