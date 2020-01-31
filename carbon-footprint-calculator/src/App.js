import React from 'react';
import {render} from 'react-dom';
import Question from './Question';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Quiz</h2>
        </div>
          <Question content="What is your favourite food?" />
      </div>
    );
  }
}

export default App;
