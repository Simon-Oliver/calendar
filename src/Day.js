import React from 'react';
import dateFns from 'date-fns';

const Day = props => {
  const { formattedDate, selectedDate, day, monthStart, selectedDateFunc } = props;
  const cloneDay = day;
  return (
    <div
      className={`dayItem ${
        !dateFns.isSameMonth(day, monthStart)
          ? 'disabled'
          : dateFns.isSameDay(day, selectedDate)
          ? 'selected'
          : ''
      }`}
      key={day}
      onClick={() => console.log(dateFns.format(cloneDay, 'YYYY MMMM DDDD'))}
    >
      <span className="number">{formattedDate}</span>
      {props.shift.length > 0 && <div className="icon day">brightness_2</div>}
    </div>
  );
};
export default Day;
