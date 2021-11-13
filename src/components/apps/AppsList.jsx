import React, { useEffect } from 'react';
import AppCard from './AppCard';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { URL_ERUDITE, URL_QANDA } from '../../utils/consts';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { headerActions } from '../header/Header';

const AppsList = () => {
  useEffect(() => {
    removeHeaderActions();
  }, []);

  function removeHeaderActions() {
    for (const key in headerActions) {
      headerActions[key] = null;
    }
  }

  return (
    <Box>
      <Grid container columnSpacing={2}>
        <Grid item xs={3}>
          <AppCard
            title="Q&A"
            link={URL_QANDA}
            icon={<QuestionAnswerIcon fontSize="inherit" />}
          />
        </Grid>
        <Grid item xs={3}>
          <AppCard
            title="Эрудит"
            link={URL_ERUDITE}
            icon={<SportsKabaddiIcon fontSize="inherit" />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppsList;
