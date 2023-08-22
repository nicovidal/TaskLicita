import React, { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { differenceInSeconds } from "date-fns";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { useModal } from "../../hooks/useModal";
import { useTaskStore } from "../../hooks/useTaskStore";

registerLocale("es", es);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const TaskModal = () => {
  const { isModalOpen, closeModal } = useModal();

  const { activeTask, startSavingTask,startDeletingTask } = useTaskStore();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formValues, setFormValues] = useState({
    description: "",
    startDate: new Date(),
    endDate: "",
  });

  const descriptionClass = useMemo(() => {
    if (!formSubmitted) return;

    return formValues.description.length > 0 ? "" : "is-invalid";
  }, [formValues.description, formSubmitted]);

  useEffect(() => {
    if (activeTask !== null) {
      setFormValues({ ...activeTask });
    }
  }, [activeTask]);

  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateChanged = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  };

  const onCloseModal = () => {
    closeModal();
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const difference = differenceInSeconds(
      formValues.endDate,
      formValues.startDate
    );

    if (isNaN(difference) || difference <= 0) {
      Swal.fire("Fechas incorrectas", "Revisa tus fechas", "error");
      return;
    }

    if (formValues.description.length <= 0) return;

    await startSavingTask(formValues);
    closeModal();
    setFormSubmitted(false);
  };

  const onDelete=async(task)=>{
    startDeletingTask();

  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nueva Tarea </h1>
      <hr />
      <form className="container2" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Descripcion</label>
          <input
            type="text"
            className={`form-control ${descriptionClass}`}
            placeholder="Descripcion de la tarea"
            name="description"
            autoComplete="off"
            value={formValues.description}
            onChange={onInputChanged}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>
        <div className="form-group mb-2">
          <label>Fecha inicio</label>
          <DatePicker
            selected={formValues.startDate}
            onChange={(event) => onDateChanged(event, "startDate")}
            className="form-control mx-2"
            locale="es"
            dateFormat="P"
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha fin</label>
          <DatePicker
            minDate={formValues.startDate}
            selected={formValues.endDate}
            onChange={(event) => onDateChanged(event, "endDate")}
            className="form-control mx-2"
            locale="es"
            dateFormat="P"
          />
        </div>

        <hr />

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
        <button type="submit" className="btn btn-outline-danger btn-block mx-4" onClick={onDelete}>
          <i className="far fa-save"></i>
          <span> Borrar</span>
        </button>
      </form>
    </Modal>
  );
};
