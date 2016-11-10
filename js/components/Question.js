import React, { PropTypes } from 'react';
import AddAnswer from '../containers/AddAnswer';
import AnswerListContainer from '../containers/AnswerListContainer';

const Question = ({ id, text, answers }) => {
	return (
		<li id={"q" + id}>
		  {text}
		  <AddAnswer questionId={id}/>
		<AnswerListContainer questionId={id} />
		</li>
	)
}

Question.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.number)
}

export default Question