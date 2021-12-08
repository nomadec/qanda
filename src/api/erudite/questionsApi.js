import questionsDataSample from '../../temp_data/erudite/questionsData';

const dataKey = 'erudite_data';
const dataKeyTopic = 'erudite_questions_topic';

function initData() {
  if (!localStorage.getItem(dataKey)) {
    localStorage.setItem(dataKey, JSON.stringify(questionsDataSample));
  } else {
    initMigration();
  }
  if (!localStorage.getItem(dataKeyTopic)) {
    localStorage.setItem(dataKeyTopic, JSON.stringify('default'));
  }
}
initData();

function initMigration() {
  const arr = getQuestions();
  const arrNew = arr.map((el) => {
    if ('img' in el) {
      el.cover = `image:${el.img}`;
      delete el.img;
    }
    if (!('order' in el)) {
      el.order = el.id;
    }
    return el;
  });
  putQuestions(arrNew);
}

export function getQuestions() {
  return JSON.parse(localStorage.getItem(dataKey));
}

export function getOneQuestion(id) {
  const data = getQuestions();
  return data.find((elem) => elem.id === parseInt(id));
}

export function putQuestions(data) {
  localStorage.setItem(dataKey, JSON.stringify(data));
}

export function patchQuestion(id, field, value) {
  const data = getQuestions();
  const inx = data.findIndex((elem) => elem.id === parseInt(id));
  data[inx][field] = value;
  putQuestions(data);
}

export function postQuestion(record) {
  const data = getQuestions();
  const maxId = data.reduce((acc, obj) => Math.max(acc, obj.id), 1);
  const newRecord = { ...record, id: maxId + 1 };
  data.sort((a, b) => a.id - b.id);
  data.push(newRecord);
  putQuestions(data);
}

export function deleteQuestions(idsArr) {
  const data = getQuestions();
  const filteredData = data.filter((obj) => !idsArr.includes(obj.id));
  filteredData.sort((a, b) => a.id - b.id);
  putQuestions(filteredData);
}

export function setActiveStatus(id, status = true) {
  const data = getQuestions();
  const inx = data.findIndex((elem) => elem.id === parseInt(id));
  data[inx].isActive = status;
  putQuestions(data);
}

// ! questions selected topic storage
export function getQuestionTopic() {
  return JSON.parse(localStorage.getItem(dataKeyTopic));
}

export function putQuestionTopic(data) {
  localStorage.setItem(dataKeyTopic, JSON.stringify(data));
}
