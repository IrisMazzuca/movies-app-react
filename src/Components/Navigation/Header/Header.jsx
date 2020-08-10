import React from 'react';
import Nav from '../Nav/Nav';
import Search from '../Search/Search'
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.container}>
            <Nav />
            <Search />
        </div>
    )
}

export default Header
