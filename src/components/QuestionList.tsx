import { useState } from "react";
import App from "../App";
import "./GameElements.css"

interface Question {
  id:number,
  triviaQuestion: string,
  answer: string,
  optionOne:string,
  optionTwo:string,
  optionThree:string,
  optionFour:string,
}

interface Responses {
  answer:string,
  verdict:boolean,
  alreadyAnswered:boolean,
}

const presentQuestion:Question[] = []

const questionData:Question[] = [
  {
    id: 1,
    triviaQuestion:
      "Disney's Animal Kingdom theme park opened in Florida in Which Year?",
    answer: "1998",
    optionOne: "1998",
    optionTwo: "1990",
    optionThree: "2004",
    optionFour: "2010",
  },
  {
    id: 2,
    triviaQuestion: "Nemo ends up in a Tank in which sort of office?",
    answer: "Dentist Office",
    optionOne: "Home Office",
    optionTwo: "Garden Office",
    optionThree: "Cellular Office",
    optionFour: "Team Office",
  },
  {
    id: 3,
    triviaQuestion:
      "What is the Name of Buzz and Woody's original owner in Toy Story?",
    answer: "Andy",
    optionOne: "David",
    optionTwo: "Andy",
    optionThree: "Marcus",
    optionFour: "Samuel",
  },
  {
    id: 4,
    triviaQuestion: "What is the Last Name of the Family in Mary Poppins?",
    answer: "Banks",
    optionOne: "Williams",
    optionTwo: "Banks",
    optionThree: "Smith",
    optionFour: "Wilson",
  },
  {
    id: 5,
    triviaQuestion:
      "Let it Go' is a song from which famous Disney Animated Movie?",
    answer: "Frozen",
    optionOne: "Toy Story",
    optionTwo: "The Lion King",
    optionThree: "Aladdin",
    optionFour: "Frozen",
  },
  {
    id: 6,
    triviaQuestion: "Gaston is the Villian in Which Disney Movie?",
    answer: "Beauty and The Beast",
    optionOne: "Beauty and The Beast",
    optionTwo: "Frozen",
    optionThree: "Tangled",
    optionFour: "Inside Out",
  },
  {
    id: 7,
    triviaQuestion:
      "What is used to tell the temperature of sugar when making candy?",
    answer: "Sugar Thermometer",
    optionOne: "Weather Thermometer",
    optionTwo: "Sugar Thermometer",
    optionThree: "Measuring Spoon",
    optionFour: "Measuring Cup",
  },
  {
    id: 8,
    triviaQuestion:
      "Which of the Following is not a member of the stone fruit family?",
    answer: "Strawberry",
    optionOne: "Cherry",
    optionTwo: "Plums",
    optionThree: "Strawberry",
    optionFour: "Peach",
  },
  {
    id: 9,
    triviaQuestion:
      "What is the main ingredient in the French Stew Bouillabaisse?",
    answer: "Seafood",
    optionOne: "Carbohydrates",
    optionTwo: "Broth",
    optionThree: "Onion",
    optionFour: "Potato",
  },
  {
    id: 10,
    triviaQuestion:
      "Which of the Following is Traditionally made with Buttermilk?",
    answer: "Ranch Dressing",
    optionOne: "Ranch Dressing",
    optionTwo: "Pancakes",
    optionThree: "Cheese",
    optionFour: "Blue Cheese Dressing",
  },
  {
    id: 11,
    triviaQuestion:
      "Ketchup is a sauce traditionally with a base of what ingredient?",
    answer: "Tomato",
    optionOne: "Celery",
    optionTwo: "Lemons",
    optionThree: "Ketchup",
    optionFour: "Onion",
  },
  {
    id: 12,
    triviaQuestion:
      "What is the Color of the arrow in the Go Square in Monopoly?",
    answer: "Red",
    optionOne: "Red",
    optionTwo: "Blue",
    optionThree: "Green",
    optionFour: "Yellow",
  },
  {
    id: 13,
    triviaQuestion: "In Chess, which piece can only move in an L-Shape",
    answer: "Knight",
    optionOne: "Rook",
    optionTwo: "Knight",
    optionThree: "Queen",
    optionFour: "Pawn",
  },
  {
    id: 14,
    triviaQuestion:
      "In a Game of Sorry!, How Many Pawns does each Player Have?",
    answer: "4",
    optionOne: "4",
    optionTwo: "6",
    optionThree: "2",
    optionFour: "1",
  },
  {
    id: 15,
    triviaQuestion:
      "In a Game of Uno, How many cards does each player start with?",
    answer: "7",
    optionOne: "4",
    optionTwo: "10",
    optionThree: "3",
    optionFour: "8",
  },
  {
    id: 16,
    triviaQuestion:
      "In a Game of Connect Four, How many Checkers does each Player Have?",
    answer: "21",
    optionOne: "12",
    optionTwo: "22",
    optionThree: "21",
    optionFour: "6",
  },
  {
    id: 17,
    triviaQuestion:
      "In a Game of Candy Land, What is the name of the final destination on the Game Board?",
    answer: "Candy Castle",
    optionOne: "Candy Land",
    optionTwo: "Sugar Rush",
    optionThree: "Gumdrop Kingdom",
    optionFour: "Candy Castle",
  },
  {
    id: 18,
    triviaQuestion: "What sort of musical instrument is a 'fiddle'",
    answer: "Violin",
    optionOne: "Guitar",
    optionTwo: "Flute",
    optionThree: "Chello",
    optionFour: "Violin",
  },
  {
    id: 19,
    triviaQuestion: "The Music Mamma Mia! is based on Whose Music?",
    answer: "Abba",
    optionOne: "Abba",
    optionTwo: "Maroon 5",
    optionThree: "The Platters",
    optionFour: "The Beach Boys",
  },
  {
    id: 20,
    triviaQuestion:
    "Which of these musical instruments is played by plucking or strumming?",
    answer: "Banjo",
    optionOne: "Violin",
    optionTwo: "Guitar",
    optionThree: "Banjo",
    optionFour: "Chello",
    },
  ];

  const savedResponses:Responses[] = []

  const QuestionList = () => {
    let savedAnswer:string;
    let correctAnswer = presentQuestion.find((item) => item.answer) ?? " ";
    
    const [question, setQuestion] = useState<number>(1);
    const [isDiabled, isSetDisabled] = useState<boolean>(true);
    const [optionsDisabled, isOptionsDisabled] = useState<boolean>(false);
    const [answerVisible, setAnswerVisible] = useState<boolean>(false);
    const [isVisible, isSetVisible] = useState<boolean>(false);
    const [buttonColor, setButtonColor] = useState<string>('darkgray');
    const [optionColors, setOptionColors] = useState<string>('blue');
    const [answeredMessage, showAnsweredMessage] = useState<boolean>(false);


    const nextQuestion = () => {
      setAnswerVisible(false);
      isSetVisible(false);
      setOptionColors('blue');
      isSetDisabled(true);
      setButtonColor('darkgray');
      isOptionsDisabled(false);
      setQuestion(question + 1);


    }
    const prevQuestion = () => {
      setQuestion(question - 1);
      let temp;
      if(temp) {
        setOptionColors('darkgray');
        showAnsweredMessage(true);
        isOptionsDisabled(true);

      }
    }
    const handleClick = (button:React.MouseEvent<HTMLButtonElement>) => {
        isSetVisible(true);
        isOptionsDisabled(true);
        setOptionColors('darkgray');
        const element = button.currentTarget;
        element.style.backgroundColor = 'purple';
        savedAnswer = button.currentTarget.innerText;
    }

    if(question < 1) {
      setQuestion(1);      
    } else if(question > 20) {
      setQuestion(20);
    }
    if(question >= 1 && question <= 20) {
      presentQuestion.length = 0;
      const dataHandler = questionData.find((index) => index.id === question)
      presentQuestion.push(dataHandler!)
      
    }
    const showAnswer = () => {
    setAnswerVisible(true);
    isSetDisabled(false);
    setButtonColor('#f45b1e');
     if(correctAnswer === savedAnswer) {
       savedResponses.push({answer:savedAnswer, verdict: true, alreadyAnswered:true})
     } else {
       savedResponses.push({answer:savedAnswer, verdict: false, alreadyAnswered:true})
     }
    }
    return (
      <>
      <div>
        {presentQuestion.map((item) => (
          <div key={item.id}>
            <h1>Question: {question} of 20</h1>
            <h1>{item.triviaQuestion}</h1>
            <button className="options" style = {{backgroundColor:optionColors}} disabled = {optionsDisabled} onClick={handleClick}>{item.optionTwo}</button>
            <button className="options" style = {{backgroundColor:optionColors}} disabled = {optionsDisabled} onClick={handleClick}>{item.optionOne}</button>
            <button className="options" style = {{backgroundColor:optionColors}} disabled = {optionsDisabled} onClick={handleClick}>{item.optionThree}</button>
            <button className="options" style = {{backgroundColor:optionColors}} disabled = {optionsDisabled} onClick={handleClick}>{item.optionFour}</button>
            {answerVisible && <h1> Correct Answer:{item.answer}</h1>}
            {answeredMessage && <h1>Question Already Answered</h1>}
          </div>
        ))}
            <div>
                <button className="Next" onClick={prevQuestion}>Prev</button>
                {isVisible && <button className="Check" onClick = {showAnswer} >Check Answer</button>}
                <button className="Prev" style={{backgroundColor: buttonColor}} disabled = {isDiabled} onClick={nextQuestion}>Next</button>
            </div>
        </div>
    </>
  )
}

export default QuestionList