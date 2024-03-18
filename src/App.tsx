import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import QuestionList from "./components/gameQuestions";
import Game from "./components/Game";
import GameElements from "./components/GameElements";
import { useState } from "react";

function App() {
  const [toggleGame, setToggleGame] = useState(false);
  return (
    <>
      {toggleGame ? (
        <div>
          <Game />
          <button
            type="button"
            onClick={() => setToggleGame(!setToggleGame)}
            className="btn btn-primary"
          >
            Click Me to Start
          </button>
        </div>
      ) : (
        <div>
          <GameElements />
        </div>
      )}
    </>
  );
}
export default App;
