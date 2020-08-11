import React from 'react'
import classes from './Tv.module.css'
import { Link } from 'react-router-dom'
import Preview from '../../Components/Preview/Preview'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Tv = () => {
    return (
        <>
            <div className={classes.container}>
                <Link to="/tv/popular/page/1" className={classes.title}>Series populares  <AiOutlineArrowRight className={classes.icon} /></Link>
                <Preview query="popular" media="tv" />
            </div>
            <div className={classes.container}>
                <Link to="/tv/top_rated/page/1" className={classes.title}>Series con mejores críticas  <AiOutlineArrowRight className={classes.icon} /></Link>
                <Preview query="top_rated" media="tv" />
            </div>
            <div className={classes.container}>
                <Link to="/tv/on_the_air/page/1" className={classes.title}>Series al aire  <AiOutlineArrowRight className={classes.icon} /></Link>
                <Preview query="on_the_air" media="tv" />
            </div>
        </>
    )

}

export default Tv
