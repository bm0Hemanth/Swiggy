import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        additems: (state, action) => {
                state.items.push(action.payload);
        },
        removeitems:(state, action)=>{
            state.items.pop();
        },
        clearitems:(state, action)=>{
            return{ items:[]};
           // state.items.length = 0;
        }

    }
});
export const { additems, removeitems, clearitems } = cartslice.actions;
export default cartslice.reducer;