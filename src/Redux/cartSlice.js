import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',

    initialState: {
        cartArray: [],
        quantity: 0,
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
        likeArray: [],
        beetween: []
    },

    reducers: { 


      addItemToCart: (state, action) => { 
        const timeId = new Date().getTime();
        const existingIndex = state.cartArray.findIndex(
          (item) => item.productId === action.payload.product.id && item.numbr===action.payload.product.size[action.payload.value-1].numb
        );

        if(action.payload.value===0){
            alert('Укажите размер')
        }

        else if (existingIndex >=0 && state.cartArray[existingIndex].kolvo>0) {
           state.cartArray[existingIndex] = {
           ...state.cartArray[existingIndex],
           quantity: state.cartArray[existingIndex].quantity + 1, kolvo: state.cartArray[existingIndex].kolvo - 1
           };  
           state.cartTotalQuantity += 1;
        } 

        else if (existingIndex === -1){     
           state.cartArray.push({
            id: timeId,
            img:action.payload.product.image[0],
            productId: action.payload.product.id,
            quantity: 1,
            price: action.payload.product.price,
            size: action.payload.product.size[action.payload.value-1].size,
            kolvo: action.payload.product.size[action.payload.value-1].kolvo-1,
            numbr: action.payload.product.size[action.payload.value-1].numb,                
        })
          state.cartTotalQuantity += 1;
       }
      },


      removeItemFromCart:(state,action)=>{
        state.cartArray=state.cartArray.filter(
        cartItem=>cartItem.id!==action.payload.cartItemId)
      },


      increaseCart: (state, action) => {
        const existingIndex = state.cartArray.findIndex(
          (cartItem) => cartItem.id === action.payload.cartItemID 
        );

       if(state.cartArray[existingIndex].kolvo<=0)return

       if (existingIndex >= 0) {
          state.cartArray[existingIndex] = {
          ...state.cartArray[existingIndex],
          quantity: state.cartArray[existingIndex].quantity + 1,kolvo: state.cartArray[existingIndex].kolvo - 1
          };

        }
        else {
            state.cartArray.push({
            productId: action.payload.product.id,
            quantity: 1,
            })
        }
      },



      decreaseCart(state, action) {
        const itemIndex = state.cartArray.findIndex(
            (cartItem) => cartItem.id === action.payload.cartItemID
        );
        if (state.cartArray[itemIndex].quantity > 1) {
            state.cartArray[itemIndex].quantity -= 1;
            state.cartArray[itemIndex].kolvo += 1;

        }
        else if (state.cartArray[itemIndex].quantity === 1) {
          state.cartArray[itemIndex].quantity = 1;
        }
      },
      
      
      getTotals(state) {
        let { total, quantity } = state.cartArray.reduce(
          (cartTotal, cartItem) => {
            const { price, quantity } = cartItem;
            const itemTotal = price * quantity;

            cartTotal.total += itemTotal;
            cartTotal.quantity += quantity;

            return cartTotal;
          },

          {
            total: 0,
            quantity: 0,
          }
        );
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
      },


      addItemToLike: (state, action) => {
        const timeId = new Date().getTime();
        const existingIndex = state.likeArray.findIndex(
          (item) => item.productId === action.payload.product.id && item.numbr===action.payload.product.size[action.payload.value-1].numb
        );

        if(action.payload.value===0){
          alert('Укажите размер')
        }

        else if (existingIndex === -1){     
            state.likeArray.push({
            id: timeId,
            quantity:1,
            img:action.payload.product.image[0],
            productId: action.payload.product.id,
            price: action.payload.product.price,
            size: action.payload.product.size[action.payload.value-1].size,
            kolvo: action.payload.product.size[action.payload.value-1].kolvo,
            numbr: action.payload.product.size[action.payload.value-1].numb,                
        })
       }
      },


      addItemToCart2:(state,action)=>{
        const existingIndex = state.cartArray.findIndex(
          (item) => item.productId === action.payload.cartItem.productId && item.numbr===action.payload.cartItem.numbr
        );

        if (existingIndex >=0 && state.cartArray[existingIndex].kolvo>0) {
          state.likeArray.splice(action.payload.index,1)
          
      } 

      else {
        const beetweenArray=state.likeArray.splice(action.payload.index,1)
        state.beetween=beetweenArray
        state.cartArray=state.cartArray.concat(beetweenArray)
        state.cartTotalQuantity += action.payload.cartItem.quantity;
      }   
      },


      removeItemFromLike:(state,action)=>{
        state.likeArray=state.likeArray.filter(
          cartItem=>cartItem.id!==action.payload.cartItemID)
      },


      addItemToLike2:(state,action)=>{
        
        const existingIndex = state.likeArray.findIndex(
          (item) => item.productId === action.payload.cartItem.productId && item.numbr===action.payload.cartItem.numbr
        );

        if (existingIndex >=0) {
          state.cartArray.splice(action.payload.index,1)
          
      } 

      else {
        //state.cartArray[action.payload.index].quantity=1
       // state.cartArray[existingIndex].kolvo=action.payload.cartItem.kolvo
        console.log(action.payload.cartItem.kolvo)
        const beetweenArray=state.cartArray.splice(action.payload.index,1)
        state.beetween=beetweenArray
        state.likeArray=state.likeArray.concat(beetweenArray)
      } 
      },
    }
})
  
  
  export const getTotalPrice=state=>{
    return state.cart.cartArray.reduce((total,cartArray)=>{
        return  cartArray.totalPrice+total
    },0)
  }
  export const getCartArray= state=>state.cart.cartArray;
  export const getLikeArray= state=>state.cart.likeArray;
  export const getcartTotalQuantity=state=>state.cart.cartTotalQuantity

  export const {addItemToLike2,removeItemFromLike, addItemToLike,addItemToCart2,addItemToCart, removeItemFromCart,increaseCart,decreaseCart,getTotals}=cartSlice.actions;
  export default cartSlice.reducer;


