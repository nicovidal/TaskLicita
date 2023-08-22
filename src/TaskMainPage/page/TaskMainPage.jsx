import React, { useEffect } from 'react';
import { HeadDate } from '../components/headDate';
import { TaskCard } from '../components/TaskCard';
import { TaskFilter } from '../components/TaskFilter';
import { AddTaskCard } from '../components/AddTaskCard';
import { useTaskStore } from '../../hooks/useTaskStore';
import { convertTasksToDateTasks } from '../../helpers/convertTasksToDateTasks';
import { TaskModal } from '../components/TaskModal';
import { useModal } from '../../hooks/useModal';

export const TaskMainPage = () => {
  const { tasks, startLoadingTasks, setActiveTask } = useTaskStore();
  const {openModal}=useModal();

  useEffect(() => {
    startLoadingTasks();
  }, []);

  const onSelect = (task) => {
    console.log({ click: task });
    setActiveTask(task);
  };

  
  const onDoubleClick = (task) => {
    console.log({ doubleClick: task}) 
    console.log('abriendo modal') 
    openModal();
  }

  return (
    <>
      <HeadDate />
      <TaskFilter />

      {tasks.length > 0 && (
        <div>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} 
            onSelectEvent={onSelect}
            onDoubleClickEvent={onDoubleClick}
            
            />
          ))}
        </div>
      )}

      <AddTaskCard />
      <TaskModal />
    </>
  );
};
