import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail(props) {
  const [character, setCharacter] = useState({});

  const { id } = useParams(character);

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  const { name, status, gender, image } = character;

  return (
    <div>
      <h2>{name} </h2>
      <h3>Status: {status} </h3>
      <h3>Gender: {gender} </h3>

      <img src={image} alt={name} />
    </div>
  );
}
