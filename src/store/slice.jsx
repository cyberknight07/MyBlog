import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countValue : 0
}


export const counterSlice = createSlice({
        name: "counter",
        initialState,
        reducers: {
            handleIncreaseCountAction: (state,action) => {
                state.countValue += 1
                console.log(state,action.payload)
            },
        },
});

export const {handleIncreaseCountAction} = counterSlice.actions;

export default counterSlice.reducer 