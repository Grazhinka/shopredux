/*import { createSlice } from "@reduxjs/toolkit";
import { getCartArray } from "./cartSlice";
import { useSelector } from "react-redux";
import cart from './cartSlice'


export const likeSlice = createSlice({
    name: 'like',

    initialState: {
        likeArray: [],
    },

    reducers: { 
      addItemToLike: (state, action) => {
        
        const timeId = new Date().getTime();
        const existingIndex = state.likeArray.findIndex(
          (item) => item.productId === action.payload.product.id && item.numbr===action.payload.product.size[action.payload.value-1].numb
        );
          
          if (existingIndex === -1){     
            state.likeArray.push({
            id: timeId,
            productId: action.payload.product.id,
            price: action.payload.product.price,
            size: action.payload.product.size[action.payload.value-1].size,
            kolvo: action.payload.product.size[action.payload.value-1].kolvo,
            numbr: action.payload.product.size[action.payload.value-1].numb,                
        })
       }
      },



      removeItemFromCart:(state,action)=>{
        state.cartArray=state.cartArray.filter(
        cartItem=>cartItem.id!==action.payload.cartItemId)
      },



      addItemToCart2:(state,action)=>{

        const qq= state.likeArray.splice(action.payload.index,1)

      },

    }
})
  


  export const getLikeArray= state=>state.like.likeArray;

  export const { addItemToLike,addItemToCart2}=likeSlice.actions;
  export default likeSlice.reducer;

*/