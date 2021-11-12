import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Icon } from '@mui/material';

const AppCard = ({ title, link, icon }) => {
  return (
    <Link to={link}>
      <Card sx={{ maxWidth: 345, height: 200 }}>
        <CardContent
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: 64 }}>
            <Icon fontSize="inherit">{icon}</Icon>
          </div>
          <div>
            <Typography
              // textAlign="center"
              alignItems="center"
              variant="h5"
              fontWeight="bold"
              fontStyle="italic"
            >
              {title}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AppCard;
