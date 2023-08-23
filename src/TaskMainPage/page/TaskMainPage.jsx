import React, { useEffect, useState } from "react";
import { HeadDate } from "../components/headDate";
import { TaskCard } from "../components/TaskCard";
import { TaskFilter } from "../components/TaskFilter";
import { AddTaskCard } from "../components/AddTaskCard";
import { useTaskStore } from "../../hooks/useTaskStore";
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

  const onClearFilter = () => {
    setSelectedFilter(""); // Clear the selected filter
  };

  useEffect(() => {
    startLoadingTasks();
  }, []);

  const tasksWithCardState = tasks.map((task) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const endDate = new Date(task.endDate);
    endDate.setHours(0, 0, 0, 0);

    const clonedTask = { ...task };
    if (currentDate > endDate) {
      clonedTask.cardStateClass = "yaVencidas";
    } else if (
      currentDate.getDate() === endDate.getDate() &&
      currentDate.getMonth() === endDate.getMonth() &&
      currentDate.getFullYear() === endDate.getFullYear()
    ) {
      clonedTask.cardStateClass = "porVencer";
    } else if (currentDate < endDate) {
      clonedTask.cardStateClass = "realizarse";
    }

    return clonedTask;
  });

  const filteredTasks = tasksWithCardState.filter((task) => {
    if (selectedFilter === "realizarse") {
      return task.cardStateClass === "realizarse";
    } else if (selectedFilter === "porVencer") {
      return task.cardStateClass === "porVencer";
    } else if (selectedFilter === "vencida") {
      return task.cardStateClass === "yaVencidas";
    }
    return true;
  });

  return (
    <>
      <HeadDate />
      <TaskFilter
        onFilterChange={setSelectedFilter}
        onClearFilter={onClearFilter}
      />
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
