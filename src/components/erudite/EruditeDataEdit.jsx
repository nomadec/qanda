import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Paper, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box } from '@mui/system';
import { getQuestions, patchQuestion } from '../../api/erudite/questionsApi';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
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
    field: 'img',
    headerName: 'Image URL link',
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

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 30 },
// ];

const EruditeDataEdit = () => {
  const rows = getQuestions();

  function handleCellCommit({ id, field, value }) {
    patchQuestion(id, field, value);
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
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<AddCircleIcon />}
        >
          New Question
        </Button>
      </Box>
      <Box sx={{ height: '75vh', width: '100%' }}>
        <DataGrid
          // editMode="row"
          rows={rows}
          columns={columns}
          checkboxSelection
          // onStateChange={handleStateChange}
          onCellEditCommit={handleCellCommit}
          // onRowEditCommit={handleStateChange}
        />
      </Box>
    </Paper>
  );
};

export default EruditeDataEdit;
