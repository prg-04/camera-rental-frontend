import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardMedia, Typography, Grid,
} from '@mui/material';

const CameraCard = ({ camera }) => {
  const {
    name, image, price, camera_type,
  } = camera;

  const cardMediaStyle = {
    objectCover: 'object-cover',
    width: '3/5',
    height: 'full',
    border: 'border',
    relative: 'relative',
    zIndex: 'z-10',
  };

  return (
    <Grid
      item
      key={name}
      xs={12}
      md={6}
      className="w-full border gap-3 relative"
    >
      <Card className="h-[36rem]">
        <div className="relative object-cover w-full h-3/5">
          <div className="absolute inset-0 bg-gray-400 opacity-30 rounded-full" />
          <CardMedia
            component="img"
            alt={name}
            image={image}
            title={name}
            className={Object.entries(cardMediaStyle).map(([key, value]) => `${key}-${value}`).join(' ')}
          />
        </div>
        <CardContent>
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          {/* Display other camera details */}
          {renderDetail('Price', `$ ${price}`)}
          {renderDetail('Type', camera_type)}
        </CardContent>
      </Card>
    </Grid>
  );
};

const renderDetail = (label, value) => (
  <Typography variant="body2" color="textSecondary" component="p">
    {label}
    :
    {' '}
    {value}
  </Typography>
);

CameraCard.propTypes = {
  camera: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    camera_type: PropTypes.string.isRequired,
  }).isRequired,
};

export default CameraCard;
