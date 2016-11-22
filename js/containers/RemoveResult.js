import React from 'react'
import { connect } from 'react-redux'
import { removeResult } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.id
  }
}

let RemoveResult = ({ dispatch, id }) => {
  return (
    <form onSubmit={e => {
      e.preventDefault()
      dispatch(removeResult(id))
    }}>
      <div className="action-wrapper">
        <button className="remove-button" type="submit">
          Remove Result
        </button>
      </div>
    </form>
  )
}
RemoveResult = connect(mapStateToProps)(RemoveResult)

export default RemoveResult;