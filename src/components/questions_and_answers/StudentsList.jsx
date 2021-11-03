import React from "react";

const StudentsList = ({ students }) => {
  return (
    <div className="students_list">
      <ol>
        {students.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ol>
    </div>
  );
};

export default StudentsList;
