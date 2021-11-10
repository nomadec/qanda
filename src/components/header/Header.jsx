import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  return (
    <>
      <IconButton aria-label="share" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    </>
  );
};

export default Header;
