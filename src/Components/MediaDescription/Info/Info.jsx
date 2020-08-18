import React from 'react'
import classes from './Info.module.css'
import Stars from '../Stars/Stars'
import SocialMedia from './SocialMedia/SocialMedia'



const Info = ({ data, media }) => {

    return (

        <div className={classes.container}>
            <img src={`https://image.tmdb.org/t/p/w342${data.poster_path}`} alt="" className={classes.img} />

            <div>
                <h1 className={classes.title}>{(data.original_title) ? data.original_title : data.name}</h1>

                <Stars number={Math.ceil(data.vote_average)} />

                <p className={classes.overview}>{data.overview}</p>

                {(media === 'movie') && (
                    <ul>
                        <li>Duración: {data.runtime} min.</li>

                        <li >
                            Generos: {data.genres.map(genre => (
                            <span className={classes.genres}>{genre.name}</span>
                        ))}
                        </li>

                        <li>Presupuesto: ${data.budget}</li>

                        <li>Recaudación: ${data.revenue}</li>

                        <li >
                            Producción: {data.production_companies.map(company => (
                            <span className={classes.companies}>{company.name}</span>
                        ))}
                        </li>
                    </ul>
                )}

                {(media === 'tv') && (
                    <ul>
                        <li>Temporadas: {data.number_of_seasons}</li>

                        <li>Episodios: {data.number_of_episodes}</li>

                        <li>Duración: {data.episode_run_time} min.</li>

                        <li>
                            Generos: {data.genres.map(genre => (
                            <span className={classes.genres}>{genre.name}</span>
                        ))}
                        </li>

                        <li >
                            Producción: {data.production_companies.map(company => (
                            <span className={classes.companies}>{company.name}</span>
                        ))}
                        </li>
                    </ul>
                )}


                <SocialMedia media={media} id={data.id} homepage={data.homepage} />

            </div>
        </div>

    )

}

export default Info
