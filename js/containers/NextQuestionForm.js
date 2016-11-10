import React from 'react'
import { connect } from 'react-redux'
import { nextQuestion } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    answerId: ownProps.answerId
  }
}

let NextQuestionForm = ({ dispatch, answerId }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(nextQuestion(answerId, parseInt(input.value)))
        input.value = ''
      }}>
        <input
          type="number"
          min="0"
          step="1"
          ref={node => {
            input = node
          }} 
        />
        <button type="submit">
          Next Question
        </button>
      </form>
    </div>
  )
}
NextQuestionForm = connect(mapStateToProps)(NextQuestionForm)

export default NextQuestionForm;