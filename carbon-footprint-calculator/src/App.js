import React from 'react';
import {render} from 'react-dom';
import quizQuestions from './api/quizQuestions';
import Quiz from './Quiz';
import Question from './Question';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

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
