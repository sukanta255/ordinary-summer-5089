import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
  } from "redux";
  import cartReducer from "./cart/cart.reducer";
  import thunk from "redux-thunk";
  const composeInhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const totalReducer = combineReducers({
    cartManager: cartReducer,
  });
  export const store = legacy_createStore(
    totalReducer,
    composeInhancer(applyMiddleware(thunk))
  );