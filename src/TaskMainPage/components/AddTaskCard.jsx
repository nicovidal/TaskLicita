import React from 'react';
import '../styles/AddTask.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useModal } from '../../hooks/useModal'
import { TaskModal } from './TaskModal';

export const AddTaskCard = () => {

  const{openModal}=useModal();


  const onDoubleClick=(event)=>{
    console.log('abriendo modal')
    openModal();
  }

  const onSelect = (event) => {
    /* console.log({ click: event }) */
    setActiveEvent(event);
  }


  return (
    <>
    <div className='container'>
  
        <button type="button" className="full-button"
        onDoubleClick={onDoubleClick}
        onSelectEvent={onSelect}>
          <FontAwesomeIcon icon={faPlus} size='2xl' className='plus'/>
        </button>
   
    </div>
    <TaskModal/>
    </>
  );
};
