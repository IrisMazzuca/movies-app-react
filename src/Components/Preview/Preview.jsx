import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import classes from './Preview.module.css'
import Axios from 'axios'

const Preview = ({ media, query }) => {

    const [movies, setMovies] = useState(null)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        setIsLoading(true);
        setIsError(false);

        Axios

            .get(`https://api.themoviedb.org/3/${media}/${query}?api_key=00f0191d7bcf9029e316b0913d3846a9&page=1`)

            .then((response) => {
                console.log(response.data);
                setMovies(response.data);
                setIsLoading(false);
            })

            .catch(() => {
                setIsLoading(false);
                setIsError(true);
            });
    }, []);

    const moviesSlice = (movies && movies.results.slice(0, 5))

    return (
        <div>
            {
                moviesSlice && moviesSlice.map(movie => (<Card img={movie.poster_path} name={movie.original_title} id={movie.id} />))
            }
        </div>
    )
}

export default Preview
