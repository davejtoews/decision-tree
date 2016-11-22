import answer from './answer';

const answers = (state = [], action) => {
  console.log({
    function: 'answers',
     state: state,
     action: action
  });
  switch (action.type) {
    case 'ADD_ANSWER':
      return [
        ...state,
        answer(undefined, action)
      ]
    case 'REMOVE_ANSWER':
      return state.filter(a =>
        a.id !== action.id
      )
    case 'NEXT_QUESTION':
      return state.map(a =>
        answer(a, action)
      )
    case 'NEXT_RESULT':
      return state.map(a =>
        answer(a, action)
      )
    default:
      return state
  }
}

export default answers;