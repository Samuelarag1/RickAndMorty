import React, { useState } from "react";
import { connect } from "react-redux";
import Cards from "../cards/Cards";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Favorites = ({ myFavorites }) => {
  //* ESTADOS
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  //* HANDLERS
  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  //! INICIO DEL RETURN
  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      <Cards characters={myFavorites} />
    </div>
  );
};

//! FUNCTIONS
function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);
