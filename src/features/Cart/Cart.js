import { createSlice } from '@reduxjs/toolkit';
const initialState ={
  cart:[],
  total:0,

}

export const MenuSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    cartTotal:(state,action)=>{
        state.total=action.payload  
    },
  }
});


export const {cartTotal} = MenuSlice.actions;

export default MenuSlice.reducer;
