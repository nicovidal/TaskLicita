import React, { useState } from "react";
import Modal from "react-modal";
import DatePicker,{ registerLocale }from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';

registerLocale('es',es)

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
  const [isOpen, setIsOpen] = useState(true);

  const [formValues, setFormValues] = useState({
    description: "hola",
    startDate: new Date(),
    endDate: ""
  });

  const onInputChanged=({target})=>{
    setFormValues({
      ...formValues,
      [target.name]:target.value
    })
  }

  const onDateChanged=(event,changing)=>{
    setFormValues({
      ...formValues,
      [changing]:event
    })
  }

  const onCloseModal = () => {
    console.log("Cerrando modal");
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nueva Tarea </h1>
      <hr />
      <form className="container2">
        <div className="form-group mb-2">
          <label>Descripcion</label>
          <input
            type="text"
            className="form-control"
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
              onChange={(event)=>onDateChanged(event,'startDate')}
              className="form-control"
              locale='es'
              dateFormat="P"
              
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha fin</label>
          <DatePicker
              minDate={formValues.startDate}
              selected={formValues.endDate}
              onChange={(event)=>onDateChanged(event,'endDate')}
              className="form-control"
              locale='es'
              dateFormat="P"
          />
        </div>

        <hr />

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
