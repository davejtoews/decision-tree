import React from 'react';
import { connect } from 'react-redux';
import { nextResult } from '../actions';
import Select from 'react-select';

const mapStateToProps = (state, ownProps) => {
  return {
    answerId: ownProps.answerId,
    resultIds: ownProps.resultIds,
    results: state.results
  }
}

let NextResultSelect = ({ dispatch, answerId, resultIds, results }) => {
  const value = (typeof resultId !== 'undefined') ? resultId : [];
  const options = results.map(function(result){
    return {value: result.id, label: result.text}
  })
  return (
    <Select 
      options={options}
      multi={true}
      value={[{value: 0, label: "rrrr"}]}
      onChange = {val => {
        console.log(val)
        dispatch(nextResult(answerId, val.map(function(result){
          return result.value;
        })))
      }}
    />
  )
}
NextResultSelect = connect(mapStateToProps)(NextResultSelect)

export default NextResultSelect;