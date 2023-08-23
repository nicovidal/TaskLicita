import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

export const TaskFilter = ({ onFilterChange, onClearFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
    console.log({filter})
  };

  const handleClearFilter = () => {
    setSelectedFilter(''); 
    onClearFilter();
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
      <button onClick={handleClearFilter}>Quitar Filtro</button>
      <div className='dropdown' style={{ marginLeft: '31rem' }}>
        <button
          className='btn btn-light dropdown-toggle'
          type='button'
          id='filterDropdown'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          <FontAwesomeIcon icon={faFilter} /> Ordenar
        </button>
        <ul className='dropdown-menu' aria-labelledby='filterDropdown'>
          <li>
            <button
              className={`dropdown-item ${selectedFilter === 'realizarse' ? 'active' : ''}`}
              onClick={() => handleFilterChange('realizarse')}
            >
              Realizarse
            </button>
          </li>
          <li>
            <button
              className={`dropdown-item ${selectedFilter === 'porVencer' ? 'active' : ''}`}
              onClick={() => handleFilterChange('porVencer')}
            >
              Por vencer
            </button>
          </li>
          <li>
            <button
              className={`dropdown-item ${selectedFilter === 'vencida' ? 'active' : ''}`}
              onClick={() => handleFilterChange('vencida')}
            >
              Vencida
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
