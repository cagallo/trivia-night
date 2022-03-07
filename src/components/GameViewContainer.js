import React from 'react'
import QuestionCard from './QuestionCard'
import PropTypes from 'prop-types'
import '../styles/GameViewContainer.css'

const GameViewContainer = (props) => {
	const index = props.index
	const question = props.currentQuestion  
	return (
		<section className='game-view-container'>
			<QuestionCard
				key={index}
				index={index}
				totalQuestions={props.totalQuestions}
				currentQuestion={question}
				shuffledAnswers={props.shuffledAnswers}
				submitBtnDisabled={props.submitBtnDisabled}
				setAnswer={props.setAnswer}
				handleNextQuestion={props.handleNextQuestion}
			/>
		</section>
	)

}

export default GameViewContainer

GameViewContainer.propTypes = {
	index: PropTypes.number,
	currentQuestion: PropTypes.object,
	totalQuestions: PropTypes.number,
	shuffledAnswers: PropTypes.array,
	submitBtnDisabled: PropTypes.bool,
	setAnswer: PropTypes.func,
	handleNextQuestion: PropTypes.func
}
