import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { URL_ERUDITE } from '../../utils/consts';

export default function ActionAreaCard({ item }) {
  return (
    <Card>
      <CardActionArea>
        <Link to={`${URL_ERUDITE}/details/${item.id}`}>
          {item.isActive ? (
            <CardMedia component="img" image={item.img} />
          ) : null}
        </Link>
      </CardActionArea>
    </Card>
  );
}
