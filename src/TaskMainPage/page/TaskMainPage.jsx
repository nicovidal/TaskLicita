import React, { useState, useEffect } from 'react';
import { HeadDate } from '../components/headDate';
import { TaskCard } from '../components/TaskCard';
import { TaskFilter } from '../components/TaskFilter';
import { AddTaskCard } from '../components/AddTaskCard';
import { useTaskStore } from '../../hooks/useTaskStore';

export const TaskMainPage = () => {

  const {tasks,startLoadingTasks}=useTaskStore()

  useEffect(() => {
    startLoadingTasks();
  }, []);

  return (
    <>
      <HeadDate />
      <TaskFilter />

      {/* Verifica si hay tareas disponibles */}
      {tasks.length > 0 && <TaskCard />}

      <AddTaskCard />
    </>
  );
};
