import { combineReducers } from 'redux';
import questions from './questions';
import answers from './answers';
import results from './results';

const decisionApp = combineReducers({
  questions,
  answers,
  results
})

export default decisionApp;