import React from 'react'
import { connect } from 'react-redux'
import { addResult } from '../actions'

let AddResult = ({ dispatch }) => {
  let input
  return (
    <form className="add-result" onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(addResult(input.value))
      input.value = ''
    }}>
      <input ref={node => {
        input = node
      }} />
      <div className="action-wrapper">
        <button type="submit">
          Add Result
        </button>
      </div>
    </form>
  )
}
AddResult = connect()(AddResult)

export default AddResult;