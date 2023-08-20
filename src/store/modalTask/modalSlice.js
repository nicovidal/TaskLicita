import { createSlice } from '@reduxjs/toolkit';

export const modalSlice= createSlice({
    name: 'modalSlice',
    initialState: {
        isModalOpen:false
    },
    reducers: {
        onOpenModal:(state)=>{
            state.isModalOpen=true;
        },
        onCloseModal:(state)=>{
            state.isModalOpen=false;
        },

    }
});



export const { onOpenModal, onCloseModal} =modalSlice.actions;