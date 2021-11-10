import React from 'react';
import { getQuestions } from '../../api/erudite/questionsApi';
import ActionAreaCard from './ActionAreaCard';

const EruditeQuestionsMenu = () => {
  const questions = getQuestions();
  return (
    <div className="erudite_menu">
      {questions.map((item) => {
        return <ActionAreaCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default EruditeQuestionsMenu;
