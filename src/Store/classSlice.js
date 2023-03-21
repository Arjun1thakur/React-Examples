import { createSlice } from "@reduxjs/toolkit";

const FetchData = createSlice({
    name:'FetchData',
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state=action.payload
            return state
        },
        clearState:(state)=>{
            state.data=[]
            return state
        },
    }
})
export default FetchData.reducer
export const {add, clearState} = FetchData.actions