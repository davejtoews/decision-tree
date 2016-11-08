import React, { PropTypes } from 'react';
import AnswerList from './AnswerList';
import AddAnswer from '../containers/AddAnswer';

const Question = ({ id, text, answers }) => {
	return (
		<li>
		  {id + ': ' + text}
		  <AddAnswer questionId={id}/>
		<AnswerList answers={answers} />
		</li>
	)
}

Question.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
		nextQuestionId: PropTypes.number
  }))
}

export default Question