import { useState } from "react";
import App from "../App";
import "./GameElements.css"
import {questionData, Question} from "./questions"

interface Responses {
  answer:string,
  verdict:boolean,
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
    const [isanswerDisabled, setanswerDisabled] = useState<boolean>(false);
    const [buttonColor, setButtonColor] = useState<string>('darkgray');
    const [optionColors, setOptionColors] = useState<string>('blue');
    const [currentScore, setCurrentScore] = useState<number>(0);

      //const answeredData = savedResponses.find((index) => index.alreadyAnswered === question);
      //console.log(answeredData)
      //if(answeredData?.alreadyAnswered != null) {
       //setOptionColors('darkgray');
       //showAnsweredMessage(true);
       //isOptionsDisabled(true);
       //isSetDisabled(false);
       //setButtonColor('#f45b1e')
    //}

    const nextQuestion = () => {
      setAnswerVisible(false);
      setOptionColors('blue');
      isSetDisabled(true);
      setButtonColor('darkgray');
      isOptionsDisabled(false);
      setQuestion(question + 1);


    }
    const prevQuestion = () => {
      setQuestion(question - 1);
    }
    const handleClick = (button:React.MouseEvent<HTMLButtonElement>) => {
      const element = button.currentTarget;
      element.style.backgroundColor = 'purple';
      savedAnswer = button.currentTarget.innerText;
      console.log(savedAnswer);
      if(savedAnswer === correctAnswer) {
        savedResponses.push({answer:savedAnswer, verdict: true,})
        setCurrentScore(currentScore + 10);
      } else {
        savedResponses.push({answer:savedAnswer, verdict: false,})
        setCurrentScore(currentScore - 10);
      }
      isOptionsDisabled(true);
      setanswerDisabled(false);
    }
    if(question < 1) {
      setQuestion(1);      
    } else if(question > 20) {
      setQuestion(20);
    }
    if(question >= 1 && question <= 20) {
      presentQuestion.length = 0;
      const dataHandler = questionData.find((index) => index.id === question)
      presentQuestion.push(dataHandler!);
      correctAnswer = presentQuestion[0].answer ?? ""
    }
    const showAnswer = () => {
    setAnswerVisible(true);
    isSetDisabled(false);
    setOptionColors('darkgray');
    setButtonColor('#f45b1e');
    }
    return (
      <>
      <div>
        <div className= "uiHeader" >
          <h1>Question: {question} of 20</h1>
          <h1>Score: {currentScore}</h1>
        </div>
        {presentQuestion.map((item) => (
          <div key={item.id}>
            <h1>{item.triviaQuestion}</h1>
            <button className="options" style = {{backgroundColor:optionColors}} disabled = {optionsDisabled} onClick={handleClick}>{item.optionTwo}</button>
            <button className="options" style = {{backgroundColor:optionColors}} disabled = {optionsDisabled} onClick={handleClick}>{item.optionOne}</button>
            <button className="options" style = {{backgroundColor:optionColors}} disabled = {optionsDisabled} onClick={handleClick}>{item.optionThree}</button>
            <button className="options" style = {{backgroundColor:optionColors}} disabled = {optionsDisabled} onClick={handleClick}>{item.optionFour}</button>
            {answerVisible && <h1> Correct Answer:{item.answer}</h1>}
          </div>
        ))}
            <div>
                <button className="Next" onClick={prevQuestion}>Prev</button>
                <button className="Check" onClick = {showAnswer} disabled={isanswerDisabled} >Check Answer</button>
                <button className="Prev" style={{backgroundColor: buttonColor}} disabled = {isDiabled} onClick={nextQuestion}>Next</button>
            </div>
        </div>
    </>
  )
}

export default QuestionList