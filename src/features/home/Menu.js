import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode:{
        navMenu:false
    }
};

export const MenuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    handleMenu:(state,action)=>{
        state.mode.navMenu=!(state.mode.navMenu)

    },
  }
});

export const { handleMenu,closeMenu } = MenuSlice.actions;

export default MenuSlice.reducer;
