import { combineReducers } from 'redux';
import questions from './questions';
import answers from './answers';
import results from './results';
import answerType from './answerType';

const decisionApp = combineReducers({
  questions,
  answers,
  results,
  answerType
})

export default decisionApp;