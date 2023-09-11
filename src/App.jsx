import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import About from './components/about/about';
import Cards from './components/cards/Cards';
import Detail from './components/detail/Detail';
import Nav from './components/nav/Nav'
import './App.css';
import Errors from './components/error/errors';


function App() {
     const [characters,setCharacters] = useState([]);
 

     function onSearch(id) {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setCharacters((oldChars) => [...oldChars, data]);
                } else {
                    window.alert('¡No hay personajes con este ID!');
                }
                });
     }

     const onClose = (id) =>{
        setCharacters(characters.filter(char => char.id != id))
     }

    return (
      <div className='App'>
        <Nav onSearch={onSearch}/>
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='*' element={<Errors/>}/>
      </Routes> 
      </div>
   );
}

export default App;
