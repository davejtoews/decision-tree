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
    default:
      return state
  }
}

export default answers;