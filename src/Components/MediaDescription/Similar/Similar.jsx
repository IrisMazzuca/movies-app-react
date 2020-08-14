import React from 'react'
import Loader from 'react-loader-spinner';
import Card from '../../Card/Card';
import { useSearch } from '../../../Utils/hooks/useSearch';
import classes from './Similar.module.css'

const Similar = ({ media, id }) => {

    const [data, isLoading, isError] = useSearch(media, id, 1, "similar");

    return (
        <>
            {isError && (
                <div className="alert-danger" role="alert">
                    Error 404: Not Found.
                    API error: There was an error please refresh the page and try again.
                </div>
            )}

            {isLoading && (
                <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
            )}

            {data && !isError && !isLoading && (
                <div>
                    {(data.results.length === 0) && <h1>No se encontraron similares</h1>}

                    <div className={classes.container}>

                        <div className={classes.cardsContainer}>
                            {data.results.map(item => (<Card media={media} img={item.poster_path} name={(item.title ? item.title : item.name)} id={item.id} />))}
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Similar
