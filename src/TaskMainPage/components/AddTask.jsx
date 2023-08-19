import React from 'react';
import '../styles/AddTask.css'

export const AddTask = () => {
  return (
    <>
      <div className='container'>
        <div>
          <form>
            <div className='checkbox-box'>
              <input type='checkbox' id='checkbox' />
              <label htmlFor='checkbox'></label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};