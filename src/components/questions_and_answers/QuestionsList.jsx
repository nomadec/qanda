import React from "react";

const QuestionsList = ({ questions }) => {
  return (
    <div className="questions_list">
      <ol>
        {questions.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>
    </div>
  );
};

export default QuestionsList;
