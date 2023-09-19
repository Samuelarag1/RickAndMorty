import { ADD_FAV, REMOVE_FAV } from "../redux/actions";

const initialState = {
  myFavorites: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    // case REMOVE_FAV:
    //   const favoriteFilter = state.myFavorites.filter((fav) => {
    //     action.payload !== Number(fav.payload);
    //   });
    case REMOVE_FAV:
      const favoriteFilter = state.myFavorites.filter((fav) => {
        return action.payload !== fav; // Cambiar 'action.id' a 'action.payload'
      });
      return {
        ...state,
        myFavorites: favoriteFilter,
      };

    default:
      return { ...state };
  }
};
