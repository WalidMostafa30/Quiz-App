/* eslint-disable react/prop-types */
import "./Bullets.css";

function Bullets({ data, QuestionNumber }) {
  return (
    <div className="Quiz__bullets">
      {data.map((e, index) => {
        return (
          <span key={index} className={QuestionNumber >= index ? "active" : ""}>
            {index + 1}
          </span>
        );
      })}
    </div>
  );
}

export default Bullets;
