import React from "react";
import StartScreen from "./components/StartScreen";
import ExamScreen from "./components/ExamScreen";
import EndScreen from "./components/EndScreen";
import { useSelector } from "react-redux";
function App() {
  const startExam = useSelector((state) => state.exam.examStarted);
  return (
    <main>
      <div className="exam-container">
      <h1>MCQ Exam</h1>
        <div className="questions">
          {startExam === "start" && <StartScreen />}
          {startExam === "quiz" && <ExamScreen />}
          {startExam === "end" && <EndScreen />}
        </div>
      </div>
    </main>
  );
}

export default App;
