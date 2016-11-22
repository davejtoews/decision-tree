import React from 'react'
import { connect } from 'react-redux'
import { addQuestion } from '../actions'

let AddQuestion = ({ dispatch }) => {
  let input
  return (
    <form className="add-question" onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(addQuestion(input.value))
      input.value = ''
    }}>
      <input ref={node => {
        input = node
      }} />
      <div className="action-wrapper">
        <button type="submit">
          Add Question
        </button>
      </div>
    </form>
  )
}
AddQuestion = connect()(AddQuestion)

export default AddQuestion;