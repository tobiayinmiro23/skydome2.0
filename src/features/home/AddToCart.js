import { createSlice } from '@reduxjs/toolkit';
let getCart= localStorage.getItem('skydome')
const initialState ={
  cart:[]
}

export const MenuSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    setCart:(state,action)=>{
        state.cart=[...action.payload]
    },
    addItemToCart:(state,action)=>{ 
        if (state.cart.indexOf(action.payload)!== -1)return
        state.cart.unshift(action.payload)
        localStorage.setItem('skydome',JSON.stringify(state.cart))
    },
    cartCount:(state,action)=>{
        return state
    }
  }
});


export const { setCart,addItemToCart,cartCount } = MenuSlice.actions;

export default MenuSlice.reducer;
