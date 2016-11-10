import { combineReducers } from 'redux';
import questions from './questions';
import answers from './answers';

const decisionApp = combineReducers({
  questions,
  answers
})

export default decisionApp;