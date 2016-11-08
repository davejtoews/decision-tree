import React from 'react'
import { connect } from 'react-redux'
import { addAnswer } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    questionId: ownProps.questionId
  }
}

let AddAnswer = ({ dispatch, questionId }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addAnswer(questionId, input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Answer
        </button>
      </form>
    </div>
  )
}
AddAnswer = connect(mapStateToProps)(AddAnswer)

export default AddAnswer;