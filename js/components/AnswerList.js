import React, { PropTypes } from 'react'
import Answer from './Answer'

const AnswerList = ({ answers }) => {
  return (
    <div className="answer-list">
      <h4>Answers</h4>
      <ul>
        {answers.map((answer, index) =>
          <Answer
            key={index}
            {...answer}
          />
        )}        
      </ul>
    </div>
  )
}

AnswerList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    nextQuestionId: PropTypes.number
  }).isRequired).isRequired
}

export default AnswerList