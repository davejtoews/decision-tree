import React, { PropTypes } from 'react'
import AddQuestion from '../containers/AddQuestion';
import QuestionListContainer from '../containers/QuestionListContainer';
import { connect } from 'react-redux';

const App = () => (
  <div>
    <AddQuestion />
    <QuestionListContainer />
  </div>
)

export default App