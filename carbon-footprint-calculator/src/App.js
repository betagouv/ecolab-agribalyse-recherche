import React from 'react';
import {render} from 'react-dom';
import './App.css';

class App extends React.Component {

  constructor(props) {
  super(props);

  this.state = {
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answersCount: {},
    result: ''
  };
}

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