/*import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',

    initialState: {
        cartArray: [],
        quantity: 0,
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
        likeArray: [],
        beetween: []
    },

    reducers: { 


      addItemToCart: (state, action) => { 
        const timeId = new Date().getTime();
        const existingIndex = state.cartArray.findIndex(
          (item) => item.productId === action.payload.product.id && item.numbr===action.payload.product.size[action.payload.value-1].numb
        );

        if(action.payload.value===0){
            alert('Укажите размер')
        }

        else if (existingIndex >=0 && state.cartArray[existingIndex].kolvo>0) {
           state.cartArray[existingIndex] = {
           ...state.cartArray[existingIndex],
           quantity: state.cartArray[existingIndex].quantity + 1, kolvo: state.cartArray[existingIndex].kolvo - 1
           };  
           state.cartTotalQuantity += 1;
        } 

        else if (existingIndex === -1){     
           state.cartArray.push({
            id: timeId,
            img:action.payload.product.image[0],
            productId: action.payload.product.id,
            quantity: 1,
            price: action.payload.product.price,
            size: action.payload.product.size[action.payload.value-1].size,
            kolvo: action.payload.product.size[action.payload.value-1].kolvo-1,
            numbr: action.payload.product.size[action.payload.value-1].numb,                
        })
          state.cartTotalQuantity += 1;
       }
      },


      removeItemFromCart:(state,action)=>{
        state.cartArray=state.cartArray.filter(
        cartItem=>cartItem.id!==action.payload.cartItemId)
      },


      increaseCart: (state, action) => {
        const existingIndex = state.cartArray.findIndex(
          (cartItem) => cartItem.id === action.payload.cartItemID 
        );

       if(state.cartArray[existingIndex].kolvo<=0)return

       if (existingIndex >= 0) {
          state.cartArray[existingIndex] = {
          ...state.cartArray[existingIndex],
          quantity: state.cartArray[existingIndex].quantity + 1,kolvo: state.cartArray[existingIndex].kolvo - 1
          };

        }
        else {
            state.cartArray.push({
            productId: action.payload.product.id,
            quantity: 1,
            })
        }
      },



      decreaseCart(state, action) {
        const itemIndex = state.cartArray.findIndex(
            (cartItem) => cartItem.id === action.payload.cartItemID
        );
        if (state.cartArray[itemIndex].quantity > 1) {
            state.cartArray[itemIndex].quantity -= 1;
            state.cartArray[itemIndex].kolvo += 1;

        }
        else if (state.cartArray[itemIndex].quantity === 1) {
          const nextCartArray = state.cartArray.filter(
            (cartItem) => cartItem.id !== action.payload.cartItemID
          );
          state.cartArray = nextCartArray;
        }
      },
      
      
      getTotals(state) {
        let { total, quantity } = state.cartArray.reduce(
          (cartTotal, cartItem) => {
            const { price, quantity } = cartItem;
            const itemTotal = price * quantity;

            cartTotal.total += itemTotal;
            cartTotal.quantity += quantity;

            return cartTotal;
          },

          {
            total: 0,
            quantity: 0,
          }
        );
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
      },


      addItemToLike: (state, action) => {
        const timeId = new Date().getTime();
        const existingIndex = state.likeArray.findIndex(
          (item) => item.productId === action.payload.product.id && item.numbr===action.payload.product.size[action.payload.value-1].numb
        );

        if(action.payload.value===0){
          alert('Укажите размер')
        }

        else if (existingIndex === -1){     
            state.likeArray.push({
            id: timeId,
            quantity:1,
            img:action.payload.product.image[0],
            productId: action.payload.product.id,
            price: action.payload.product.price,
            size: action.payload.product.size[action.payload.value-1].size,
            kolvo: action.payload.product.size[action.payload.value-1].kolvo,
            numbr: action.payload.product.size[action.payload.value-1].numb,                
        })
       }
      },


      addItemToCart2:(state,action)=>{
        const existingIndex = state.cartArray.findIndex(
          (item) => item.productId === action.payload.cartItem.productId && item.numbr===action.payload.cartItem.numbr
        );

        if (existingIndex >=0 && state.cartArray[existingIndex].kolvo>0) {
          state.likeArray.splice(action.payload.index,1)
          
      } 

      else {
        const beetweenArray=state.likeArray.splice(action.payload.index,1)
        state.beetween=beetweenArray
        state.cartArray=state.cartArray.concat(beetweenArray)
        state.cartTotalQuantity += 1;
      }   
      },


      removeItemFromLike:(state,action)=>{
        state.likeArray=state.likeArray.filter(
          cartItem=>cartItem.id!==action.payload.cartItemID)
      },


      addItemToLike2:(state,action)=>{
        
        const existingIndex = state.likeArray.findIndex(
          (item) => item.productId === action.payload.cartItem.productId && item.numbr===action.payload.cartItem.numbr
        );

        if (existingIndex >=0) {
          state.cartArray.splice(action.payload.index,1)
          
      } 

      else {
        //state.cartArray[action.payload.index].quantity=1
        //state.cartArray[existingIndex].kolvo=action.payload.product.size[action.payload.value-1].kolvo
        const beetweenArray=state.cartArray.splice(action.payload.index,1)
        state.beetween=beetweenArray
        state.likeArray=state.likeArray.concat(beetweenArray)
      } 
      },
    }
})
  
  
  export const getTotalPrice=state=>{
    return state.cart.cartArray.reduce((total,cartArray)=>{
        return  cartArray.totalPrice+total
    },0)
  }
  export const getCartArray= state=>state.cart.cartArray;
  export const getLikeArray= state=>state.cart.likeArray;
  export const getcartTotalQuantity=state=>state.cart.cartTotalQuantity

  export const {addItemToLike2,removeItemFromLike, addItemToLike,addItemToCart2,addItemToCart, removeItemFromCart,increaseCart,decreaseCart,getTotals}=cartSlice.actions;
  export default cartSlice.reducer;


*/