import React from 'react'
import CategoryPreview from '../../Components/CategoryPreview/CategoryPreview'


const Movies = () => {
    return (
        <>
            <CategoryPreview media="movie" category="popular" />
            <CategoryPreview media="movie" category="top_rated" />
            <CategoryPreview media="movie" category="upcoming" />
            <CategoryPreview media="movie" category="now_playing" />
        </>

    )

}

export default Movies
