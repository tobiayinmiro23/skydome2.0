import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    Link:''
     
};

export const PaymentLinkSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    getLink:(state,action)=>{
        state.Link=action.payload

    },
  }
});

export const { getLink } = PaymentLinkSlice.actions;

export default PaymentLinkSlice.reducer;
