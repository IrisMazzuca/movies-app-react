import React from 'react'
import Preview from '../../Components/Preview/Preview'
import classes from './Movies.module.css'
import { Link } from 'react-router-dom'

const Movies = () => {
    return (
        <>
            <div className="container">
                <Link to="/movie/popular/page/1">Películas populares</Link>
                <Preview query="popular" media="movie" />
            </div>
            <div className="container">
                <Link to="/movie/top_rated/page/1">Películas con mejores críticas</Link>
                <Preview query="top_rated" media="movie" />
            </div>
            <div className="container">
                <Link to="/movie/upcoming/page/1">Películas a estrenarse</Link>
                <Preview query="upcoming" media="movie" />
            </div>
            <div className="container">
                <Link to="/movie/now_playing/page/1">Películas en cines</Link>
                <Preview query="now_playing" media="movie" />
            </div>

        </>
    )

}

export default Movies
