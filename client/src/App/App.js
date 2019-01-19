import React, { Component } from 'react';
import './App.css';
import Calendar from './pages/calendar/components/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar />
      </div>
    );
  }
}

export default App;
