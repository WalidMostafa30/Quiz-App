import React, { useState } from "react";
import "./Quiz.css";
import Bullets from "../Bullets/Bullets";
import Timer from "../Timer/Timer";
import { htmlQuestions } from "../../data/Data";
import Modal from "../Modal/Modal";

const Quiz = () => {
  const [QuestionNumber, setQuestionNumber] = useState(0);
  const [correctAnswer, setcorrectAnswer] = useState(0);
  const [Answer, setAnswer] = useState(-1);
  const [showModal, setshowModal] = useState(false);

  const nextBtn = () => {
    if (
      htmlQuestions[QuestionNumber].correctAnswer ===
      htmlQuestions[QuestionNumber].answers[Answer]
    ) {
      setcorrectAnswer(correctAnswer + 1);
    }
    if (QuestionNumber === htmlQuestions.length - 1) {
      setshowModal(true);
    } else {
      setQuestionNumber(QuestionNumber + 1);
      setAnswer(-1);
    }
    console.log(correctAnswer);
  };

  const AnswerClick = (num) => {
    setAnswer(num);
  };

  return (
    <>
      <section className="Quiz">
        <h3 className="Quiz__title">
          {htmlQuestions[QuestionNumber].question}
        </h3>
        <div className="Quiz__answers">
          {htmlQuestions[QuestionNumber].answers.map((qus, index) => {
            return (
              <div
                key={index}
                onClick={() => AnswerClick(index)}
                className={
                  Answer === index ? "Quiz__answer active" : "Quiz__answer"
                }
              >
                <span></span>
                <p>{qus}</p>
              </div>
            );
          })}
        </div>

        <div className="Quiz__footer">
          <Bullets
            QuestionNumber={QuestionNumber}
            setQuestionNumber={setQuestionNumber}
          />
          <Timer setshowModal={setshowModal} />
        </div>

        <button className="Quiz__next-btn" onClick={nextBtn}>
          {QuestionNumber === htmlQuestions.length - 1 ? "Finish Quiz" : "Next"}
        </button>
      </section>
      {showModal && <Modal correctAnswer={correctAnswer} />}
    </>
  );
};

export default Quiz;
