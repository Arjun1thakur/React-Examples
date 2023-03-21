import { createSlice } from "@reduxjs/toolkit";

const Counter = createSlice({
    name:'counter',
    initialState:{
        no:0
    },
    reducers:{
        inc:(state)=>{
            state.no+=1
        },
        dec:(state)=>{
            state.no-=1
        },
    }
})
export default Counter.reducer
export const {inc,dec} = Counter.actions