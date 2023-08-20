import { parseISO } from "date-fns";

export const convertTasksToDateTasks = (tasks = []) => {
  return tasks.map((task) => {
    return {
      ...task,
      startDate: parseISO(task.startDate),
      endDate: parseISO(task.endDate),
    };
  });
};
