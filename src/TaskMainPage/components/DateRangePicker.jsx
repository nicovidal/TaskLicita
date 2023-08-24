import React, { useState } from "react";

export const DateRangePicker = ({ onDateRangeChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleApply = () => {
    onDateRangeChange(startDate, endDate);
  };

  return (
    <div className="dataPicker">
      <label>Fecha de inicio:</label>
      <input type="date" value={startDate} onChange={handleStartDateChange} />
      <label>Fecha de fin:</label>
      <input type="date" value={endDate} onChange={handleEndDateChange} />
      <button onClick={handleApply}>Aplicar</button>
    </div>
  );
};

