import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import Container from '@mui/material/Container';

const CameraForm = () => {
  const [cameraName, setCameraName] = useState('');
  const [dailyPrice, setDailyPrice] = useState('');
  const [cameraType, setCameraType] = useState('');
  const [weeklyPrice, setWeeklyPrice] = useState('');
  const [twoWeekPrice, setTwoWeekPrice] = useState('');
  const [threeWeekPrice, setThreeWeekPrice] = useState('');
  const [fourWeekPrice, setFourWeekPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    console.log(e.target.files);
    setImages(selectedImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('camera[name]', cameraName);
    formData.append('camera[daily_price]', dailyPrice);
    formData.append('camera[camera_type]', cameraType);
    formData.append('camera[weekly_price]', weeklyPrice);
    formData.append('camera[two_week_price]', twoWeekPrice);
    formData.append('camera[three_week_price]', threeWeekPrice);
    formData.append('camera[four_week_price]', fourWeekPrice);
    formData.append('camera[description]', description);
    formData.append('camera[booked]', false);

    images.forEach((image) => {
      formData.append('camera[images][]', image);
    });

    // Perform the POST request to your backend API
    try {
      const response = await fetch('http://localhost:4000/api/v1/cameras', {
        method: 'POST',
        body: formData,
      });
      // Handle the response
    } catch (error) {
      // Handle error
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              type="text"
              label="Camera Name"
              value={cameraName}
              onChange={(e) => setCameraName(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              type="text"
              label="Daily Price"
              value={dailyPrice}
              onChange={(e) => setDailyPrice(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              type="text"
              label="Camera Type"
              value={cameraType}
              onChange={(e) => setCameraType(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              type="text"
              label="Weekly Price"
              value={weeklyPrice}
              onChange={(e) => setWeeklyPrice(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              type="text"
              label="Two Weeks Price"
              value={twoWeekPrice}
              onChange={(e) => setTwoWeekPrice(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              type="text"
              label="Three Weeks Price"
              value={threeWeekPrice}
              onChange={(e) => setThreeWeekPrice(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              type="text"
              label="Four Weeks Price"
              value={fourWeekPrice}
              onChange={(e) => setFourWeekPrice(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              type="text"
              label="Camera Description"
              value={description}
              multiline
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item>
            <input type="file" multiple onChange={handleImageChange} />
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CameraForm;
