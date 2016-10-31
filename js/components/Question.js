import React, { PropTypes } from 'react'

const Question = ({ text }) => (
  <li>
    {text}
  </li>
)

Question.propTypes = {
  text: PropTypes.string.isRequired
}

export default Question