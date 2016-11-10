import React, { PropTypes } from 'react'
import AddQuestion from '../containers/AddQuestion';
import QuestionListContainer from '../containers/QuestionListContainer';
import JsonState from '../containers/JsonState';
import { connect } from 'react-redux';

const App = () => (
  <div>
    <AddQuestion />
    <QuestionListContainer />
    <JsonState />
  </div>
)

export default App