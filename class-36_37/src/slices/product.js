import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
  // reducers: {
  //   setProducts(state, action) {
  //     state.data = action.payload
  //   },
  //   setStatus(state, action) {
  //     state.status = action.payload
  //   }
  // }

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = STATUS.LOADING;
    }).addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.status = STATUS.SUCCESS;
    }).addCase(fetchProducts.rejected, (state) => {
      state.status = STATUS.FAILED;
    })
  }
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// export function fetchProducts() {
//   return async function fetchProductsThunk(dispatch) {
//     dispatch(setStatus(STATUS.LOADING));

//     try {
//       const res = await axios.get(PRODUCTS_URL);
//       dispatch(setProducts(res.data));
//       dispatch(setStatus(STATUS.SUCCESS));
//     } catch (err) {
//       console.log(err);
//       dispatch(setStatus(STATUS.FAILED));
//     }
//   }
// }

export const fetchProducts = createAsyncThunk('products', async () => {
  const res = await axios.get(PRODUCTS_URL);
  return res;
});

