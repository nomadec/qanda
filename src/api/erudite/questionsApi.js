import questionsDataSample from '../../temp_data/erudite/questionsData';

const dataKey = 'erudite_data';

function initData() {
  if (!localStorage.getItem(dataKey)) {
    localStorage.setItem(dataKey, JSON.stringify(questionsDataSample));
  }
}
initData();

export function getQuestions() {
  return JSON.parse(localStorage.getItem(dataKey));
}

export function putQuestions(data) {
  localStorage.setItem(dataKey, JSON.stringify(data));
}

export function getOneQuestion(id) {
  const data = getQuestions();
  return data.find((elem) => elem.id === parseInt(id));
}

export function patchQuestion(id, field, value) {
  const data = getQuestions();
  const inx = data.findIndex((elem) => elem.id === parseInt(id));
  data[inx][field] = value;
  putQuestions(data);
}

export function setActiveStatus(id, status = true) {
  const data = getQuestions();
  const inx = data.findIndex((elem) => elem.id === parseInt(id));
  data[inx].isActive = status;
  putQuestions(data);
}
