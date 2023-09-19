import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions.js";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// const mapDispatchToProps = {
//   addFav,
//   removeFav,
// };
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

function Card(props) {
  //* DESAFÍO: te desafiamos a que reconstruyas ese useEffect, pero utilizando un bucle For en lugar de un .forEach().
  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  const [isFav, setIsFav] = useState(true);

  const handleFavorite = () => {
    if (isFav) {
      removeFav(props.id);
      setIsFav(false);
    }
    if (!isFav) {
      setIsFav(true);
      addFav(props.id);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={props.onClose}>X</button>
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>

      <Link to={`/detail/${props.id}`}>
        <h2>{props.name} </h2>
      </Link>

      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.status}</h2>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
