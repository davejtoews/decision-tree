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
        text: action.text,
        path: action.path
      }
    case 'NEXT_QUESTION':
      if (state.id === action.answerId) {
        const nextQuestionId = (action.questionId === -1) ? undefined : action.questionId;
        return {
          id: state.id,
          text: state.text,
          path: state.path,
          nextQuestionId: nextQuestionId
        }        
      }
    case 'NEXT_RESULT':
      if (state.id === action.answerId) {
        return {
          id: state.id,
          text: state.text,
          path: state.path,
          nextResultId: action.resultIds
        }        
      }
    default:
      return state
  }
}

export default answer;