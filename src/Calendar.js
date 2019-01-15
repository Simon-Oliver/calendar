import React from 'react';
import dateFns from 'date-fns';
import Days from './Days';

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    shifts: [
      {
        date: new Date(),
        shift: 'night'
      }
    ]
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  renderHeader = () => {
    const dateFormat = 'MMMM YYYY';

    return (
      <div className="dateHeader">
        <div className="icon" onClick={this.prevMonth}>
          chevron_left
        </div>
        <h3> {dateFns.format(this.state.currentMonth, dateFormat)}</h3>
        <div className="icon" onClick={this.nextMonth}>
          chevron_right
        </div>
      </div>
    );
  };

  selectedDate = date => {
    console.log(date);
  };

  renderDayHeader = () => {
    const dateFormat = 'ddd';
    const days = [];

    const startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="dayNames item" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return days;
  };

  render() {
    return (
      <div className="calendar">
        <div className="grid">
          {this.renderHeader()}
          {this.renderDayHeader()}
          <Days
            currentMonth={this.state.currentMonth}
            selectedDate={this.state.selectedDate}
            selectedDateFunc={this.selectedDate}
            shifts={this.state.shifts}
          />
        </div>
      </div>
    );
  }
}

export default Calendar;
