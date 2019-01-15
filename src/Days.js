import React from 'react';
import dateFns from 'date-fns';
import Day from './Day';

const RenderDays = props => {
  const { currentMonth, selectedDate, selectedDateFunc, shifts } = props;
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
      e => dateFns.format(e.date, 'DD MM YY') === dateFns.format(day, 'DD MM YY')
    );
    days.push(
      <Day
        formattedDate={formattedDate}
        selectedDate={selectedDate}
        day={day}
        monthStart={monthStart}
        selectedDateFunc={selectedDateFunc}
        shift={shift}
      />
    );
    day = dateFns.addDays(day, 1);
  }
  return days;
};

export default RenderDays;
