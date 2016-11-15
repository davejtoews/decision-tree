import React, { PropTypes } from 'react';
import NextQuestionSelect from '../containers/NextQuestionSelect';
import NextResultSelect from '../containers/NextResultSelect';

const Answer = ({ id, text, path, nextQuestionId, nextResultId }) => {
	let nextQuestionLink = '';
	if (nextQuestionId !== undefined) {
		nextQuestionLink = <a href={"#q" + nextQuestionId}>Go To</a>
	}
	let selectElement;
	switch (path) {
		case 'question':
			selectElement = <NextQuestionSelect answerId={id} questionId={nextQuestionId} />
			break;
		case 'result':
			selectElement = <NextResultSelect answerId={id} resultIds={nextResultId} />
			break;
	}
	return (
	  <li>
	    {text}
	    {selectElement}
	    {nextQuestionLink}
	  </li>
	)
}

Answer.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    nextQuestionId: PropTypes.number
}

export default Answer