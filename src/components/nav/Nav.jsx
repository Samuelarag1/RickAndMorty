import React, { useState } from "react";
import SearchBar from '../searchBar/SearchBar.jsx';
import { Link, NavLink } from "react-router-dom";
import styles from './nav.module.css';

function Nav( { onSearch }) {


    return(
        <div className={styles.container}>



        <Link to={'/about'}>
            <button>About</button>
        </Link>

        <Link to={'/home'}>
            <button>Home</button>
        </Link>

        <SearchBar onSearch={onSearch}/>

        <Link to={'/'}>
            <button>LogOut</button>
        </Link>
        </div>
    );
}

export default Nav;