import { createSlice } from '@reduxjs/toolkit'



export const filterSizeSlice = createSlice({
  name: 'filt',
  
  initialState:{
     selectedSize:1
  },

  reducers: {
    filterSize:(state,action)=>{
      state.selectedSize= action.payload;
    }
  },
})


export const getSelectedSize= state=>state.filt.selectedSize
export const {filterSize}=filterSizeSlice.actions
export default filterSizeSlice.reducer;



/*import { createSlice } from '@reduxjs/toolkit'



export const filtSlice = createSlice({
  name: 'filt',
  
  initialState:{
     selectedCategory:1
  },

  reducers: {
    filterCategory:(state,action)=>{
      state.selectedCategory= action.payload;
    }
  },
})


export const getSelectedCategoryfilt= state=>state.filt.selectedCategory
export const {filterCategory}=filtSlice.actions
export default filtSlice.reducer;*/