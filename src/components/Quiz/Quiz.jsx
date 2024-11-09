/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useState } from "react";
import Bullets from "../Bullets/Bullets";
import Timer from "../Timer/Timer";
import { getScore } from "../../store/questionSlice";
import "./Quiz.css";

const Quiz = ({ setFinishQuiz, questions }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [seconds, setSeconds] = useState(10);
  const dispatch = useDispatch();
  const currentQuestion = questions && questions[questionNumber];

  const handleNextBtn = () => {
    if (questionNumber === questions.length - 1) {
      dispatch(getScore(score));
      setFinishQuiz(true);
    } else {
      setQuestionNumber((prev) => prev + 1);
      setSelectedAnswer(null);
    }
    setDisabled(false);
    setSeconds(10);
  };

  const answerSelect = (index) => {
    setSelectedAnswer(index);
    setDisabled(true);
    setSeconds(0);

    if (currentQuestion.answers[index] === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div className="Quiz">
      {currentQuestion ? (
        <div>
          <h1 className="Quiz__title">
            <span>{questionNumber + 1} -</span> {currentQuestion.question}
          </h1>

          <div
            style={{
              pointerEvents: disabled ? "none" : "auto",
            }}
          >
            {currentQuestion.answers.map((answer, index) => (
              <p
                key={index}
                className={`Quiz__answer ${
                  selectedAnswer === index &&
                  currentQuestion.answers[index] !==
                    currentQuestion.correctAnswer &&
                  "wrong"
                }
                ${
                  disabled &&
                  currentQuestion.answers[index] ===
                    currentQuestion.correctAnswer &&
                  "correct"
                }
                `}
                onClick={() => answerSelect(index)}
              >
                {answer}
              </p>
            ))}
          </div>

          <div className="Quiz__actions">
            <Bullets data={questions} questionNumber={questionNumber} />
            <Timer
              setDisabled={setDisabled}
              seconds={seconds}
              setSeconds={setSeconds}
            />
          </div>

          <div className="Quiz__btn">
            <span onClick={handleNextBtn}>
              {questionNumber === questions.length - 1 ? "Finish Quiz" : "Next"}
            </span>
          </div>
        </div>
      ) : (
        <h1>No questions available.</h1>
      )}
    </div>
  );
};

export default Quiz;
