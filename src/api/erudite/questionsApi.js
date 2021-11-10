import questionsData from '../../temp_data/erudite/questionsData';

export function getQuestions() {
  return questionsData;
}

export function getOneQuestion(id) {
  return questionsData.find((elem) => elem.id === parseInt(id));
}
