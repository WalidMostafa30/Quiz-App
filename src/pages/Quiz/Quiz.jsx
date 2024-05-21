import "./Quiz.css";
import { Container } from "react-bootstrap";
import Bullets from "../../components/Bullets/Bullets";
import Timer from "../../components/Timer/Timer";
import { data } from "../../assets/Data.js";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

const Quiz = () => {
  const [QuestionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [Answer, setAnswer] = useState(-1);
  const [showModal, setshowModal] = useState(false);

  const nextBtnHandle = () => {
    if (
      data[QuestionNumber].correctAnswer ===
      data[QuestionNumber].answers[Answer]
    ) {
      setScore((prev) => prev + 1);
    }

    if (QuestionNumber === data.length - 1) {
      setshowModal(true);
    } else {
      setQuestionNumber(QuestionNumber + 1);
      setAnswer(-1);
    }
    console.log(score);
  };

  const answerSelect = (num) => {
    setAnswer(num);
  };

  return (
    <section className="Quiz">
      <Container className="Quiz__container">
        <h2 className="Quiz__question">
          {QuestionNumber + 1 + ". " + data[QuestionNumber].question}
        </h2>

        <div className="Quiz__answers">
          {data[QuestionNumber].answers.map((ans, index) => {
            return (
              <p
                key={index}
                onClick={() => answerSelect(index)}
                className={
                  Answer === index ? "Quiz__answer active" : "Quiz__answer"
                }
              >
                {ans}
              </p>
            );
          })}
        </div>

        <div className="Quiz__footer">
          <Bullets data={data} QuestionNumber={QuestionNumber} />
          <Timer setshowModal={setshowModal} />
        </div>

        <button className="Quiz__btn" onClick={nextBtnHandle}>
          {QuestionNumber === data.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </Container>
      {showModal && <Modal score={score} data={data} />}
    </section>
  );
};

export default Quiz;
