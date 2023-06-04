import Link from "next/link";
import {useState} from "react";

export default function ProductForm() {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [store, setStore] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();

        // Perform the necessary logic to handle the form submission
        // You can access the form values from the state variables
        // For example: console.log(image, name, description, price, store);

        // Reset the form fields
        setImage('');
        setName('');
        setDescription('');
        setPrice('');
        setStore('');
    };

    return (
        <div className="flex items-center justify-center">
            <div className="bg-blur bg-opacity-70 backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-lg max-w-md w-full p-6 rounded-lg text-gray-800 dark:text-white">
                <form onSubmit={handleSubmit} className="max-w-md mx-auto text-darkCard">
                    <div className="mb-4">
                        <label htmlFor="image" className="block mb-2 font-semibold text-gray-700">
                            Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            value={image}
                            onChange={(e:any) => setImage(e.target.value)}
                            className="dark:bg-slate-950 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter image URL"
                            required
                            alt={"Enter image URL"}/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e:any) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter product name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block mb-2 font-semibold text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e:any) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter product description"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block mb-2 font-semibold text-gray-700">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e:any) => setPrice(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter product price"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="store" className="block mb-2 font-semibold text-gray-700">
                            Store
                        </label>
                        <input
                            type="text"
                            id="store"
                            value={store}
                            onChange={(e:any) => setStore(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter store location"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="mb-8 bg-darkCard text-whiteCard dark:bg-whiteCard dark:text-darkCard font-bold py-1 px-8 mt-4 rounded focus:outline-none"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
}