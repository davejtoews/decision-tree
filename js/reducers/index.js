import { combineReducers } from 'redux';
import questions from './questions';

const decisionApp = combineReducers({
  questions
})

export default decisionApp;