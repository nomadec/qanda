import React from "react";

const SelectedStudent = ({ student, handleNextStudent }) => {
  return (
    <div className="selected_student_block">
      <div className="student_name">{student?.name}</div>
      <div className="student_actions">
        <button
          class="random_student_btn button button--helene"
          onClick={handleNextStudent}
        >
          <span>
            <span>Random</span>
          </span>
        </button>

        {/* <div className="random_student_btn button button--helene" onClick={handleNextStudent}>
          Random Student?
        </div> */}
      </div>
    </div>
  );
};

export default SelectedStudent;
