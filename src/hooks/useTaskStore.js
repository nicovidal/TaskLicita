import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewTask,
  onDeleteTask,
  onDeleteToManyTask,
  onLoadTasks,
  onSetActiveTask,
  onSetCheckedTask,
  onUpdateTask,
} from "../store/task/taskSlice";
import Swal from "sweetalert2";
import taskApi from "../api/taskApi";
import { convertTasksToDateTasks } from "../helpers/convertTasksToDateTasks";

export const useTaskStore = () => {
  const dispatch = useDispatch();

  const { tasks, activeTask, toManyActiveCheck } = useSelector(
    (state) => state.task
  );

  const setActiveTask = (taskEvent) => {
    dispatch(onSetActiveTask(taskEvent));
  };

  const setActiveCheckedTask = (tasksEvent) => {
    dispatch(onSetCheckedTask(tasksEvent));
  };

  const startSavingTask = async (taskEvent) => {
    try {
      if (taskEvent.id) {
        await taskApi.put(`/tasks/${taskEvent.id}`, taskEvent);

        dispatch(onUpdateTask({ ...taskEvent }));
        return;
      }

      const { data } = await taskApi.post("/tasks", taskEvent);

      dispatch(onAddNewTask({ ...taskEvent, id: data.task.id }));
    } catch (error) {
      Swal.fire("Error al guardar", error.response.data.msg, "error");
    }
  };

  const startLoadingTasks = async () => {
    try {
      const { data } = await taskApi.get("/tasks");
      const tasks = convertTasksToDateTasks(data.tasks);

      dispatch(onLoadTasks(tasks));
    } catch (error) {
      console.log("Error cargando eventos");
    }
  };

  const startDeletingTask = async () => {
    try {
      await taskApi.delete(`/tasks/${activeTask.id}`);
      dispatch(onDeleteTask());
    } catch (error) {
      Swal.fire("Error al eliminar", error.response.data.msg, "error");
    }
  };

  const startDeleteToManyTask = async (tasksEvent) => {
    try {
      await taskApi.post(`/tasks/delete-multiple`, tasksEvent);

      dispatch(onDeleteToManyTask({ ...tasksEvent, id: tasksEvent.id }));
    } catch (error) {
      Swal.fire("Error al eliminar", error.response.data.msg, "error");
    }
  };

  return {
    //propertis
    tasks,
    activeTask,
    toManyActiveCheck,
    //metodos
    setActiveTask,
    setActiveCheckedTask,
    startLoadingTasks,
    startSavingTask,
    startDeletingTask,
    startDeleteToManyTask,
  };
};
