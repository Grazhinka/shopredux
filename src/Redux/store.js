import { configureStore } from '@reduxjs/toolkit'
import catalog from './catalogSlice'
import cart from './cartSlice'
import like from './likeSlice'
import filt from './filtSlise'


export const store = configureStore({
  reducer: {
    catalog,
    cart,
    like,
    filt,
  }
})