import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions.js";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//? Inicio de Card

function Card(props) {
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    props.allCharacters.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.allCharacters]);

  const { id, name, species, gender, status, image, onClose } = props;

  //! FUNCIONES
  const handleFavorite = (event) => {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav(props);
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
//! FUNCTIONS
const mapStateToProps = (props) => {
  return {
    allCharacters: props.allCharacters,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    addFav: function (character) {
      dispatch(addFav(character));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
