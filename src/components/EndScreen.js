import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../Redux/questionSlice";
const EndScreen = () => {
  const questions = useSelector((state) => state.exam.questions);
  const score = useSelector((state) => state.exam.score);
  const Name = useSelector((state) => state.exam.inputName);
  const dispatch = useDispatch();
  const restartExamHandler = () => {
    dispatch(questionActions.restartExam());
  };
  return (
    <div className="EndScreen">
      <h2>Thank you {Name.toLowerCase()}</h2>
      <h2>Exam Finished</h2>
      <h3>
        your score:{" "}
        <span className={score > 2 ? "success" : "danger"}>{score}</span> /
        {questions.length}
      </h3>
      <button onClick={restartExamHandler} className="restart-btn">
        Restart Exam
      </button>
    </div>
  );
};

export default EndScreen;
