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
        path: action.path
      }
    case 'NEXT_QUESTION':
      if (state.id === action.answerId) {
        const nextQuestionId = (action.questionId === -1) ? undefined : action.questionId;
        return {
          id: state.id,
          path: state.path,
          nextQuestionId: nextQuestionId
        }        
      }
    case 'NEXT_RESULT':
      if (state.id === action.answerId) {
        const nextResultId = (action.resultId === -1) ? undefined : action.resultId;
        return {
          id: state.id,
          path: state.path,
          nextResultId: nextResultId
        }        
      }
    default:
      return state
  }
}

export default answer;