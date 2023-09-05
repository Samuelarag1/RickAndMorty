export default function SearchBar(props) {

    const handleOnChange = (e) =>{
        props.setQuery(e.target.value);
    }

    
    return (
      <div>
         <input value={props.query}onChange={handleOnChange}type='search' />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
