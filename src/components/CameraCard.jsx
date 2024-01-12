import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, Typography, Grid, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

//CameraCard function
const CameraCard = ({ camera, buttonLabel, onClick }) => {
  const images = camera.images || [];

  // Render images with URLs and base64 strings
  const renderImages = () => images.slice(0, 1).map((image, index) => (
    <img
      key={index}
      src={image.url}
      alt={`Image ${index}`}
      className="object-cover w-3/5 h-full relative z-10"
    />
  ));

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
          {/* Display images */}
          {renderImages()}
        </div>
        <CardContent>
          <Typography variant="h6" component="h3">
            {camera.name}
          </Typography>
          <Typography
            variant="body2"
            className="font-bold text-sm"
            component="p"
          >
            From $
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
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        base64: PropTypes.string.isRequired,
      }),
    ).isRequired,
    daily_price: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CameraCard;
