import React from "react";
import { connect } from "react-redux";
import Cards from "../cards/Cards";

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}
const Favorites = ({ myFavorites }) => {
  return (
    <div>
      <Cards characters={myFavorites} />
    </div>
  );
};

export default connect(mapStateToProps)(Favorites);
