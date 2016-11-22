import React from 'react'
import { connect } from 'react-redux'
import { addAnswer } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    questionId: ownProps.questionId
  }
}

let AddAnswer = ({ dispatch, questionId }) => {
  let path;
  let text;
  return (
    <form className="add-answer" onSubmit={e => {
      e.preventDefault()
      if (!path.value.trim() || !text.value.trim()) {
        return
      }
      dispatch(addAnswer(questionId, text.value, path.value))
      path.value = '';
      text.value = '';
    }}>
      <input ref={node => {
        text = node
      }}/>
      <select ref={node => {
        path = node
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