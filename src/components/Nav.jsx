import React, { useState } from "react";
import SearchBar from './SearchBar.jsx';


function Nav(props){

    const [query,setQuery] = useState('');

    const handleOnSearch = () =>{
        props.onSearch();
        setQuery('');
    }
    return(
        <div>
         <SearchBar onSearch={handleOnSearch}/>
        </div>
    );
}

export default Nav;