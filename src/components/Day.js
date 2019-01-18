import React from 'react';
import dateFns from 'date-fns';
import '../styles/components/day.css';

const Day = props => {
  const { formattedDate, selectedDate, day, monthStart, pickDate, shift } = props;
  const cloneDay = day;
  return (
    <div
      className={`dayItem ${
        !dateFns.isSameMonth(day, monthStart)
          ? 'disabled'
          : dateFns.isSameDay(day, selectedDate)
          ? 'selected'
          : ''
      } ${shift.length > 0 && shift[0].shift}`}
      key={day}
      onClick={() => pickDate(cloneDay)}
    >
      <span className="number">{formattedDate}</span>
      {shift.length > 0 && <p>{shift[0].shift}</p>}
    </div>
  );
};
export default Day;
