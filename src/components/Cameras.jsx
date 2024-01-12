import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router-dom';
import CameraCard from './CameraCard';

const Cameras = () => {
  const [cameras, setCameras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/api/v1/cameras')
      .then((response) => response.json())
      .then((data) => {
        setCameras(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
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

  if (error) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const chunkedCameras = chunkArray(cameras, 3);

  return (
    <Carousel animation="none" className="w-full h-full">
      {chunkedCameras.map((chunk) => (
        <div key={chunk.camera} className="flex gap-3 border-none">
          {chunk.map((camera) => (
            <CameraCard
              key={camera.id}
              camera={camera}
              buttonLabel="Hire now"
              onClick={() => navigate(`/camera/${camera.id}`)}
            />
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default Cameras;
