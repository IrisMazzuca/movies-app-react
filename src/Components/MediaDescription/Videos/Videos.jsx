import React from 'react'
import { useSearch } from '../../../Utils/hooks/useSearch';

const Videos = ({ media, id }) => {

    const [data, isLoading, isError] = useSearch(media, id, 1, "videos");

    console.log("videos", data)

    return (
        data && data.results.map(video => (
            <iframe width="420" height="315"
                src={`https://www.youtube.com/embed/${video.key}`}>
            </iframe>

        ))
    )
}

export default Videos
