import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((product) => product.id !== action.payload);
    }
  }
});

export const { add, remove } = cartSlice.actions // exporting the add reducer
export default cartSlice.reducer // exporting the cartSlice

