import React, { useEffect, useState } from "react";
import { HeadDate } from "../components/headDate";
import { TaskCard } from "../components/TaskCard";
import { TaskFilter } from "../components/TaskFilter";
import { AddTaskCard } from "../components/AddTaskCard";
import { useTaskStore } from "../../hooks/useTaskStore";
import { TaskModal } from "../components/TaskModal";
import { useModal } from "../../hooks/useModal";
import { useFilter } from "../../hooks/useFilter";
import { DateRangePicker } from "../components/DateRangePicker";

export const TaskMainPage = () => {
  const {tasks,toManyActiveCheck,startLoadingTasks,setActiveTask,startDeleteToManyTask} = useTaskStore();
  const { openModal } = useModal();
  const { setSelectedFilter, setSortOrder, filteredAndSortedTasks } = useFilter(tasks);
  const [searchValue, setSearchValue] = useState("");
  const [startDateFilter, setStartDateFilter] = useState(null);
  const [endDateFilter, setEndDateFilter] = useState(null);

  const filterTask = (task) => {
    if (searchValue === "") {
      return true;
    } else {
      const lowerCaseSearchValue = searchValue.toLowerCase();
      return task?.description?.toLowerCase().includes(lowerCaseSearchValue);
    }
  };

  const filterByDateRange = (task) => {
    if (!startDateFilter || !endDateFilter) {
      return true;
    }
    const taskDate = new Date(task.startDate);
    const taskEndDate = new Date(task.endDate);
    return taskDate >= startDateFilter && taskEndDate <= endDateFilter;
  };

  const handleDateRangeChange = (startDate, endDate) => {
    setStartDateFilter(new Date(startDate));
    setEndDateFilter(new Date(endDate));
  };

  const handleClearFilter = () => {
    setSelectedFilter("");
    setSortOrder("creationDate");
    setStartDateFilter(null);
    setEndDateFilter(null);
  };

  const onSelect = (task) => {
    setActiveTask(task);
  };

  const onDoubleClick = (task) => {
    openModal();
  };

  const onDeleteToMany = async () => {
    const selectedTaskIds = toManyActiveCheck;
    await startDeleteToManyTask(selectedTaskIds);
    window.location.reload();
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
        onClearFilter={handleClearFilter}
        onDeleteToMany={onDeleteToMany}
      />
      <input
        type="text"
        className="inputSearch"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Buscar Tarea"
      />
      <DateRangePicker onDateRangeChange={handleDateRangeChange} />

      {filteredAndSortedTasks.length > 0 && (
        <div>
          {filteredAndSortedTasks
            .filter(filterTask)
            .filter(filterByDateRange)
            .map((task) => (
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
