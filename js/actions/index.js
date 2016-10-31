let nextQuestionId = 0
export const addQuestion = (text) => {
  return {
    type: 'ADD_QUESTION',
    id: nextQuestionId++,
    text
  }
}