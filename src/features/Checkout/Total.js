import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    Total: ''

};

export const GetTotalSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        getTotal: (state, action) => {
            state.Total = action.payload

        },
    }
});

export const { getTotal } = GetTotalSlice.actions;

export default GetTotalSlice.reducer;
