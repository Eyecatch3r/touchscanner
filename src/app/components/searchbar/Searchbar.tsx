'use client';
import { useState, FormEvent } from 'react';

interface searchbarProps {
    searchProduct: (word: string)=>void
};

export default function Searchbar({ searchProduct }: searchbarProps) {
    
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const inputValue = form.search.value;
        searchProduct(inputValue);
    }

    return (
        <div className="w-8/12">
            <form className="flex items-center h-10 w-full border-2 border-black rounded-full p-2 dark:border-white" onSubmit={handleSubmit}>
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="h-full w-full">
                    <input type="text" id="search" className="text-lg font-bold h-full w-full bg-transparent px-3 focus:outline-none focus:border-none" placeholder="What are you searching for?" />
                </div>
                <button type="submit" className="p-2 bg-transparent rounded-full">
                    <svg className="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>
        </div>
    )
}
  