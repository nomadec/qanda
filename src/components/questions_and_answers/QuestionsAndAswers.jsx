import React, { useState } from "react";
import { getQuestions } from "../../api/questionsApi";
import { getStudents } from "../../api/studentsApi";
import { makeRandomInt } from "../../utils/helper";
import QuestionsList from "./QuestionsList";
import SelectedQuestion from "./SelectedQuestion";
import SelectedStudent from "./SelectedStudent";
import StudentsList from "./StudentsList";
import Timer from "./Timer";

const QuestionsAndAswers = () => {
  const students = getStudents();
  const questions = getQuestions();
  const [questionInx, setQuestionInx] = useState(0);
  const [studentInx, setStudentInx] = useState(-1);

  function handleNextQuestion() {
    setQuestionInx(questionInx + 1);
  }

  function handleNextStudent() {
    setStudentInx(makeRandomInt(0, students.length - 1));
  }

  return (
    <div className="questions_and_asnwers">
      <StudentsList students={students} />
      <div className="content">
        <SelectedStudent
          student={students[studentInx]}
          handleNextStudent={handleNextStudent}
        />
        <Timer studentInx={studentInx} questionInx={questionInx} />
        <SelectedQuestion
          question={questions[questionInx]}
          handleNextQuestion={handleNextQuestion}
        />
      </div>
      <QuestionsList questions={questions} />
    </div>
  );
};

export default QuestionsAndAswers;
