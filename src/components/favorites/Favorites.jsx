import React from "react";
import { connect } from "react-redux";

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}
export const Favorites = (props) => {
  console.log(props);
  return (
    <div>
      {myFavorites?.map((favs) => (
        <Card
          id={index}
          name={favs.name}
          status={favs.status}
          species={favs.species}
          gender={favs.gender}
          origin={favs.name.origin}
          image={favs.image}
          onClose={() => onClose(favs.id)}
        />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(Favorites);
