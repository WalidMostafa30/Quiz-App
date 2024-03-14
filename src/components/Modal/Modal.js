import React from "react";
import "./Modal.css";
import { htmlQuestions } from "../../data/Data";

function Modal({ correctAnswer }) {
  return (
    <section className="Modal">
      <h3>you answered</h3>
      <div>
        <span>{correctAnswer}</span> / <span>{htmlQuestions.length}</span>
      </div>
    </section>
  );
}

export default Modal;
