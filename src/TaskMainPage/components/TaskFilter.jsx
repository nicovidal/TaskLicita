import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

export const TaskFilter = () => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" ,marginTop:"20px"}}>
        <button>Liberar Seleccionadas</button>
        <button type="button" className="btn btn-light"  style={{ marginLeft: "31rem"}}>
          <FontAwesomeIcon icon={faFilter} /> Ordenar
        </button>
      </div>
    </>
  );
};
