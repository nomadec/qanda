import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getOneQuestion } from '../../api/erudite/questionsApi';
import Timer from '../questions_and_answers/Timer';

const EruditeQuestion = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setQuestion(getOneQuestion(id));
  }, []);

  function handleShow(e) {
    e.preventDefault();
    setShowAnswer((prevState) => !prevState);
  }

  return (
    <div className="erudite_question_dtls">
      <Card
        sx={{
          height: 1 / 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardHeader
          action={<Timer />}
          title="Питонамешалка"
          titleTypographyProps={{ fontWeight: 'bold' }}
        />

        <CardContent>
          <Accordion expanded={!showAnswer} onChange={handleShow}>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Question</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="h3"
                component="h2"
                color="text.primary"
                fontWeight="bold"
                fontStyle="italic"
              >
                {question?.question}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={showAnswer} onChange={handleShow}>
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Answer</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="h3"
                component="h2"
                color="text.primary"
                fontWeight="bold"
                fontStyle="italic"
                textAlign="center"
              >
                {question?.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            onClick={handleShow}
            startIcon={showAnswer ? <VisibilityOffIcon /> : <VisibilityIcon />}
          >
            {showAnswer ? 'Hide Answer' : 'Show Answer'}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default EruditeQuestion;
