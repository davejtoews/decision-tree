import { connect } from 'react-redux';
import QuestionList from '../components/QuestionList';

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
}

const QuestionListContainer = connect(
  mapStateToProps
)(QuestionList)

export default QuestionListContainer