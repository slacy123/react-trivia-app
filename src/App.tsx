import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { useState } from "react";

  const [toggleGame, setToggleGame] = useState(false);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [currentScore, setcurrentScore] = useState(0);


export default function App() {

  const handleClick = () => {
    setToggleGame(true);
  };
  
  return (
    <>
      {toggleGame ? (
        <>
          
        </>
      ) : (
        <>
          <div>
            <h1>Welcome to React Trivia!!</h1>
            <h1>Press The Start Button to Begin</h1>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Click Me to Start
            </button>
          </div>
        </>
      )}
    </>
  );
}


