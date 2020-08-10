import React from 'react'
import classes from './Card.module.css'

const Card = ({ img, name, id, width = 'w342' }) => {
    return (
        <div className="card-container">
            <a href={`/movie/${id}/info`} className="card-link">
                <figure>
                    <img src={`http://image.tmdb.org/t/p/${width}${img}`} alt={name} className="card-img" />
                    <figcaption className="card-title">{name}</figcaption>
                </figure>
            </a>
        </div>
    )
}

// div > a > (div > img) + h3

export default Card

