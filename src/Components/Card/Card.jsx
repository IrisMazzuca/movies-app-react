import React from 'react'
import classes from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({ media, img, name, id, width = 'w342' }) => {
    return (
        <div className={classes.container}>
            <Link to={`/${media}/${id}/info`} className={classes.link}>
                <figure>
                    <img src={`http://image.tmdb.org/t/p/${width}${img}`} alt={name} className={classes.img} />
                    <figcaption className={classes.title}>{name}</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Card

