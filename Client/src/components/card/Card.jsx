import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions.js";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//! FUNCTIONS
export function mapDispatchToProps(dispatch) {
  return {
    addFav: function (character) {
      dispatch(addFav(character));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

const mapStateToProps = (props) => {
  return {
    myFavorites: props.myFavorites,
  };
};

//? Inicio de Card

function Card(props) {
  //! Inicio de Card

  //! DESTRUCTURING
  const { id, name, species, gender, status, image, character, onClose } =
    props;

  //! ESTADOS

  //* DESAFÍO: te desafiamos a que reconstruyas ese useEffect, pero utilizando un bucle For en lugar de un .forEach().
  useEffect(() => {
    props.myFavorites?.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  const [isFav, setIsFav] = useState(false);
  //! FUNCIONES
  const handleFavorite = (data) => {
    if (isFav === true) {
      setIsFav(false);
      props.removeFav(data);
    }
    if (isFav === false) {
      setIsFav(true);
      props.addFav({
        id,
        name,
        species,
        gender,
        status,
        image,
      });
    }
  };

  return (
    <div className={styles.container}>
      {isFav ? (
        <button onClick={() => handleFavorite(id)}>❤️</button>
      ) : (
        <button onClick={() => handleFavorite(name)}>🤍</button>
      )}

      <button onClick={onClose}>X</button>
      <Link to={`/detail/${id}`}>
        <h2>{name} </h2>
      </Link>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{status}</h2>
      <img src={image} alt={name} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
