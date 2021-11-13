import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import ReplyIcon from '@mui/icons-material/Reply';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';

const Header = () => {
  const history = useHistory();

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
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link to={`${history.location.pathname}/edit`}>
                <IconButton aria-label="edit">
                  <EditIcon />
                </IconButton>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
