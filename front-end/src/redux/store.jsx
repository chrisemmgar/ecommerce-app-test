// frontend/src/store/store.js
import {
  configureStore,
  applyMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { productReducer } from "../reducers/productReducer";

const rootReducer = combineReducers({
  products: productReducer,
});

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
