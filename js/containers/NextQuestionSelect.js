import React from 'react'
import { connect } from 'react-redux'
import { nextQuestion } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    answerId: ownProps.answerId,
    questionId: ownProps.questionId,
    questions: state.questions
  }
}

let NextQuestionSelect = ({ dispatch, answerId, questionId, questions }) => {
  const value = (typeof questionId !== 'undefined') ? questionId : -1;
  return (
      <select
        onChange = {e => {
          dispatch(nextQuestion(answerId, parseInt(e.target.value)))
        }}
        value = {value}
      >
        <option value={-1}>[none]</option>
        {questions.map((question, index) =>
          <option key={index} value={question.id}>{question.text}</option>
        )}
      </select>
  )
}
NextQuestionSelect = connect(mapStateToProps)(NextQuestionSelect)

export default NextQuestionSelect;