import React from 'react'
import Preview from '../../Components/Preview/Preview'
import classes from './Movies.module.css'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Movies = () => {
    return (
        <>
            <div className={classes.container}>
                <Link to="/movie/popular/page/1" className={classes.title}>Películas populares  <AiOutlineArrowRight className={classes.icon} /></Link>
                <Preview query="popular" media="movie" />
            </div>
            <div className={classes.container}>
                <Link to="/movie/top_rated/page/1" className={classes.title}>Películas con mejores críticas  <AiOutlineArrowRight className={classes.icon} /></Link>
                <Preview query="top_rated" media="movie" />
            </div>
            <div className={classes.container}>
                <Link to="/movie/upcoming/page/1" className={classes.title}>Películas a estrenarse  <AiOutlineArrowRight className={classes.icon} /></Link>
                <Preview query="upcoming" media="movie" />
            </div>
            <div className={classes.container}>
                <Link to="/movie/now_playing/page/1" className={classes.title}>Películas en cines  <AiOutlineArrowRight className={classes.icon} /></Link>
                <Preview query="now_playing" media="movie" />
            </div>

        </>
    )

}

export default Movies
