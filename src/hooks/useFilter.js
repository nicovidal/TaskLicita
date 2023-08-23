import { useState, useEffect } from "react";

export const useTaskFilter = (tasks) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("creationDate");

  useEffect(() => {
    setSelectedFilter("");
  }, []);

  const filteredAndSortedTasks = tasks.map((task) => {

    return clonedTask;
  }).filter((task) => {
    if (selectedFilter === "realizarse") {
      return task.cardStateClass === "realizarse";
    } else if (selectedFilter === "porVencer") {
      return task.cardStateClass === "porVencer";
    } else if (selectedFilter === "vencida") {
      return task.cardStateClass === "yaVencidas";
    }
    return true;
  }).sort((a, b) => {
    if (sortOrder === "creationDate") {
      return b.startDate - a.startDate;
    } else if (sortOrder === "dueDate") {

    }
  });

  return {
    selectedFilter,
    setSelectedFilter,
    sortOrder,
    setSortOrder,
    filteredAndSortedTasks,
  };
};
