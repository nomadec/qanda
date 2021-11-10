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
import {
  getOneQuestion,
  setActiveStatus,
} from '../../api/erudite/questionsApi';
import Timer from '../questions_and_answers/Timer';
import ActionsMenu from '../ActionsMenu/ActionsMenu';

const EruditeQuestion = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setQuestion(getOneQuestion(id));
  }, []);

  function handleShow(e) {
    e.preventDefault();
    setShowAnswer((prevState) => !prevState);
    setActiveStatus(id, false);
  }

  function handleMenuOpen() {
    setShowMenu(true);
  }

  function handleMenuClose() {
    setShowMenu(false);
  }

  function isMenuOpen(block) {
    if (showMenu && block === 'question' && !showAnswer) return true;
    else if (showMenu && block === 'answer' && showAnswer) return true;
    else return false;
  }

  function handleZoomIn(key) {
    return () => {
      const updatedQuestion = { ...question };
      updatedQuestion[key] += 1;
      setQuestion(updatedQuestion);
    };
  }

  function handleZoomOut(key) {
    return () => {
      const updatedQuestion = { ...question };
      updatedQuestion[key] -= 1;
      setQuestion(updatedQuestion);
    };
  }

  return (
    <div className="erudite_question_dtls">
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
          action={<Timer />}
          title="Питонамешалка"
          titleTypographyProps={{ fontWeight: 'bold' }}
        />

        <CardContent>
          <Accordion
            expanded={!showAnswer}
            onChange={handleShow}
            sx={{ backgroundColor: 'whitesmoke' }}
          >
            <ActionsMenu
              showMenu={isMenuOpen('question')}
              handleMenuClose={handleMenuClose}
              handleZoomIn={handleZoomIn('questionFontSize')}
              handleZoomOut={handleZoomOut('questionFontSize')}
            />
            {/* <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Question</Typography>
            </AccordionSummary> */}
            <AccordionDetails onMouseOver={handleMenuOpen}>
              <Typography
                // variant="h3"
                // component="h2"
                color="text.primary"
                fontSize={question?.questionFontSize}
                fontWeight="bold"
                fontStyle="italic"
              >
                {question?.question}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={showAnswer}
            onChange={handleShow}
            sx={{ backgroundColor: 'whitesmoke' }}
          >
            <ActionsMenu
              showMenu={isMenuOpen('answer')}
              handleMenuClose={handleMenuClose}
              handleZoomIn={handleZoomIn('answerFontSize')}
              handleZoomOut={handleZoomOut('answerFontSize')}
            />
            {/* <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Answer</Typography>
            </AccordionSummary> */}
            <AccordionDetails onMouseOver={handleMenuOpen}>
              <Typography
                // variant="h3"
                // component="h2"
                color="text.primary"
                fontWeight="bold"
                fontStyle="italic"
                textAlign="center"
                fontSize={question?.answerFontSize}
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
