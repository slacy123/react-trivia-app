import React from "react";
import { useState } from "react";
import "./GameElements.css";

const [currentIndex, setcurrentIndex] = useState(2);
const [currentScore, setcurrentScore] = useState(0);

interface Item {
  triviaQuestions: {
    id: number;
    triviaQuestion: string;
    answer: string;
    optionOne: string;
    optionTwo: string;
    optionThree: string;
    optionFour: string;
  }[];
}

const prevQuestion = (props: Item) => {
  setcurrentIndex(currentIndex - 1);
  return (
    <>
      {props.triviaQuestions.map((question, index) => {
        return (
          <div key={index}>
            <h1>
              Question{question.id}:{question.triviaQuestion}
            </h1>
            <button className="options">{question.optionOne}</button>
            <button className="options">{question.optionTwo}</button>
            <div>
              <button className="options">{question.optionThree}</button>
              <button className="options">{question.optionFour}</button>
            </div>
            <p>Answer:{question.answer}</p>
          </div>
        );
      })}
      ;
    </>
  );
};

const nextQuestion = (props: Item) => {
  setcurrentIndex(currentIndex + 1);
  return (
    <>
      {props.triviaQuestions.map((triviaQuestions, index) => {
        return (
          <div key={index}>
            <h1>Question:{triviaQuestions.triviaQuestion}</h1>
            <button className="options">{triviaQuestions.optionOne}</button>
            <button className="options">{triviaQuestions.optionTwo}</button>
            <div>
              <button className="options">{triviaQuestions.optionThree}</button>
              <button className="options">{triviaQuestions.optionFour}</button>
            </div>
          </div>
        );
      })}
      ;<h2>Answer:</h2>
    </>
  );
};

export default function GameElements() {
  return <>{nextQuestion}</>;
}
