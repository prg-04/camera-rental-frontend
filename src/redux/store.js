import { configureStore } from '@reduxjs/toolkit';
// import { logger } from 'redux-logger';
import authReducer from './userAuth/authSlice';
import cameraReducer from './cameras/cameraSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cameras: cameraReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
