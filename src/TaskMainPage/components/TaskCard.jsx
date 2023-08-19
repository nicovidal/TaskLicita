import React, { useState } from 'react';
import '../styles/AddTask.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export const TaskCard = () => {

    const [selectedDate, setSelectedDate] = useState('')

    const handleDateChange=(event)=>{
        setSelectedDate(event.target.value)
    }

  return (
    <>
      <div className='container '>
        <div>
          <form>
            <h3>Tarea pendiente</h3>
            <div className='checkbox-box'>
              <input type='checkbox' id='checkbox' />
              <label htmlFor='checkbox'></label>
            </div>
            <input
              type='date'
              id='date'
              name='date'
              value={selectedDate}
              onChange={handleDateChange}
            /> 
            <FontAwesomeIcon icon={faCircleCheck} size="2xl"/>          
        </form>
        </div>
      </div>
    </>
  );
};