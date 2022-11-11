import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";
import ghicon from '../../src/ghicon.png';

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
   <> 
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You have completed the quiz!</div>
            <div>
              You've got {quizState.correctAnswersCount} of &nbsp;
              {quizState.questions.length} right.
            </div>
          </div>
          <div
            onClick={() => dispatch({ type: "RESTART" })}
            className="next-button"
          >
            Restart
          </div>
          <div className="footer-container">
            <a href="https://github.com/AlanTyping" target='blank'>
              <img id="icon" src={ghicon} />
            </a>
            Github Repository
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div className="general-container">
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
        </div>
      )}
    </div>
  </>
  );
};

export default Quiz;