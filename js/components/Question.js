import React, { PropTypes } from 'react'

const Question = ({ text, answers }) => {
	console.log(answers);
	return (
	  <li>
	    {text}
	  </li>
	)
}

Question.propTypes = {
  	text: PropTypes.string.isRequired,
	answers: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired
	}))
}

export default Question