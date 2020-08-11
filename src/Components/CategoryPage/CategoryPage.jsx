import React from 'react'
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import Loader from 'react-loader-spinner';
import { useTitle } from "../../Utils/hooks/useTitle";
import { useSearch } from '../../Utils/hooks/useSearch';

const CategoryPage = () => {

    const { media, query, page } = useParams()
    const title = useTitle(media, query);
    const [data, isLoading, isError] = useSearch(media, query, page);

    // console.log('aca', media, query, page)

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

            <div>
                <h2>{title}</h2>
                {data && !isError && !isLoading && (
                    <div>
                        {data.results.map(movie => (<Card media={media} img={movie.poster_path} name={movie.original_title} id={movie.id} />))}
                    </div>
                )}
            </div>
        </>
    )

}

export default CategoryPage
