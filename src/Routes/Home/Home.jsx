import React from 'react'
import CardContainer from '../../Components/Preview/Preview'
import classes from './Home.module.css'
import { Link } from 'react-router-dom'
import Preview from '../../Components/Preview/Preview'

const Home = () => {

    return (
        <div className="home-container">
            <div>
                <Link to="/movie/trending/page/1">Películas que son tendencia  </Link>
                <Preview />
            </div>

            <div>
                <Link to="/tv/trending/page/1">Series que son tendencia  </Link>
                <Preview />
            </div>

        </div>
    )
}

export default Home
