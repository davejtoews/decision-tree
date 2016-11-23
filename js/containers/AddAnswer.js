import React from 'react';
import { connect } from 'react-redux';
import { addAnswer } from '../actions';
import { changeAnswerType } from '../actions';
import Select from 'react-select';

const mapStateToProps = (state, ownProps) => {
  return {
    questionId: ownProps.questionId,
    answerType: ownProps.answerType
  }
}

let AddAnswer = ({ dispatch, questionId, answerType }) => {
  let text;
  let options = [
    {value: 'question', label: 'Question'},
    {value: 'result', label: 'Result'}
  ];
  return (
    <form className="add-answer" onSubmit={e => {
      e.preventDefault()
      if (!answerType.value.trim() || !text.value.trim()) {
        return
      }
      dispatch(addAnswer(questionId, text.value, answerType.value))
      text.value = '';
    }}>
      <input ref={node => {
        text = node
      }}/>
      <Select 
        options={options}
        value={answerType}
        onChange = {val => {
          dispatch(changeAnswerType(questionId, val));
        }}
      />
      <div className="action-wrapper">
        <button type="submit">
          Add Answer
        </button>
      </div>
    </form>
  )
}
AddAnswer = connect(mapStateToProps)(AddAnswer)

export default AddAnswer;