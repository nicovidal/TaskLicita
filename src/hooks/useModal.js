import { useDispatch, useSelector } from "react-redux"
import { onCloseModal , onOpenModal } from "../store/modalTask/modalSlice";

export const useModal=()=>{

    const dispatch=useDispatch();

    const {isModalOpen}=useSelector(state=>state.modal);
    


    const openModal=()=>{
        dispatch(onOpenModal());

    };

    const closeModal=()=>{
        dispatch(onCloseModal())
    };

    //can use like this too.
    const toggleModal=()=>{
        (isModalOpen)
        ?openModal()
        :closeModal
    };

    return{
        //properties
        isModalOpen,
        //metodos
        openModal,
        closeModal,
        toggleModal,
    }


}