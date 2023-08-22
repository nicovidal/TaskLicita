import React from 'react';
import '../styles/AddTask.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

export const TaskCard = ({ task, onSelectEvent , onDoubleClickEvent}) => {
  
  const currentDate = new Date();
  const endDate = new Date(task.endDate);

  let cardStateClass = '';
  if (endDate < currentDate) {
    cardStateClass = 'yaVencidas';
  } else if (endDate.getTime() - currentDate.getTime() <= 86400000) { 
    cardStateClass = 'aPuntoDeVencer';
  } else if (endDate.toISOString().split('T')[0] === currentDate.toISOString().split('T')[0]) {
    cardStateClass = 'realizarse';
  }

  const handleDateChange = (event) => {
    // Manejar el cambio de fecha aquí
  };

  const formattedEndDate = new Date(task.endDate).toISOString().split('T')[0];

  return (
    <div className={`container ${cardStateClass}`} onClick={() => onSelectEvent(task)} onDoubleClick={()=>onDoubleClickEvent(task)}>
      <div key={task.id}>
        <form>
          <h3 className='descriptionText'>{task.description}</h3>
          <div className='checkbox-box'>
            <input type='checkbox' id='checkbox' />
            <label htmlFor='checkbox'></label>
          </div>
          <div className='bottom-icons-container'>
            <div className='calendar-icon'>
              <input
                type='date'
                id='date'
                name='date'
                value={formattedEndDate}
                onChange={handleDateChange}
              />
              <FontAwesomeIcon icon={faCalendarDays} size='2x' />
            </div>
            <FontAwesomeIcon icon={faCircleCheck} size='2x' />
          </div>
        </form>
      </div>
    </div>
  );
};
