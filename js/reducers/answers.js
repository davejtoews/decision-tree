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
    case 'NEXT_QUESTION':
      return state.map(q =>
        answer(q, action)
      )
    default:
      return state
  }
}

export default answers;