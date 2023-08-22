import React, { useEffect, useState } from "react";
import { HeadDate } from "../components/headDate";
import { TaskCard } from "../components/TaskCard";
import { TaskFilter } from "../components/TaskFilter";
import { AddTaskCard } from "../components/AddTaskCard";
import { useTaskStore } from "../../hooks/useTaskStore";
import { convertTasksToDateTasks } from "../../helpers/convertTasksToDateTasks";
import { TaskModal } from "../components/TaskModal";
import { useModal } from "../../hooks/useModal";

export const TaskMainPage = () => {
  const { tasks, startLoadingTasks, setActiveTask } = useTaskStore();
  const { openModal } = useModal();

  const [selectedFilter, setSelectedFilter] = useState(""); 

  const onSelect = (task) => {
    setActiveTask(task);
  };

  const onDoubleClick = (task) => {
    openModal();
  };

  useEffect(() => {
    startLoadingTasks();
  }, []);

  // Aplicar el filtro a las tareas
  const filteredTasks = tasks.filter((task) => {
    if (selectedFilter === "realizarse") {
      return task.cardStateClass === "realizarse";
    } else if (selectedFilter === "porVencer") {
      return task.cardStateClass === "aPuntoDeVencer";
    } else if (selectedFilter === "vencida") {
      return task.cardStateClass === "yaVencidas";
    }
    return true;
  });

  return (
    <>
      <HeadDate />
      <TaskFilter setSelectedFilter={setSelectedFilter} /> {/* Pasar la función de setSelectedFilter */}
      {filteredTasks.length > 0 && (
        <div>
          {filteredTasks.map((task) => (
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
