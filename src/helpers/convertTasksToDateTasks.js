import { parseISO } from "date-fns";


export const convertTasksToDateTasks=(tasks=[])=>{


    return tasks.map(task=>{

        task.startDate=parseISO(task.startDate);
        task.endDate=parseISO(task.endDate);

        return task;
    })

}