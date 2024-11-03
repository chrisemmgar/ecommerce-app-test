//import { Products } from "../store.jsx";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_REQUESTED":
      return { ...state, loading: true };
    case "FETCH_PRODUCT_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH_PRODUCT_FAILED":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
