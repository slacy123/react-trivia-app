import { useState} from "react";
import App from "../App";
import "./GameElements.css"
import {questionData, Question} from "./questions"

interface Responses {
  questionID:number,
  answer:string,
  verdict:string,
  defaultAnswer:string,
}


const presentQuestion:Question[] = []

export const savedResponses:Responses[] = []

const QuestionList = () => {
    let savedAnswer:string;
    let correctAnswer:string;
    const [question, setQuestion] = useState<number>(1);
    const [isDiabled, isSetDisabled] = useState<boolean>(true);
    const [optionsDisabled, isOptionsDisabled] = useState<boolean>(false);
    const [answerVisible, setAnswerVisible] = useState<boolean>(false);
    const [isanswerDisabled, setanswerDisabled] = useState<boolean>(true);
    const [buttonColor, setButtonColor] = useState<string>('darkgray');
    const [optionColors, setOptionColors] = useState<string>('blue');
    const [currentScore, setCurrentScore] = useState<number>(0);
    const [showResults, setshowResults] = useState<boolean>(false);
    const [resultButton, setresultButton] = useState<boolean>(false);
    const [nextVisible, setnextVisible] = useState<boolean>(true);

    
    const Results = () => {
      setshowResults(true);
    }

    const nextQuestion = () => {
      setAnswerVisible(false);
      setOptionColors('blue');
      isSetDisabled(true);
      setButtonColor('darkgray');
      isOptionsDisabled(false);
      setanswerDisabled(true);
      setQuestion(question + 1);
      if (question === 19) {
        setnextVisible(false);
        setresultButton(true);
      }

    }
    const prevQuestion = () => {
      setQuestion(question - 1);
    }
    const handleClick = (button:React.MouseEvent<HTMLButtonElement>) => {
      const element = button.currentTarget;
      element.style.backgroundColor = 'purple';
      savedAnswer = button.currentTarget.innerText;
      if(savedAnswer === correctAnswer) {
        savedResponses.push({answer:savedAnswer, verdict: "Correct", questionID:question, defaultAnswer:correctAnswer})
        setCurrentScore(currentScore + 10);
      } else {
        savedResponses.push({answer:savedAnswer, verdict: "Incorrect", questionID:question, defaultAnswer:correctAnswer})
        setCurrentScore(currentScore - 10);
      }
      isOptionsDisabled(true);
      setanswerDisabled(false);
    }
    if(question < 1) {
      setQuestion(1);      
    }
    if(question >= 1 && question <= 20) {
      presentQuestion.length = 0;
      const dataHandler = questionData.find((index) => index.id === question);
      presentQuestion.push(dataHandler!);
      correctAnswer = presentQuestion[0].answer ?? "";
    }
    const showAnswer = () => {
    setAnswerVisible(true);
    isSetDisabled(false);
    setOptionColors('darkgray');
    setButtonColor('#f45b1e');
    }
    return (
      <>
      {showResults ? (
        <>
        <h1>Congrats on Completing the Quiz, Here are your Results!</h1>
        {savedResponses.map((item, index) => (
            <div key={index}>
                <h1>----------------------------</h1>
                <h2>Question # {item.questionID}</h2>
                <h2>Your Answer: {item.answer}</h2>
                <h2>Correct Answer: {item.defaultAnswer}</h2>
                <h2>Result: {item.verdict}</h2>
                <h1>----------------------------</h1>
            </div>
        ))}
        </>
      ) : (
      <>
      <div>
        <div className= "uiHeader" >
          <h1>Question: {question} of 20</h1>
          <h1>Score: {currentScore}</h1>
      </div>
        {presentQuestion.map((item) => (
          <div key={item.id}>
            <h1>{item.triviaQuestion}</h1>
            <button className="options" style = {{backgroundColor:optionColors}} disabled = {optionsDisabled} onClick={handleClick}>{item.optionOne}</button>
            <button className="options" style = {{backgroundColor:optionColors}} disabled = {optionsDisabled} onClick={handleClick}>{item.optionTwo}</button>
            <button className="options" style = {{backgroundColor:optionColors}} disabled = {optionsDisabled} onClick={handleClick}>{item.optionThree}</button>
            <button className="options" style = {{backgroundColor:optionColors}} disabled = {optionsDisabled} onClick={handleClick}>{item.optionFour}</button>
            {answerVisible && <h1> Correct Answer:{item.answer}</h1>}
          </div>
        ))}
            <div>
                <button className="Next" onClick={prevQuestion}>Prev</button>
                <button className="Check" onClick = {showAnswer} disabled={isanswerDisabled} >Check Answer</button>
                {nextVisible && <button className="Prev" style={{backgroundColor: buttonColor}} disabled = {isDiabled} onClick={nextQuestion}>Next</button>}
                {resultButton && <button className="Prev" style={{backgroundColor: buttonColor}} disabled = {isDiabled} onClick={Results}>Results</button>}
            </div>
        </div>

        </>
      )}
      </>
  )
}
export default QuestionList