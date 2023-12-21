import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardMedia, Typography, Grid,
} from '@mui/material';

const CameraCard = ({ camera }) => (
  <Grid
    item
    key={camera.name}
    xs={12}
    md={6}
    className="w-full border gap-3 relative"
  >
    <Card className="h-[36rem]">
      <div className="relative object-cover w-full h-3/5">
        <div className="absolute inset-0 bg-gray-400 opacity-30 rounded-full" />
        <CardMedia
          component="img"
          alt={camera.name}
          image={camera.image}
          title={camera.name}
          className="object-cover w-3/5 h-full border relative z-10"
        />
      </div>
      <CardContent>
        <Typography variant="h6" component="h3">
          {camera.name}
        </Typography>
        {/* Display other camera details */}
        <Typography variant="body2" color="textSecondary" component="p">
          Price: $
          {' '}
          {camera.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Type:
          {' '}
          {camera.camera_type}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
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
