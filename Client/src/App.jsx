import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import About from "./components/about/about";
import Cards from "./components/cards/Cards";
import Detail from "./components/detail/Detail";
import Errors from "./components/error/errors";
import Forms from "./components/forms/Forms";
import Favorites from "./components/favorites/Favorites";
import Nav from "./components/nav/Nav";
import "./App.css";

function App() {
  //*DECLARACION DE HOOKS
  //! Creacion de Personajes
  const [characters, setCharacters] = useState([]);
  //! Acceso a la APP
  const [access, setAccess] = useState(false);
  //! Nos redirecciona
  const navigate = useNavigate();
  //! Donde estamos posicionados a la hora de hacer login
  const location = useLocation();

  //* VARIABLES
  const email = "";
  const password = "";

  //* FUNCIONES

  //! Funcion Async Await de login
  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      setAccess(data.access);
      data.access && navigate("/home");
    } catch (error) {
      throw new Error(error);
    }
  }
  //! Redireccion en caso de no acceder con los datos ingresados
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //! llamada a la API desde barra de busqueda

  async function onSearch(id) {
    const duplicate = characters.filter((char) => char.id === Number(id));
    if (duplicate.length) {
      return alert("Ese personaje ya está agregado!!");
    }
    try {
      const { data } = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      setCharacters((oldChars) => [...oldChars, data]);
    } catch {
      alert("¡No hay personajes con este ID!");
    }
  }

  //! BORRAR CARD
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Forms login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Errors />} />
      </Routes>
    </div>
  );
}

export default App;
