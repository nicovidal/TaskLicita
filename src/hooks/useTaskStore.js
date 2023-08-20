import { useDispatch, useSelector } from "react-redux";
import { onLoadTasks, onSetActiveTask } from "../store/task/taskSlice";
import Swal from "sweetalert2";
import taskApi from "../api/taskApi";
import { convertTasksToDateTasks } from "../helpers/convertTasksToDateTasks";




export const useTaskStore=()=>{

    const dispatch=useDispatch();

    const {tasks,activeTask}=useSelector((state)=>state.task);

    const setActiveTask=(taskEvent)=>{
        dispatch(onSetActiveTask(taskEvent));
    }
    

    const startSavingTask=async(taskEvent)=>{

        try{






        }catch(error){
            console.log(error);
            Swal.fire('Error al guardar',error.response.data.msg,'error')


        }



    }


    const startLoadingTasks = async () => {
        try {
          const { data } = await taskApi.get('/tasks');
          console.log(data)
      
          dispatch(onLoadTasks(data));
        } catch (error) {
          console.log('Error cargando eventos');
  
        }
      };
      





    return {
        //propertis
        tasks,
        activeTask,
    
        //metodos
        setActiveTask,
        startLoadingTasks
        
      };

}