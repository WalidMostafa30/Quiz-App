import React from "react";
import "./Home.css";
import Quiz from "../../components/Quiz/Quiz";

const Home = () => {
  return (
    <section className="Home">
      <div className="Home__container container">
        <Quiz />
      </div>
    </section>
  );
};

export default Home;
