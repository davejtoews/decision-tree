let nextQuestionId = 0

export const addQuestion = (text) => {
  return {
    type: 'ADD_QUESTION',
    id: nextQuestionId++,
    text,
    answers: []
  }
}

export const addAnswer = (id, text) => {
	return {
		type: 'ADD_ANSWER',
		id,
		text
	}
}