import React from "react";
import "./Bullets.css";
import { htmlQuestions } from "../../data/Data";

function Bullets({ QuestionNumber, setQuestionNumber }) {

  return (
    <div className="Quiz__bullets">
      {htmlQuestions.map((e, index) => {
        return (
          <span
            key={index}
            className={QuestionNumber === index ? "active" : ""}
          >
            {index + 1}
          </span>
        );
      })}
    </div>
  );
}

export default Bullets;
