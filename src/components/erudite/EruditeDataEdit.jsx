import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Paper, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';
import {
  deleteQuestions,
  getQuestions,
  patchQuestion,
  postQuestion,
} from '../../api/erudite/questionsApi';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'order', headerName: 'Order', width: 70, editable: true },
  {
    field: 'topic',
    headerName: 'Topic',
    width: 120,
    editable: true,
  },
  {
    field: 'question',
    headerName: 'Question',
    width: 180,
    editable: true,
  },
  {
    field: 'answer',
    headerName: 'Answer',
    width: 180,
    editable: true,
  },
  {
    field: 'cover',
    headerName: 'Cover',
    width: 150,
    editable: true,
  },
  {
    field: 'timer',
    headerName: 'Timer sec.',
    type: 'number',
    width: 90,
    editable: true,
  },
  {
    field: 'questionFontSize',
    headerName: 'Question font-size',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'answerFontSize',
    headerName: 'Answer font-size',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'isActive',
    headerName: 'isActive',
    type: 'boolean',
    width: 80,
    editable: true,
  },
];

const EruditeDataEdit = () => {
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    setRows(getQuestions());
  }, []);

  function handleNewRecord() {
    const newRecord = {
      order: null,
      question: null,
      answer: null,
      cover: null,
      timer: 60,
      isActive: true,
      questionFontSize: 48,
      answerFontSize: 48,
    };
    postQuestion(newRecord);
    setRows(getQuestions());
  }

  function handleCellCommit({ id, field, value }) {
    patchQuestion(id, field, value);
  }

  function handleSelectionChange(selected) {
    setSelectedRows(selected);
  }

  function handleDeleteSelected() {
    deleteQuestions(selectedRows);
    setRows(getQuestions());
  }

  return (
    <Paper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 1,
        }}
      >
        <Typography variant="h6" component="h2" color="primary">
          Questions
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Button
            variant="contained"
            startIcon={<AddCircleIcon />}
            onClick={handleNewRecord}
            sx={{ marginRight: 1 }}
          >
            New Question
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handleDeleteSelected}
            disabled={!Boolean(selectedRows.length)}
          >
            Delete {Boolean(selectedRows.length) && `(${selectedRows.length})`}
          </Button>
        </Box>
      </Box>
      <Box sx={{ height: '75vh', width: '100%' }}>
        <DataGrid
          // editMode="row"
          rows={rows}
          columns={columns}
          checkboxSelection
          // onStateChange={handleStateChange}
          onSelectionModelChange={handleSelectionChange}
          onCellEditCommit={handleCellCommit}
          // onRowEditCommit={handleStateChange}
        />
      </Box>
    </Paper>
  );
};

export default EruditeDataEdit;
