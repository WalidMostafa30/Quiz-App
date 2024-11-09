/* eslint-disable react/prop-types */
import "./Bullets.css";

function Bullets({ data, questionNumber }) {
  return (
    <div className="Quiz__bullets">
      {data.map((_, index) => {
        return (
          <span key={index} className={questionNumber >= index ? "active" : ""}>
            {index + 1}
          </span>
        );
      })}
    </div>
  );
}

export default Bullets;
