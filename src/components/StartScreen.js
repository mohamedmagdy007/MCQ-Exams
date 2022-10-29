import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../Redux/questionSlice";
const StartScreen = () => {
  const inputName = useSelector((state) => state.exam.inputName);
  const input = useRef("");
  const dispatch = useDispatch();
  const startHandler = () => {
    dispatch(questionActions.setExamStarted("quiz"));
  };
  const inputHandler = () => {
    const textName = input.current.value;
    dispatch(questionActions.setInputName(textName));
  };
  return (
    <div className="start-screen">
      <h2>Start Exam</h2>
      <input
        type="text"
        placeholder="Enter Your Name"
        className="input-text"
        ref={input}
        onChange={inputHandler}
      />
      <button
        onClick={startHandler}
        className={`start-btn ${inputName === "" ? "default" : null}`}
        disabled={inputName === "" ? true : false}
      >
        start
      </button>
    </div>
  );
};

export default StartScreen;
