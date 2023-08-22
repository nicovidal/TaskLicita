import React from 'react';
import '../styles/AddTask.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

export const TaskCard = ({ task, onSelectEvent , onDoubleClickEvent}) => {
  
  const currentDate = new Date(task.startDate);
  currentDate.setHours(0, 0, 0, 0); 
    
  const endDate = new Date(task.endDate);
  endDate.setHours(0, 0, 0, 0); 
  
  console.log({ endDate });
  console.log({ currentDate });
  
  let cardStateClass = 'aPuntoDeVencer';

  
  if (currentDate > endDate) {
    cardStateClass = 'yaVencidas';
  } else if (currentDate === endDate) {
    cardStateClass = 'aPuntoDeVencer';
  } else if (currentDate < endDate) {
    cardStateClass = 'realizarse';
  }
  
  

  const handleDateChange = (event) => {
    // Manejar el cambio de fecha aquí
  };
  const formattedEndDate = new Date(task.endDate).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

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
                disabled
                id='date'
                name='date'
                value={formattedEndDate}
                onChange={handleDateChange}
              />
              <FontAwesomeIcon icon={faCalendarDays} size='2x' className='mx-2' />
            </div>
            <FontAwesomeIcon icon={faCircleCheck} size='2x' />
          </div>
        </form>
      </div>
    </div>
  );
};
