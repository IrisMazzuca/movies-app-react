import React from 'react'
import CardContainer from '../../Components/Preview/Preview'
import classes from './Home.module.css'
import { Link } from 'react-router-dom'
import Preview from '../../Components/Preview/Preview'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Home = () => {

    return (
        <div className={classes.container}>
            <div>
                <Link to="/movie/trending/page/1" className={classes.title}>Películas que son tendencia  <AiOutlineArrowRight className={classes.icon} /></Link>
                <Preview />
            </div>

            <div>
                <Link to="/tv/trending/page/1" className={classes.title}>Series que son tendencia  <AiOutlineArrowRight className={classes.icon} /></Link>
                <Preview />
            </div>

        </div>
    )
}

export default Home
