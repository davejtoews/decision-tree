import React from 'react'
import { connect } from 'react-redux'
import { removeQuestion } from '../actions'
import { removeAnswer } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.id,
    answers: ownProps.answers
  }
}

let RemoveQuestion = ({ dispatch, id, answers }) => {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      dispatch(removeQuestion(id));
      answers.forEach(function(answer){
        dispatch(removeAnswer(answer));
      });
    }}>
      <div className="action-wrapper">
        <button className="remove-button" type="submit">
          Remove Question
        </button>
      </div>
    </form>
  )
}
RemoveQuestion = connect(mapStateToProps)(RemoveQuestion)

export default RemoveQuestion;