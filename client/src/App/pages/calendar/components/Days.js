import React from 'react';
import dateFns from 'date-fns';
import Day from './Day';

const RenderDays = props => {
  const { currentMonth, selectedDate, pickDate, shifts } = props;
  const monthStart = dateFns.startOfMonth(currentMonth);
  const monthEnd = dateFns.endOfMonth(monthStart);
  const startDate = dateFns.startOfWeek(monthStart);
  const endDate = dateFns.endOfWeek(monthEnd);

  const dateFormat = 'D';

  const days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    formattedDate = dateFns.format(day, dateFormat);
    const shift = shifts.filter(
      e => dateFns.format(e.date, 'YY-MM-DD') === dateFns.format(day, 'YY-MM-DD')
    );
    days.push(
      <Day
        formattedDate={formattedDate}
        selectedDate={selectedDate}
        day={day}
        monthStart={monthStart}
        pickDate={pickDate}
        shift={shift}
        key={day}
      />
    );
    day = dateFns.addDays(day, 1);
  }
  return days;
};

export default RenderDays;
