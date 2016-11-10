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
    default:
      return state
  }
}

export default results;