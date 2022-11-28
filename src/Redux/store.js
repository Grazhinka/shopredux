import { configureStore, combineReducers } from '@reduxjs/toolkit'
import catalog from './catalogSlice'
import cart from './cartSlice'
import {FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer } from 'redux-persist' 
import storage from  'redux-persist/lib/storage' 


const persistConfig = {
  key:  "root",
  storage,
 }

const rootReducer = combineReducers(
  {
    catalog,
    cart
  }
 )

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store)
export default store

