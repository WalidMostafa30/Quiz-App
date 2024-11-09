import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="Home">
      <div className="Home__container">
        <h1 className="Home__title">Chose your Quiz</h1>

        <div className="Home__subjects">
          <Link to={`/quiz/html`}>HTML</Link>
          <Link to={`/quiz/css`}>CSS</Link>
          <Link to={`/quiz/js`}>JS</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
