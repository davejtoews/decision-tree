const answerType = (state = {}, action) => {
  console.log({
    function: 'answerType',
     state: state,
     action: action
  });
  switch (action.type) {
    case 'CHANGE_ANSWER_TYPE':
      return action.answerType
    default:
      return state
  }
}

export default answerType;