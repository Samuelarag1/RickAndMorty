import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "../redux/actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== Number(action.payload)
        ),
      };
    default:
      return { ...state };

    case FILTER:
      const filtrado = state.allCharacters.filter(
        (gender) => gender.gender === action.payload
      );

      return {
        ...state,
        myFavorites: filtrado,
      };

    case ORDER:
      const copyCharacters = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? copyCharacters.sort((a, b) => a.id - b.id)
            : copyCharacters.sort((a, b) => b.id - a.id),
      };
  }
};

export default reducer;
