import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { Typography, CircularProgress } from '@mui/material';
import { Button } from '@mui/joy';

const CameraDetails = () => {
  const { id } = useParams();
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    const fetchCamera = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/cameras/${id}`,
        );
        setCamera(response.data);
      } catch (error) {
        console.error('Error fetching camera details:', error);
      }
    };

    if (id) {
      fetchCamera();
    }
  }, [id]);

  const handleBooking = async () => {
    try {
      const updatedCamera = {
        ...camera,
        booked: true,
      };

      await axios.put(
        `http://localhost:4000/api/v1/cameras/${id}`,
        updatedCamera,
      );

      const response = await axios.get(
        `http://localhost:4000/api/v1/cameras/${id}`,
      );
      setCamera(response.data);
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  if (!camera) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  console.log(camera);

  return (
    <div className="flex justify-between w-full">
      <div style={{ flex: 1 }} className="">
        {camera.images && camera.images.length > 0 && (
          <Carousel sx={{ width: '100%' }}>
            {camera.images.map((imageData) => (
              <img
                key={imageData.id}
                src={imageData.url} // Assuming 'url' contains the image URL
                alt={`Camera ${imageData.id}`}
                style={{ width: '100%', height: 'auto' }}
              />
            ))}
          </Carousel>
        )}
      </div>

      <div style={{ flex: 1, marginLeft: '20px' }}>
        <Typography variant="h2" gutterBottom>
          {camera.name}
        </Typography>
        <p>{camera.description}</p>
        <div>
          <Typography variant="h3" gutterBottom>
            Hire Rates
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', fontSize: '1rem' }}
          >
            Daily Price $
            {' '}
            {camera.daily_price}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', fontSize: '1rem' }}
          >
            {' '}
            Weekly Price $
            {' '}
            {camera.weekly_price}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', fontSize: '1rem' }}
          >
            2 Weekly Price $
            {' '}
            {camera.two_week_price}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', fontSize: '1rem' }}
          >
            3 Weekly Price $
            {' '}
            {camera.three_week_price}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', fontSize: '1rem' }}
          >
            4 Weekly Price $
            {' '}
            {camera.four_week_price}
          </Typography>
        </div>
        <Button onClick={handleBooking}>Book now</Button>
      </div>
    </div>
  );
};

export default CameraDetails;
