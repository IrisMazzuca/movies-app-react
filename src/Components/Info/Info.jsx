import React from 'react'
import { Route } from 'react-router-dom'


const Info = () => {


    return (
        <div>
            <h1>INFOOOOOOOOOOOOOOOOO</h1>

            {/* RUTAS MOVIES */}
            <Route path="/:media/:id/info">INFO</Route>
            <Route path="/:media/:id/cast">REPARTO</Route>
            <Route path="/:media/:id/videos">VIDEOS</Route>
            <Route path="/:media/:id/similar">SIMILARES</Route>

            {/* RUTAS SERIES */}
            <Route path="/:media/:id/info">INFO</Route>
            <Route path="/:media/:id/seasons">EPISODIOS</Route>
            <Route path="/:media/:id/cast">REPARTO</Route>
            <Route path="/:media/:id/similar">SIMILARES</Route>


        </div>
    )
}

export default Info
