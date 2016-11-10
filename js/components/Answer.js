import React, { PropTypes } from 'react';
import NextQuestionSelect from '../containers/NextQuestionSelect';

const Answer = ({ id, text, nextQuestionId }) => {
	let nextQuestionLink = '';
	if (nextQuestionId !== undefined) {
		nextQuestionLink = <a href={"#q" + nextQuestionId}>Go To</a>
	}
	return (
	  <li>
	    {text}
	    <NextQuestionSelect answerId={id} questionId={nextQuestionId} />
	    {nextQuestionLink}
	  </li>
	)
}

Answer.propTypes = {
  text: PropTypes.string.isRequired,
  nextQuestionId: PropTypes.number
}

export default Answer