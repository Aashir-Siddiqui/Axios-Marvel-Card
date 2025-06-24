import React from 'react';
import { FaImdb } from "react-icons/fa";

export default function Card({ movieData }) {
    const { Poster, Title, Year, Type, imdbID } = movieData;

    return (
        <div className="max-w-xs mx-auto my-8 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <h2 className="mb-4 text-center text-base sm:text-lg font-bold text-gray-900 line-clamp-2">
                {Title}
            </h2>
            <div className="relative overflow-hidden shadow-xl border border-gray-200">
                <img
                    src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400x600?text=No+Poster'}
                    alt={Title}
                    className="w-full h-64 sm:h-96 object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/75 text-white p-6 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col items-center gap-2 mb-6">
                        <span className="font-semibold text-xs uppercase text-gray-300 tracking-widest">
                            Released
                        </span>
                        <p className="text-xl font-bold text-red-500">{Year}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="font-semibold text-xs uppercase text-gray-300 tracking-widest">
                            Type
                        </span>
                        <p className="text-xl font-bold text-red-500">{Type}</p>
                    </div>
                </div>
            </div>
            <a
                href={`https://www.imdb.com/title/${imdbID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-red-700 text-white w-[calc(100%-2px)] h-12 px-4 text-sm font-bold uppercase tracking-wide hover:bg-red-800 transition duration-300 mt-4"
            >
                <FaImdb className="text-3xl text-white" />
                Watch on IMDb
            </a>
        </div>
    );
}