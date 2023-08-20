import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modalTask/modalSlice";


export const store = configureStore({
    reducer:{
        modal:modalSlice.reducer
 
    }
})