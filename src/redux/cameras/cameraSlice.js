// cameraSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cameras: [],
  loading: false,
  error: null,
};

const cameraSlice = createSlice({
  name: 'cameras',
  initialState,
  reducers: {
    fetchCamerasStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCamerasSuccess(state, action) {
      state.loading = false;
      state.cameras = action.payload;
    },
    fetchCamerasFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addCamera(state, action) {
      state.cameras.push(action.payload);
    },
    removeCamera(state, action) {
      state.cameras = state.cameras.filter(
        (camera) => camera.id !== action.payload,
      );
    },
  },
});

export const {
  fetchCamerasStart,
  fetchCamerasSuccess,
  fetchCamerasFailure,
  addCamera,
  removeCamera,
} = cameraSlice.actions;

export default cameraSlice.reducer;
