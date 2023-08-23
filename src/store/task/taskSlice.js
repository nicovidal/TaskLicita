import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        isLoadingTasks:true,
        tasks:[],
        activeTask:null,
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
        
          

    }
});



export const { onSetActiveTask,onAddNewTask , onUpdateTask,onDeleteTask,onLoadTasks } = taskSlice.actions;