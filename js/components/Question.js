import React, { PropTypes } from 'react';
import AddAnswer from '../containers/AddAnswer';
import RemoveQuestion from '../containers/RemoveQuestion';
import AnswerListContainer from '../containers/AnswerListContainer';

const Question = ({ id, text, answers }) => {
	return (
		<li id={"q" + id}>
			<header className="question-header">
			  	<h3>{text}</h3>
				<RemoveQuestion id={id} answers={answers} />
			</header>
			<div className="answer-wrapper">
				<div className="action-wrapper">
					<AddAnswer questionId={id} />
				</div>
				<AnswerListContainer questionId={id} />
			</div>
		</li>
	)
}

Question.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.number)
}

export default Question