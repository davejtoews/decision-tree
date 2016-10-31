const question = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

const questions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return [
        ...state,
        question(undefined, action)
      ]
    default:
      return state
  }
}

export default questions