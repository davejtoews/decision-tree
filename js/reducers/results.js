const result = (state = {}, action) => {
  console.log({
    function: 'result',
     state: state,
     action: action
  });
  switch (action.type) {
    case 'ADD_RESULT':
      return {
        id: action.id,
        text: action.text,
      }
    default:
      return state
  }
}

const results = (state = [], action) => {
  console.log({
    function: 'results',
     state: state,
     action: action
  });
  switch (action.type) {
    case 'ADD_RESULT':
      return [
        ...state,
        result(undefined, action)
      ]
    case 'REMOVE_RESULT':
      return state.filter(r =>
        r.id !== action.id
      )
    default:
      return state
  }
}

export default results;