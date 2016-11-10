import React, { PropTypes } from 'react'
import AddQuestion from '../containers/AddQuestion';
import QuestionListContainer from '../containers/QuestionListContainer';
import AddResult from '../containers/AddResult';
import ResultListContainer from '../containers/ResultListContainer';
import JsonState from '../containers/JsonState';
import { connect } from 'react-redux';

const App = () => (
  <div>
    <AddQuestion />
    <QuestionListContainer />
	<AddResult />
	<ResultListContainer />
    <JsonState />
  </div>
)

export default App