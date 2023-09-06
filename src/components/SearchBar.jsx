import { useState } from "react";

export default function SearchBar({onSearch}) {

    const [id,setId] = useState('');
    const handleOnChange = (e) =>{
        const {value} = e.target;
        setId(value);
    }
    const handleClick = e =>{
        e.preventDefault();
        onSearch(id);
        setId('');
    }


    return (
      <div>
         <input 
         onChange={handleOnChange}
         type='text'
         id={id} 
         value={id}
         />
         <button onClick={handleClick}>Agregar</button>
      </div>
   );
}
