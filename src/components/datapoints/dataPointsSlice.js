import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
    status: 'idle',
  };
  
  export const dataPointsSlice = createSlice({
    name: 'dataPoints',
    initialState,
    reducers: {
      addDataPoint: (state, action) => {
        state.value.push(action.payload);
      }
    }
  });
  
  export const { addDataPoint } = dataPointsSlice.actions;

  export const selectDataPoints = (state) => state.dataPoints.value;

  export default dataPointsSlice.reducer;