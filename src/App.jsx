import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav'


function App() {
    const example = {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        origin: {
           name: 'Earth (C-137)',
           url: 'https://rickandmortyapi.com/api/location/1',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
     };
    
     const [character,setCharacter] = useState([]);
     const onSearch = () =>(
         setCharacter([
            ...character,
            example
         ])
    )

        
    return (
      <div className='App'>
        <Nav onSearch={onSearch}/>
        <Cards characters={character}/>
      </div>
   );
}

export default App;
