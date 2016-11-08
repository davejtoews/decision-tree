const answer = (state = {}, action) => {
  console.log({
    function: 'answer',
     state: state,
     action: action
  });  
  switch (action.type) {
    case 'ADD_ANSWER':
      return {
        text: action.text
      }
    default:
      return state
  }
}

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
      if (state.id !== action.id) {
        return state
      }
      return {
        id: state.id,
        text: state.text,
        answers: [
          ...state.answers,
          answer(undefined, action)
        ]
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
    case 'ADD_ANSWER':
      return state.map(q =>
        question(q, action)
      )
    default:
      return state
  }
}

export default questions