import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, Typography, Grid, Button,
} from '@mui/joy';
import { CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const CameraCard = ({ camera, buttonLabel, onClick }) => {
  const { camera_images: [{ image } = {}] = [] } = camera;

  return (
    <Grid
      item
      key={camera.name}
      xs={12}
      md={6}
      className="w-full gap-3 relative"
    >
      <Card
        sx={{ border: 'none', backgroundColor: '#fff' }}
        className="h-[36rem]"
      >
        <div className="relative object-cover w-full h-3/5">
          <div className="absolute inset-0 bg-gray-400 opacity-30 rounded-full" />

          <CardMedia
            component="img"
            src={image}
            alt={camera.name}
            className="object-cover w-3/5 h-full relative z-10"
          />
        </div>
        <CardContent>
          <Typography variant="h6" component="h3">
            {camera.name}
          </Typography>
          <Typography
            variant="body2"
            className="font-bold text-sm "
            component="p"
          >
            From $
            {' '}
            {camera.daily_price}
            {' '}
            per day
          </Typography>
          <Link to={`/camera/${camera.id}`} className="mt-4">
            <Button color="neutral" onClick={onClick} variant="soft">
              {buttonLabel}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

CameraCard.propTypes = {
  camera: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    camera_type: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }).isRequired,
};

export default CameraCard;
