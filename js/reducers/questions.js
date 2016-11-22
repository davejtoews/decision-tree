import answer from './answer';

const question = (state = {}, action) => {
  console.log({
    function: 'question',
     state: state,
     action: action
  });
  switch (action.type) {
    case 'ADD_QUESTION':
      return {
        id: action.id,
        text: action.text,
        answers: []
      }
    case 'ADD_ANSWER':
      if (state.id !== action.questionId) {
        return state
      }
      return {
        id: state.id,
        text: state.text,
        answers: [
          ...state.answers,
          answer(undefined, action).id
        ]
      }
    case 'REMOVE_ANSWER':
      return {
        id: state.id,
        text: state.text,
        answers: state.answers.filter(a =>
          a != action.id
        )
      }
    default:
      return state
  }
}

const questions = (state = [], action) => {
  console.log({
    function: 'questions',
     state: state,
     action: action
  });
  switch (action.type) {
    case 'ADD_QUESTION':
      return [
        ...state,
        question(undefined, action)
      ]
    case 'REMOVE_QUESTION':
      return state.filter(q =>
        q.id !== action.id
      )
    case 'ADD_ANSWER':
      return state.map(q =>
        question(q, action)
      )
    case 'REMOVE_ANSWER':
      return state.map(q =>
        question(q, action)
      )
    default:
      return state
  }
}

export default questions;