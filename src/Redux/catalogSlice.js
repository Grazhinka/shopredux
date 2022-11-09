import { createSlice } from '@reduxjs/toolkit'



export const catalogSlice = createSlice({
  name: 'catalog',
  
  initialState:{
     selectedCategory:'ВСЁ'
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