import React, { Component } from 'react';
import './App.css';
import './components/Calendar';
import Calendar from './components/Calendar';

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
