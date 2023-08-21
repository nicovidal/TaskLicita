import React, { useEffect } from 'react';
import { HeadDate } from '../components/headDate';
import { TaskCard } from '../components/TaskCard';
import { TaskFilter } from '../components/TaskFilter';
import { AddTaskCard } from '../components/AddTaskCard';
import { useTaskStore } from '../../hooks/useTaskStore';
import { convertTasksToDateTasks } from '../../helpers/convertTasksToDateTasks';

export const TaskMainPage = () => {
  const { tasks, startLoadingTasks } = useTaskStore();

  useEffect(() => {
    startLoadingTasks();
  }, []);



  return (
    <>
      <HeadDate />
      <TaskFilter />

      {tasks.length > 0 && (
        <div >
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}

      <AddTaskCard />
    </>
  );
};
