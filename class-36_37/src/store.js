import { configureStore } from '@reduxjs/toolkit'

import cart from './slices/cart'
import products from './slices/product'

export const store = configureStore({
  reducer: {
    cart,
    products
  },
})