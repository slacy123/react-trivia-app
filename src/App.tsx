import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./components/GameElements.css"
import { useState } from "react";
import QuestionList from "./components/QuestionList";
import Welcome from "./components/Welcome";


export default function App() {
  const [toggleGame, setToggleGame] = useState(false);

  const handleClick = () => {
    setToggleGame(true);
  };
  return (
    <>
      {toggleGame ? (
        <>
          <QuestionList />
        </>
      ) : (
        <>
          <h1>Welcome to React Trivia!!</h1>
          <h1>Press The Start Button to Begin</h1>
          <button type="button" className="btn btn-primary" onClick = {handleClick}>
            Click Me to Start
          </button>
        </>
      )}
    </>
  );
  
}


