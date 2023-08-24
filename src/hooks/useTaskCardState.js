import { useState, useEffect } from "react";
import {
  faCircleCheck,
  faClock,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export const useTaskCardState = (task) => {
  const [cardStateClass, setCardStateClass] = useState("");
  const [estado, setEstado] = useState("");
  const [circleIcon, setCircleIcon] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const endDate = new Date(task.endDate);
    endDate.setHours(0, 0, 0, 0);

    if (currentDate > endDate) {
      setCardStateClass("yaVencidas");
      setEstado("vencida");
      setCircleIcon(faCircleXmark);
    } else if (
      currentDate.getDate() === endDate.getDate() &&
      currentDate.getMonth() === endDate.getMonth() &&
      currentDate.getFullYear() === endDate.getFullYear()
    ) {
      setCardStateClass("porVencer");
      setEstado("por vencer");
      setCircleIcon(faClock);
    } else if (currentDate < endDate) {
      setCardStateClass("realizarse");
      setEstado("a realizar");
      setCircleIcon(faCircleCheck);
    }
  }, [task.endDate]);

  return { cardStateClass, estado, circleIcon };
};
