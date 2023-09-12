import React, { useState } from "react";
import SearchBar from '../searchBar/SearchBar.jsx';
import { Link, NavLink } from "react-router-dom";

function Nav( { onSearch }) {


    return(
        <div>
        <SearchBar onSearch={onSearch}/>



        <Link to={'/about'}>
            <button>About</button>
        </Link>

        <Link to={'/home'}>
            <button>Home</button>
        </Link>


        </div>
    );
}

export default Nav;