import React from 'react'
import { connect } from 'react-redux'
import { removeAnswer } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.id
  }
}

let RemoveAnswer = ({ dispatch, id }) => {
  let path;
  let text;
  return (
    <form onSubmit={e => {
      e.preventDefault()
      dispatch(removeAnswer(id))
    }}>
      <div className="action-wrapper">
        <button className="remove-button" type="submit">
          Remove Answer
        </button>
      </div>
    </form>
  )
}
RemoveAnswer = connect(mapStateToProps)(RemoveAnswer)

export default RemoveAnswer;