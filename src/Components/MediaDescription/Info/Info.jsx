import React from 'react'
import classes from './Info.module.css'
import Stars from '../../Stars/Stars'
import {
    FaInstagram,
    FaTwitter,
    FaLink,
    FaImdb,
    FaFacebookSquare,
} from 'react-icons/fa';


const Info = ({ data }) => {

    return (

        <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w342${data.poster_path}`} alt="" />
                <div>
                    <h2>{data.original_title}</h2>

                    <Stars number={Math.ceil(data.vote_average)} />

                    <p>{data.overview}</p>

                    <ul>
                        <li>Duración: {data.runtime}</li>

                        <li>
                            Generos: {data.genres.map(genre => (
                            <p>{genre.name}</p>
                        ))}
                        </li>

                        <li>Presupuesto: {data.budget}</li>

                        <li>Recaudación: {data.revenue}</li>

                        <li>
                            Producción: {data.production_companies.map(company => (
                            <p>{company.name}</p>
                        ))}
                        </li>

                    </ul>

                    <div>
                        <FaInstagram />
                        <FaTwitter />
                        <FaLink />
                        <FaImdb />
                        <FaFacebookSquare />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
