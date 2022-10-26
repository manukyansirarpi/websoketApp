import { configureStore } from '@reduxjs/toolkit';
import dataPointsReducer from '../components/datapoints/dataPointsSlice';
import userDetailsSlice from '../components/user/userDetailsSlice';

export const store = configureStore({
  reducer: {
    dataPoints: dataPointsReducer,
    user: userDetailsSlice
  },
});
