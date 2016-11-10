import React, { PropTypes } from 'react'
import Question from './Question'

const QuestionList = ({ questions }) => (
  <ul>
    {questions.map(question =>
      <Question
        key={question.id}
        {...question}
      />
    )}
  </ul>
)

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.number)
  }).isRequired).isRequired
}

export default QuestionList