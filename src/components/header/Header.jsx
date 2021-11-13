import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import ReplyIcon from '@mui/icons-material/Reply';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const headerActions = {};

const Header = () => {
  const history = useHistory();
  const [actions, setActions] = useState({});

  useEffect(() => {
    setActions(headerActions);
  }, [headerActions]);

  function isHomePage() {
    return history.location.pathname === '/';
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" elevation={1}>
          <Toolbar>
            {!isHomePage() && (
              <IconButton aria-label="go-back" onClick={history.goBack}>
                {/* <ArrowBackIcon /> */}
                <ReplyIcon />
              </IconButton>
            )}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {Object.entries(actions).map(([k, v]) => (
                <div key={`hactions-${k}`}>{v}</div>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
