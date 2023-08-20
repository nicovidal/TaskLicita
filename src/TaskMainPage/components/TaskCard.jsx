import React from 'react';
import '../styles/AddTask.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export const TaskCard = ({ task }) => {
  const handleDateChange = (event) => {
    // Manejar el cambio de fecha aquí
  };

  return (
    <div className='container'>
      <div key={task.id}>
        <form>
          <h3>{task.description}</h3>
          <div className='checkbox-box'>
            <input type='checkbox' id='checkbox' />
            <label htmlFor='checkbox'></label>
          </div>
          <input
            type='date'
            id='date'
            name='date'
            value={task.endDate}
            onChange={handleDateChange}
          />
          <FontAwesomeIcon icon={faCircleCheck} size='2xl' />
        </form>
      </div>
    </div>
  );
};

