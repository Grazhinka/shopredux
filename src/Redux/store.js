import { configureStore } from '@reduxjs/toolkit'
import catalog from './catalogSlice'
import cart from './cartSlice'


export const store = configureStore({
  reducer: {
    catalog,
    cart
  }
})