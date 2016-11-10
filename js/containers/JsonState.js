import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
}

let JsonState = ({ dispatch, state }) => {
  return (
      <textarea rows="50" cols="100" readOnly={true} value={JSON.stringify(state, null, 2)} />
  )
}

JsonState = connect(mapStateToProps)(JsonState)

export default JsonState;