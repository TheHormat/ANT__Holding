import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";

let likedItems = [];

const favoriReducer = (state = likedItems, action) => {
  switch (action.type) {
    case "ADD_CART":
      likedItems = [...state, action.payload];
      return likedItems;
    case "REMOVE_CART":
      return (state = state.filter(
        (state) => Number(state.id) !== Number(action.payload)
      ));
    default:
      return state;
  }
};

const reducers = combineReducers({
  favoriReducer,
});

const configureStore = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default configureStore;
