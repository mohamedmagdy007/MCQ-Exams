import { createSlice } from "@reduxjs/toolkit";
import { Questions } from "../data/QuestionBank";
const initialState = {
  questions: Questions.sort(() => 0.5 - Math.random()),
  examStarted: "start",
  currentQuestion: 0,
  optionChosen: "",
  score: 0,
  inputName: "",
};
export const questionSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    setExamStarted: (state, action) => {
      state.examStarted = action.payload;
    },
    setOptionChosen: (state, action) => {
      state.optionChosen = action.payload;
    },
    incrementQuestion: (state, action) => {
      state.currentQuestion++;
    },
    incrementScore: (state, action) => {
      state.score++;
    },
    setInputName: (state, action) => {
      state.inputName = action.payload;
    },
    setOption: (state) => {
      state.optionChosen = "";
    },
    restartExam: (state) => {
      state.questions.sort(() => 0.5 - Math.random());
      state.currentQuestion = 0;
      state.score = 0;
      state.examStarted = "start";
      state.optionChosen = "";
      state.inputName = "";
    },
  },
});
export const questionActions = questionSlice.actions;

export default questionSlice;
