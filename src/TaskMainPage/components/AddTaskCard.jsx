import React from "react";
import "../styles/AddTask.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../../hooks/useModal";
import { TaskModal } from "./TaskModal";
import { useTaskStore } from "../../hooks/useTaskStore";

export const AddTaskCard = () => {
  const { openModal } = useModal();
  const { setActiveTask } = useTaskStore();

  const onClick = () => {
    setActiveTask({
      description: "",
      startDate: new Date(),
      endDate: "",
    });

    openModal();
  };

  return (
    <>
      <div className="container">
        <button type="button" className="full-button" onClick={onClick}>
          <FontAwesomeIcon icon={faPlus} size="2xl" className="plus" />
        </button>
      </div>
      <TaskModal />
    </>
  );
};
