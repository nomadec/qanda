import React from "react";

const SelectedStudent = ({ student, handleNextStudent }) => {
  return (
    <div className="selected_student">
      <div className="student_name">{student?.name}</div>
      <div className="student_actions">
        <button onClick={handleNextStudent}>Random Student</button>
      </div>
    </div>
  );
};

export default SelectedStudent;
