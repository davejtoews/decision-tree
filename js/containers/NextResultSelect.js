import React from 'react'
import { connect } from 'react-redux'
import { nextResult } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    answerId: ownProps.answerId,
    resultId: ownProps.resultId,
    results: state.results
  }
}

let NextResultSelect = ({ dispatch, answerId, resultId, results }) => {
  const value = (typeof resultId !== 'undefined') ? resultId : -1;
  return (
      <select
        onChange = {e => {
          dispatch(nextResult(answerId, parseInt(e.target.value)))
        }}
        value = {value}
      >
        <option value={-1}>[none]</option>
        {results.map((result, index) =>
          <option key={index} value={result.id}>{result.text}</option>
        )}
      </select>
  )
}
NextResultSelect = connect(mapStateToProps)(NextResultSelect)

export default NextResultSelect;