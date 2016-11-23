import React, { PropTypes } from 'react'
import Question from './Question'

const QuestionList = ({ questions }) => (
  <div className="question-list">
    <h2>Questions</h2>
    <ul>
      {questions.map(question =>
        <Question
          key={question.id}
          {...question}
        />
      )}      
    </ul>

  </div>
)

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.number),
    answerType: PropTypes.object
  }).isRequired).isRequired
}

export default QuestionList