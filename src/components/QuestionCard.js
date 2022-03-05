import React from "react";
import '../styles/QuestionCard.css';

const QuestionCard = ({question, allQuestions, disabled, shuffledAnswers, correctAnswer, id, checkAnswer, handleNextQuestion, finishGame, index, total, score }) => {
  console.log('questioncard')
  const possibleAnswers = [...shuffledAnswers, correctAnswer];
    console.log(disabled)
  
  return (
    <section className="single-question-card" id={id}>
      <span>{`Question ${index + 1} of ${total}`}</span>
      <h3 className="current-question">{question}</h3>
      <div className="possible-answers-container">
        <div className="top-row-answers">
          <div className="top-left">
          <input type="radio" id="possibleAnswer1" name="answer-button" value="possibleAnswer1" onClick={() => {
            console.log('clicked')
            checkAnswer(possibleAnswers[0], shuffledAnswers);
          }}></input>
          <label>{possibleAnswers[0]}</label>
          </div>
          <div className="top-right">
          <input type="radio" id="possibleAnswer2" name="answer-button" value="possibleAnswer2" onClick={() => {
            checkAnswer(possibleAnswers[1], shuffledAnswers);
          }}></input>
          <label>{possibleAnswers[1]}</label>
          </div>
        </div>
        <div className="bottom-row-answers">
         <div className="bottom-left">
          <input type="radio" id="possibleAnswer3" name="answer-button" value="possibleAnswer3" onClick={() => {
            checkAnswer(possibleAnswers[2], shuffledAnswers);
          }}></input>
          <label className="bottom-left">{possibleAnswers[2]}</label>
          </div>
          <div className="bottom-right">
          <input type="radio" id="possibleAnswer4" name="answer-button" value="possibleAnswer4" onClick={() => {
            checkAnswer(possibleAnswers[3], shuffledAnswers);
          }}></input>
          <label>{possibleAnswers[3]}</label>
          </div>
        </div>
      </div>
      <div className="answer-button-container">
      <button disabled={disabled} className="submit-answer-button" onClick={() => {
          console.log('clicked')
          //handleNextQuestion(correctAnswer)
      }}>Submit</button>
      </div>
    </section>
  )
  
}

export default QuestionCard;