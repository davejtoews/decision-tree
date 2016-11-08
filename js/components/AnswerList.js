import React, { PropTypes } from 'react'
import Answer from './Answer'

const AnswerList = ({ answers }) => (
  <ul>
    {answers.map((answer, index) =>
      <Answer
        key={index}
        {...answer}
      />
    )}
  </ul>
)

AnswerList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    nextQuestionId: PropTypes.number
  }).isRequired).isRequired
}

export default AnswerList