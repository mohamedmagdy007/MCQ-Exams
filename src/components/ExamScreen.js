import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "../Redux/questionSlice";
const ExamScreen = () => {
  const currentQuestion = useSelector((state) => state.exam.currentQuestion);
  const questions = useSelector((state) => state.exam.questions);
  const option = useSelector((state) => state.exam.optionChosen);
  const dispatch = useDispatch();
  const optionSelectedHndler = (optionddd) => {
    dispatch(questionActions.setOptionChosen(optionddd));
  };

  const nextQuestionHandler = () => {
    if (questions[currentQuestion].answer === option) {
      dispatch(questionActions.incrementScore());
    }
    dispatch(questionActions.incrementQuestion());
    dispatch(questionActions.setOption());
  };
  const finishQuestionHandler = () => {
    if (questions[currentQuestion].answer === option) {
      dispatch(questionActions.incrementScore());
    }
    dispatch(questionActions.setExamStarted("end"));
  };
  return (
    <div className="Quiz">
      <h2>{questions[currentQuestion].que}</h2>
      <div className="options">
        <button
          onClick={() => optionSelectedHndler("A")}
          className={option === "A" ? "selected" : null}
        >
          {questions[currentQuestion].optionA}
        </button>
        <button
          onClick={() => optionSelectedHndler("B")}
          className={option === "B" ? "selected" : null}
        >
          {questions[currentQuestion].optionB}
        </button>
        <button
          onClick={() => optionSelectedHndler("C")}
          className={option === "C" ? "selected" : null}
        >
          {questions[currentQuestion].optionC}
        </button>
        <button
          onClick={() => optionSelectedHndler("D")}
          className={option === "D" ? "selected" : null}
        >
          {questions[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion !== questions.length - 1 ? (
        <button onClick={nextQuestionHandler} className="nextQuestion">
          Next Question
        </button>
      ) : (
        <button className="nextQuestion" onClick={finishQuestionHandler}>
          Finish
        </button>
      )}
    </div>
  );
};

export default ExamScreen;
