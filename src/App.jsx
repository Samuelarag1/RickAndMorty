import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import About from "./components/about/about";
import Cards from "./components/cards/Cards";
import Detail from "./components/detail/Detail";
import Nav from "./components/nav/Nav";
import "./App.css";
import Errors from "./components/error/errors";
import Forms from "./components/forms/Forms";
import { Favorites } from "./components/favorites/Favorites";

function App() {
  //Acceso a la APP
  const [access, setAccess] = useState(false);

  const email = "";
  const password = "";

  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };
  //Redireccion en caso de no acceder con los datos ingresados
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const [characters, setCharacters] = useState([]);

  // llamada a la API
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  // para saber que card borrar
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id != id));
  };

  // location para poder saber donde estamos posicionados a la hora de hacer login
  const location = useLocation();

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
