let nextId = 0;

export const addQuestion = (text) => {
  return {
    type: 'ADD_QUESTION',
    id: nextId++,
    text,
    answers: []
  }
}

export const addAnswer = (questionId, text, path) => {
	return {
		type: 'ADD_ANSWER',
		id: nextId++,
		questionId: questionId,
		text,
		path
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

export const nextResult = (answerId, resultIds) => {
	return {
		type: 'NEXT_RESULT',
		answerId: answerId,
		resultIds: resultIds
	}
}

export const removeQuestion = (id) => {
	return {
		type: 'REMOVE_QUESTION',
		id: id
	}
}

export const removeAnswer = (id) => {
	return {
		type: 'REMOVE_ANSWER',
		id: id
	}
}

export const removeResult = (id) => {
	return {
		type: 'REMOVE_RESULT',
		id: id
	}
}

export const changeAnswerType = (questionId, answerType) => {
	return {
		type: 'CHANGE_ANSWER_TYPE',
		id: questionId,
		answerType: answerType
	}
}