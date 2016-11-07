import React, { PropTypes } from 'react'

const Answer = ({ text }) => {
	return (
	  <li>
	    {text}
	  </li>
	)
}

Answer.propTypes = {
  text: PropTypes.string.isRequired
}

export default Answer