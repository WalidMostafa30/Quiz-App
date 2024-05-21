/* eslint-disable react/prop-types */
import "./Modal.css";

const Modal = ({ score, data }) => {
  return (
    <section className="Modal">
      <h3>you answered</h3>
      <div>
        <span>{score}</span> / <span>{data.length}</span>
      </div>
    </section>
  );
};

export default Modal;
