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
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(addAnswer(questionId, input.value))
      input.value = ''
    }}>
      <select ref={node => {
        input = node
      }}>
        <option value=''>[Select]</option>
        <option value='question'>Question</option>
        <option value='result'>Result</option>
      </select>
      <button type="submit">
        Add Answer
      </button>
    </form>
  )
}
AddAnswer = connect(mapStateToProps)(AddAnswer)

export default AddAnswer;