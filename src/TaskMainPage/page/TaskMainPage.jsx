import React, { useEffect, useState } from "react";
import { HeadDate } from "../components/headDate";
import { TaskCard } from "../components/TaskCard";
import { TaskFilter } from "../components/TaskFilter";
import { AddTaskCard } from "../components/AddTaskCard";
import { useTaskStore } from "../../hooks/useTaskStore";
import { TaskModal } from "../components/TaskModal";
import { useModal } from "../../hooks/useModal";

export const TaskMainPage = ({cardStateClass}) => {
  const { tasks, startLoadingTasks, setActiveTask } = useTaskStore();
  const { openModal } = useModal();


  const onSelect = (task) => {
    setActiveTask(task);
  };

  const onDoubleClick = (task) => {
    openModal();
  };

  useEffect(() => {
    startLoadingTasks();
  }, []);




  return (
    <>
      <HeadDate />
      <TaskFilter  />
      {tasks.length > 0 && (
        <div>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
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
