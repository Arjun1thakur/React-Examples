import { configureStore } from "@reduxjs/toolkit";
import Counter from "./Slice";
import FetchData from './classSlice'

const Store = configureStore({
    reducer:{
        count:Counter,
        fetchData:FetchData
    }
})
export default Store