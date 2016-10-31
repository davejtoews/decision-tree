import React from 'react';
import AddQuestion from '../containers/AddQuestion';
import QuestionList from '../components/QuestionList';
import { connect } from 'react-redux';

const App = () => (
  <div>
    <AddQuestion />
    <QuestionList questions={this.state.questions}/>
  </div>
)

export default App