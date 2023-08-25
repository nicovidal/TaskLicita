import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        isLoadingTasks:true,
        tasks:[],
        activeTask:null,
        toManyActiveCheck:[],
    },
    reducers: {
        onSetActiveTask:(state,{payload})=>{
            state.activeTask=payload;
        },
        onAddNewTask:(state,{payload})=>{
            state.tasks.push(payload);
            state.activeTask=null;
        },
        onUpdateTask:(state,{payload})=>{
            state.tasks=state.tasks.map(task=>{
                if(task.id===payload.id){
                    return payload;
                }
                return task;
            });
        },
        onDeleteTask:(state)=>{
            if(state.activeTask){
                state.tasks=state.tasks.filter(task=>task.id !== state.activeTask.id);
                state.activeTask=null;
            }           
        },
        onLoadTasks: (state, { payload = {} }) => {
            state.isLoadingTasks = false;
            payload.forEach(task => {
                const exists = state.tasks.some(dbTask => dbTask.id === task.id);
                if (!exists) {
                  state.tasks.push(task); 
                }
              });      
        },
        onSetCheckedTask: (state, { payload }) => {
            if (payload.isChecked) {
              state.toManyActiveCheck.push(payload.id);
            } else {
              state.toManyActiveCheck = state.toManyActiveCheck.filter(
                id => id !== payload.id
              );
            }
          },
      
          onDeleteToManyTask: (state) => {
            if(state.toManyActiveCheck){
                state.tasks = state.tasks.filter(task => task.id !==state.toManyActiveCheck.id);
                state.toManyActiveCheck = [];
            }
     
          },
    }
});

export const { onSetActiveTask,onAddNewTask , onUpdateTask,onDeleteTask,onLoadTasks ,onDeleteToManyTask,onSetCheckedTask} = taskSlice.actions;