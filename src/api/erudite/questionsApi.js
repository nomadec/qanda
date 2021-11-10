import questionsData from '../../temp_data/erudite/questionsData';

export function getQuestions() {
  return questionsData;
}

export function getOneQuestion(id) {
  return questionsData.find((elem) => elem.id === parseInt(id));
}

export function setActiveStatus(id, status = true) {
  const inx = questionsData.findIndex((elem) => elem.id === parseInt(id));
  questionsData[inx].isActive = status;
}
