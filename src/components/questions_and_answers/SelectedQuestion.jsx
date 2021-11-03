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
        <button
          className="next_question_btn button button--anthe"
          onClick={handleNextQuestion}
        >
          <span>Next Question?</span>
        </button>
      </div>
    </div>
  );
};

export default SelectedQuestion;
