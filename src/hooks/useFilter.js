import { useState, useEffect } from "react";

export const useFilter = (tasks) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("creationDate");

  useEffect(() => {
    setSelectedFilter("");
  }, []);

  const filteredAndSortedTasks = tasks
    .map((task) => {
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
    })
    .filter((task) => {
      if (selectedFilter === "realizarse") {
        return task.cardStateClass === "realizarse";
      } else if (selectedFilter === "porVencer") {
        return task.cardStateClass === "porVencer";
      } else if (selectedFilter === "vencida") {
        return task.cardStateClass === "yaVencidas";
      }
      return true;
    })
    .sort((a, b) => {
      if (sortOrder === "creationDate") {
        return b.startDate - a.startDate;
      } else if (sortOrder === "dueDate") {
        const aDueDate = new Date(a.endDate);
        const bDueDate = new Date(b.endDate);
        return aDueDate - bDueDate;
      }
      return 0;
    });

  return {
    selectedFilter,
    setSelectedFilter,
    sortOrder,
    setSortOrder,
    filteredAndSortedTasks,
  };
};
