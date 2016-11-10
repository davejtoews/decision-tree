let nextId = 0

export const addQuestion = (text) => {
  return {
    type: 'ADD_QUESTION',
    id: nextId++,
    text,
    answers: []
  }
}

export const addAnswer = (questionId, text) => {
	return {
		type: 'ADD_ANSWER',
		id: nextId++,
		questionId: questionId,
		text
	}
}

export const nextQuestion = (answerId, questionId) => {
	return {
		type: 'NEXT_QUESTION',
		answerId: answerId,
		questionId: questionId
	}
}

export const addResult = (text) => {
	return {
		type: 'ADD_RESULT',
		id: nextId++,
		text
	}
}