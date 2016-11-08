import React, { PropTypes } from 'react'

const Answer = ({ text }) => {
	return (
	  <li>
	    {text}
	  </li>
	)
}

Answer.propTypes = {
  text: PropTypes.string.isRequired,
  nextQuestionId: PropTypes.number

}

export default Answer