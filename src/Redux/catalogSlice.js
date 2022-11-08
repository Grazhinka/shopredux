import { createSlice } from '@reduxjs/toolkit'
import { data } from '../data';


export const catalogSlice = createSlice({
  name: 'catalog',
  
  initialState:{
     selectedCategory:'платье'
  },

  reducers: {
    filterCategory:(state,action)=>{
      state.selectedCategory= action.payload;
    }
  },
})


export const getSelectedCategory= state=>state.catalog.selectedCategory
export const {filterCategory}=catalogSlice.actions
export default catalogSlice.reducer;