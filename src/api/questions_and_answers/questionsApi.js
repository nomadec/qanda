import {
  domQuestions,
  httpRequestsQuestions,
  jsQuestions,
  localStorageQuestions,
} from '../../temp_data/questions_and_aswers/questionsData';

const questionsData = domQuestions
  .concat(localStorageQuestions)
  .concat(httpRequestsQuestions);
// const questionsData = localStorageQuestions;

export function getQuestions() {
  return questionsData;
}
