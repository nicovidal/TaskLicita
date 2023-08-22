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

  // Ordenar tareas por fecha de inicio (de mayor a menor)
const sortByStartDate = (tasks) => {
  const sortedTasks = [...tasks]; // Hacer una copia para no modificar el original
  sortedTasks.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
  return sortedTasks;
};


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

  const sortedTasks = sortByStartDate(filteredTasks);

  return (
    <>
      <HeadDate />
      <TaskFilter setSelectedFilter={setSelectedFilter} />
      {sortedTasks.length > 0 && (
        <div>
          {sortedTasks.map((task) => (
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
