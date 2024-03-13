import { createSlice } from "@reduxjs/toolkit";

const cartslice= createSlice({
    name:"hello",
    initialState :{
        items:[]
    },
    reducers:{
        additems:(state,action)=>{
            state.items.push(action.payload);
        },

        removeitems:(state)=>{
            state.items.pop()
        },
        clearcart:(state)=>{{
            state.items.length=0
        }},
    }
});

export const {additems,removeitems,clearcart} = cartslice.actions;
export default cartslice.reducer;
