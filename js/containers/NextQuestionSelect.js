import React from 'react';
import { connect } from 'react-redux';
import { nextQuestion } from '../actions';
import Select from 'react-select';

const mapStateToProps = (state, ownProps) => {
  return {
    answerId: ownProps.answerId,
    questionId: ownProps.questionId,
    questions: state.questions
  }
}

let NextQuestionSelect = ({ dispatch, answerId, questionId, questions }) => {
  const value = (typeof questionId !== 'undefined') ? questionId : -1;
  let options = questions.map((question, index) => {
    return { value: question.id, label: question.text} ;
  });
  return (
    <Select 
      options={options}
      value={value}
      onChange = {val => {
        dispatch(nextQuestion(answerId, parseInt(val.value)))
      }}
    />   
  )
}
NextQuestionSelect = connect(mapStateToProps)(NextQuestionSelect)

export default NextQuestionSelect;