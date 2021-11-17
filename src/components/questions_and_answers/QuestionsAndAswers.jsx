import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';

import React, { useState } from 'react';
import { getQuestions } from '../../api/questions_and_answers/questionsApi';
import { getStudents } from '../../api/questions_and_answers/studentsApi';
import { makeRandomInt } from '../../utils/helper';
import QuestionsList from './QuestionsList';
import StudentsList from './StudentsList';
import Timer from '../timer/Timer';

const QuestionsAndAswers = () => {
  const students = getStudents();
  const questions = getQuestions();
  const [questionInx, setQuestionInx] = useState(0);
  const [studentInx, setStudentInx] = useState(-1);
  const [isTimerStarted, setIsTimerStarted] = useState(false);

  function handleNextQuestion() {
    setQuestionInx(questionInx + 1);
    setIsTimerStarted(false);
  }

  function handleNextStudent() {
    const randomInt = makeRandomInt(0, students.length - 1);
    setStudentInx(randomInt);
    if (!randomInt) setIsTimerStarted(true);
    else setIsTimerStarted(randomInt);
  }

  return (
    <div className="questions_and_asnwers">
      <StudentsList students={students} />
      <div className="content">
        <Card
          sx={{
            height: 1 / 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: 'visible',
          }}
        >
          <CardHeader
            avatar={
              <Button
                variant="contained"
                onClick={handleNextStudent}
                startIcon={<ShuffleIcon />}
              >
                Shuffle
              </Button>
            }
            title={students[studentInx]?.name}
            titleTypographyProps={{ fontWeight: 800, fontSize: 32 }}
            action={<Timer started={isTimerStarted} />}
          />

          <CardContent>
            <Typography variant="h4" fontWeight={800} align="center">
              {questions[questionInx] ? questions[questionInx] : 'The End'}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              onClick={handleNextQuestion}
              endIcon={<NavigateNextIcon />}
            >
              Next Question?
            </Button>
          </CardActions>
        </Card>
      </div>
      <QuestionsList questions={questions} />
    </div>
  );
};

export default QuestionsAndAswers;
