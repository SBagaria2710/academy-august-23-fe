import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS_URL } from "../constant";

export const STATUS = {
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
  LOADING: "LOADING"
};

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    status: STATUS.LOADING
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload
    },
    setStatus(state, action) {
      state.status = action.payload
    }
  }
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch) {
    dispatch(setStatus(STATUS.LOADING));

    try {
      const res = await axios.get(PRODUCTS_URL);
      dispatch(setProducts(res.data));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUS.FAILED));
    }
  }
}

