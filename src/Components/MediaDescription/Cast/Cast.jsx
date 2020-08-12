import React from 'react'
import { useSearch } from '../../../Utils/hooks/useSearch';
import Loader from 'react-loader-spinner';
import Card from '../../Card/Card';
import classes from './Cast.module.css'

const Cast = ({ media, id }) => {

    const [data, isLoading, isError] = useSearch(media, id, true);

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
                <div className={classes.container}>

                    <div className={classes.cardsContainer}>
                        {data.cast.map(character => (<Card media={media} img={character.profile_path} name={character.name} character={character.character} id={character.id} />))}
                    </div>
                </div>
            )}

        </>
    )
}

export default Cast