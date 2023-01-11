import React, { Component } from 'react';
import CounterPage from './pages/CounterPage';
import ToDoPage from './pages/ToDoPage';

class App extends Component {
  render() {
    return (
      <div>
        <CounterPage/>
        <ToDoPage/>

      </div>
    );
  }
}

export default App;