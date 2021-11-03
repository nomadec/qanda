import React from "react";

const defaultQuestion = "The End!";

const SelectedQuestion = ({
  question = defaultQuestion,
  handleNextQuestion,
}) => {
  return (
    <div className="selected_question">
      <div className="question">
        <span>{question}</span>
      </div>

      <div className="question_actions">
        <button onClick={handleNextQuestion}>Next Question?</button>
      </div>
    </div>
  );
};

export default SelectedQuestion;
