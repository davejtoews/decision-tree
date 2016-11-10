import React, { PropTypes } from 'react';
import NextQuestionForm from '../containers/NextQuestionForm';

const Answer = ({ id, text, nextQuestionId }) => {
	let nextQuestion;
	if (nextQuestionId) {
		nextQuestion = <a href={"#q" + nextQuestionId}>{nextQuestionId}</a>
	} else {
		nextQuestion = <NextQuestionForm answerId={id} />
	}
	return (
	  <li>
	    {text}
	    {nextQuestion}
	  </li>
	)
}

Answer.propTypes = {
  text: PropTypes.string.isRequired,
  nextQuestionId: PropTypes.number
}

export default Answer