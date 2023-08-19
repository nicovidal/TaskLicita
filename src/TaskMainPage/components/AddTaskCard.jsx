import React from 'react';
import '../styles/AddTask.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const AddTaskCard = () => {
  return (
    <div className='container'>
        <button type="button" class="btn btn-light" >
          <FontAwesomeIcon icon={faPlus} size='2xl' className='plus'/>
        </button>
  
    </div>
  );
};
