import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Answer = ({
    answerText,
    index,
    onSelectAnswer,
    currentAnswer,
    correctAnswer,
  }) => {
    const [quizState, dispatch] = useContext(QuizContext);
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    const isWrongAnswer =
      currentAnswer === answerText && currentAnswer !== correctAnswer;
    const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
    const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
    const disabledClass = currentAnswer ? "disabled-answer" : "";
    return (
      <div
        className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
        onClick={/*() => onSelectAnswer(answerText)*//*() => dispatch({ type: "NEXT_QUESTION" })*/function() {
          onSelectAnswer(answerText)
          setTimeout(function() {
            console.log("Buenas")
            dispatch({ type: "NEXT_QUESTION" })
          }, 1000);
        }}
      >
        <div className="answer-text">{answerText}</div>
      </div>
    );
  };
  
  export default Answer;