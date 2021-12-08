import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { URL_ERUDITE } from '../../utils/consts';
import { Box } from '@mui/system';

export default function ActionAreaCard({ item }) {
  function makeCover(obj) {
    if (/^image:/.test(obj.cover)) {
      const [, img] = obj.cover.split('image:');
      return <CardMedia component="img" image={img} />;
    } else if (/^text:/.test(obj.cover)) {
      const [, text] = obj.cover.split('text:');
      return (
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue',
          }}
        >
          <Typography fontSize={72} fontWeight="bold" color="gold">
            {text}
          </Typography>
        </Box>
      );
    }
  }

  return (
    <Card sx={{ width: '24%', height: '24%' }}>
      <CardActionArea sx={{ height: '100%' }}>
        <Link to={`${URL_ERUDITE}/details/${item.id}`}>
          {item.isActive
            ? makeCover(item) ||
              'Should be "text:300" or "image:https://example.com/images/1"'
            : null}
        </Link>
      </CardActionArea>
    </Card>
  );
}
