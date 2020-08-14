import React from 'react'

const EpisodeCard = ({ img, number, name, overview }) => {
    return (
        <figure>
            <img src={`http://image.tmdb.org/t/p/w400${img}`} alt="" />
            <figcaption>
                <span>EP{number}</span> <span>{name}</span>
                <p>{overview}</p>
            </figcaption>
        </figure>
    )
}

export default EpisodeCard
