import React from 'react';
import dateFns from 'date-fns';
import Days from './Days';
import ShiftModal from './ShiftModal';
import axios from 'axios';

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    shifts: [
      {
        date: new Date(),
        shift: ''
      }
    ],
    selectedShift: undefined
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
        <div className="icon arrow" onClick={this.prevMonth}>
          chevron_left
        </div>
        <h3> {dateFns.format(this.state.currentMonth, dateFormat)}</h3>
        <div className="icon arrow" onClick={this.nextMonth}>
          chevron_right
        </div>
      </div>
    );
  };

  pickDate = date => {
    const shift = this.state.shifts.filter(
      e => dateFns.format(e.date, 'DD MM YY') === dateFns.format(date, 'DD MM YY')
    );

    if (shift.length > 0) {
      this.setState(() => ({
        selectedShift: shift[0]
      }));
    } else {
      this.setState(() => ({
        selectedShift: { date }
      }));
    }
  };

  onSubmit = updatedShift => {
    const prevShifts = this.state.shifts.filter(
      e => dateFns.format(updatedShift.date, 'DD MM YY') !== dateFns.format(e.date, 'DD MM YY')
    );
    this.setState(() => ({
      shifts: [...prevShifts, updatedShift]
    }));

    axios
      .post('/shift', {
        date: dateFns.format(updatedShift.date, 'YY-MM-DD'),
        shift: updatedShift.shift
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  closeModal = () => {
    this.setState(() => ({
      selectedShift: ''
    }));
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
            pickDate={this.pickDate}
            shifts={this.state.shifts}
          />
        </div>
        <ShiftModal
          selectedShift={this.state.selectedShift}
          closeModal={this.closeModal}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default Calendar;
