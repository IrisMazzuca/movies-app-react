import React from 'react'
import CategoryPreview from '../../Components/CategoryPreview/CategoryPreview'

const Tv = () => {
    return (
        <>
            <CategoryPreview media="tv" category="popular" />
            <CategoryPreview media="tv" category="top_rated" />
            <CategoryPreview media="tv" category="on_the_air" />
        </>
    )

}

export default Tv
