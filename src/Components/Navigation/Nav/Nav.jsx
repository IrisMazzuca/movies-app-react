import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Nav.module.css'


const nav = () => {
    return (
        <>
            <ul className={classes.navigationItems}>
                <li className="NavigationItem">
                    <Link to="/">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" className={classes.svg}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    </Link>
                </li>
                <li className="NavigationItem">
                    <Link to="/movies">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" className={classes.svg}><polygon points="23 7 16 12 23 17 23 7"></polygon><rect width="15" height="14" x="1" y="5" rx="2" ry="2"></rect></svg>
                    </Link>
                </li>
                <li className="NavigationItem">
                    <Link to="/tv">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" className={classes.svg}><rect width="20" height="15" x="2" y="7" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                    </Link>

                </li>
            </ul>
        </>
    )
}

export default nav