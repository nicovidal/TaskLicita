import React, { useEffect } from "react";
import { HeadDate } from "../components/headDate";
import { TaskCard } from "../components/TaskCard";
import { TaskFilter } from "../components/TaskFilter";
import { AddTaskCard } from "../components/AddTaskCard";
import { useTaskStore } from "../../hooks/useTaskStore";
import { TaskModal } from "../components/TaskModal";
import { useModal } from "../../hooks/useModal";
import { useFilter } from "../../hooks/useFilter"; 


export const TaskMainPage = () => {
  const { tasks, startLoadingTasks, setActiveTask } = useTaskStore();
  const { openModal } = useModal();

  const { selectedFilter, setSelectedFilter, sortOrder, setSortOrder, filteredAndSortedTasks } = useFilter(tasks);

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
      <TaskFilter
        onFilterChange={setSelectedFilter}
        onSortChange={setSortOrder}
      />
      {filteredAndSortedTasks.length > 0 && (
        <div>
          {filteredAndSortedTasks.map((task) => (
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
