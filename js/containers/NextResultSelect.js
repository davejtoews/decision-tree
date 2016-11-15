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
  const selectedResults = (typeof resultIds !== 'undefined') ? resultIds : [];
  const value = selectedResults.map(function(selectedResult) {
    const resultValue = results.filter(function(result){
      return selectedResult === result.id;
    })
    return {value: resultValue[0].id, label:resultValue[0].text}; 
  });
  console.log(value);
  const options = results.map(function(result){
    return {value: result.id, label: result.text}
  })
  return (
    <Select 
      options={options}
      multi={true}
      value={value}
      onChange = {val => {
        dispatch(nextResult(answerId, val.map(function(result){
          return result.value;
        })))
      }}
    />
  )
}
NextResultSelect = connect(mapStateToProps)(NextResultSelect)

export default NextResultSelect;