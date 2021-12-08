import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getQuestions,
  getQuestionTopic,
  putQuestionTopic,
} from '../../api/erudite/questionsApi';
import { URL_ERUDITE } from '../../utils/consts';
import { headerActions } from '../header/Header';
import ActionAreaCard from './ActionAreaCard';
import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const EruditeQuestionsMenu = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(getQuestions());

    headerActions.editHandler = editBlockHandler;
    headerActions.selectHandler = selectBlockHandler;

    return cleanupOnUnmount;
  }, []);

  function cleanupOnUnmount() {
    headerActions.editHandler = null;
    headerActions.selectHandler = null;
  }

  // ! Dynamically mounted Header Blocks
  // Edit Block
  const editBlockHandler = (
    <Link to={`${URL_ERUDITE}/edit`}>
      <Button
        variant="contained"
        startIcon={<EditIcon />}
        sx={{ marginRight: 1, height: '100%' }}
      >
        Edit Questions
      </Button>
    </Link>
  );

  // Select Block to filter questions by topic
  const [questionTopic, setQuestionTopic] = useState(getQuestionTopic());

  function handleTopicSelection(event) {
    const topic = event.target.value;
    setQuestionTopic(topic);
    putQuestionTopic(topic);
  }

  function filterQuestionsByTopic(topic) {
    const filteredQuestions = questions.filter(
      (el) => (el.topic || 'default') === topic
    );
    return filteredQuestions.sort(
      (a, b) => (a.order || a.id) - (b.order || b.id)
    );
  }

  function getTopics() {
    const arr = getQuestions();
    const allTopics = arr.map((el) => el.topic || 'default');
    const uniqueTopics = [...new Set(allTopics)];
    return uniqueTopics;
  }

  const selectBlockHandler = (
    <FormControl sx={{ m: 1, minWidth: 150 }}>
      <InputLabel id="demo-simple-select-autowidth-label">
        Select a Topic
      </InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        // value={questionTopic}
        onChange={handleTopicSelection}
        autoWidth
        label="Topic"
      >
        {getTopics().map((el, i) => (
          <MenuItem key={i} value={el} sx={{ minWidth: 140 }}>
            {el}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  return (
    <div className="erudite_menu">
      {questions &&
        filterQuestionsByTopic(getQuestionTopic()).map((item) => {
          return <ActionAreaCard key={item.id} item={item} />;
        })}
    </div>
  );
};

export default EruditeQuestionsMenu;
