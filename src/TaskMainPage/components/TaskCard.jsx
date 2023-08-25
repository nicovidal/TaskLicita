import React, { useState } from "react";
import "../styles/AddTask.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTaskCardState } from "../../hooks/useTaskCardState";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { useTaskStore } from "../../hooks/useTaskStore";

export const TaskCard = ({ task, onSelectEvent, onDoubleClickEvent }) => {
  const { cardStateClass, estado, circleIcon } = useTaskCardState(task);
  const [isChecked, setIsChecked] = useState(false);
  const { setActiveCheckedTask } = useTaskStore();

  const handleCheckboxChange = (task, isChecked) => {
    setActiveCheckedTask({ id: task.id, isChecked: !isChecked });
    setIsChecked(!isChecked);
  };

  const handleDateChange = (event) => {};

  const formattedEndDate = new Date(task.endDate).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div
      className={`container ${cardStateClass}`}
      onClick={() => onSelectEvent(task)}
      onDoubleClick={() => onDoubleClickEvent(task)}
    >
      <div key={task.id}>
        <form>
          <h3 className="descriptionText">{task.description}</h3>

          <div className="checkbox-box">
            <input
              type="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={() => handleCheckboxChange(task, isChecked)}
            />
            <label htmlFor="checkbox"></label>
            <h3 className="descriptionText">Tarea {estado}</h3>
          </div>

          <div className="bottom-icons-container">
            <div className="calendar-icon">
              <p className="calendar-message">Vencimiento:</p>
              <input
                disabled
                id="date"
                name="date"
                value={formattedEndDate}
                onChange={handleDateChange}
              />

              <FontAwesomeIcon
                icon={faCalendarDays}
                size="2x"
                className="mx-2"
              />
            </div>
            {circleIcon && <FontAwesomeIcon icon={circleIcon} size="2x" />}
          </div>
        </form>
      </div>
    </div>
  );
};
