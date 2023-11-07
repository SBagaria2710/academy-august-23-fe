import { configureStore } from '@reduxjs/toolkit'

import cart from './slices/cart'

export const store = configureStore({
  reducer: {
    cart
  },
})