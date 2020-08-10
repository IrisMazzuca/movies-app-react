import React from 'react'
import classes from './Search.module.css'

const search = () => {
    return (
        <div>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" className={classes.svg}><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>
            <input placeholder="Búsqueda..." value="" />
        </div>
    )
}
export default search
