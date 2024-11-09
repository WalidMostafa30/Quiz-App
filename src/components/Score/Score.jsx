/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Score.css";

const Score = ({ score, questions }) => {
  return (
    <div className="Score">
      <h1 className="Score__title">Your Score</h1>

      <span className="Score__score">
        <span>{score}</span> / {questions.length}
      </span>

      <Link to={"/"} className="Score__btn">
        Back to main page
      </Link>
    </div>
  );
};

export default Score;
