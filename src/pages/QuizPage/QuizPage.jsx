import { useParams } from "react-router-dom";
import "./QuizPage.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../store/questionSlice";
import Quiz from "../../components/Quiz/Quiz";
import Score from "../../components/Score/Score";

const QuizPage = () => {
  const { score, questions } = useSelector((state) => state.question);
  const { category } = useParams();
  const dispatch = useDispatch();
  const [finishQuiz, setFinishQuiz] = useState(false);

  useEffect(() => {
    dispatch(getQuestions(category));
  }, [dispatch, category]);

  return (
    <section className="QuizPage">
      <article className="QuizPage__container">
        {finishQuiz ? (
          <Score score={score} questions={questions} />
        ) : (
          <Quiz questions={questions} setFinishQuiz={setFinishQuiz} />
        )}
      </article>
    </section>
  );
};

export default QuizPage;
