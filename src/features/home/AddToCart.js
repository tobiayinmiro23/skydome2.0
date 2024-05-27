import { createSlice } from '@reduxjs/toolkit';
import { setCookie } from '../../helper Functions/Cookie';
const initialState ={
  cart:[],
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
          setCookie(state.cart)
    },
  }
});

export const { setCart,addItemToCart } = MenuSlice.actions;

export default MenuSlice.reducer;
