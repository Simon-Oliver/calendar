import React from 'react';
import dateFns from 'date-fns';

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
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

  renderDayHeader = () => {
    const dateFormat = 'ddd';
    const days = [];

    const startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="dayNames item">
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return days;
  };

  renderDays = () => {
    const { currentMonth, selectedDate } = this.state;
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
      days.push(
        <div
          className={`dayItem ${
            !dateFns.isSameMonth(day, monthStart)
              ? 'disabled'
              : dateFns.isSameDay(day, selectedDate)
              ? 'selected'
              : ''
          }`}
          key={day}
        >
          <span className="number">{formattedDate}</span>
        </div>
      );
      day = dateFns.addDays(day, 1);
    }
    return days;
  };

  render() {
    return (
      <div className="calendar">
        <div className="grid">
          {this.renderHeader()}
          {this.renderDayHeader()}
          {this.renderDays()}
        </div>
      </div>
    );
  }
}

export default Calendar;
