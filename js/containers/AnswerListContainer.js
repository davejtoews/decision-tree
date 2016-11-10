import { connect } from 'react-redux';
import AnswerList from '../components/AnswerList';

const mapStateToProps = (state, ownProps) => {
	const question = state.questions.filter(function(question) {
		return question.id === ownProps.questionId;
	});
	const answers = question[0].answers.map(function (answerId) {
		const answerById = state.answers.filter(function(answer){
			return answer.id === answerId;
		});
		return answerById[0]; 
	})
  return {
    answers: answers,
  }
}

const AnswerListContainer = connect(
  mapStateToProps
)(AnswerList)

export default AnswerListContainer