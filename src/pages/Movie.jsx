import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/ui/Card'
import { getMovies } from '../components/service/GetService';

export default function Movie() {
    const [data, setData] = useState([])

    const getMoviedata = async () => {
        try {
            const res = await getMovies();
            if (res.data.Search) {
                setData(res.data.Search);
            } else {
                setError("No movies found");
            }
        } catch (error) {
            setError("Failed to fetch movies. Please try again later.");
            console.log(error);
        }
    };

    useEffect(() => {
        getMoviedata()
    }, [])

    return (
        <div>
            {
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
                    {Array.isArray(data) && data.length > 0 ? (
                        data.map((currElem) => (
                            <Card key={currElem.imdbID} movieData={currElem} />
                        ))
                    ) : (
                        <p className="text-center">Loading...</p>
                    )}
                </ul>
            }
        </div>
    );

}
