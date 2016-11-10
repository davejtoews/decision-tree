const answer = (state = {}, action) => {
  console.log({
    function: 'answer',
     state: state,
     action: action
  });  
  switch (action.type) {
    case 'ADD_ANSWER':
      return {
        id: action.id,
        text: action.text
      }
    default:
      return state
  }
}

export default answer;