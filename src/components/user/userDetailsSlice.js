import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    status: 'idle',
  };
  
  export const userSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
      incrementTotal: (state) => {
        state.value++
      }
    }
  });
  
  export const { incrementTotal } = userSlice.actions;

  export const selectTotal = (state) => state.user.value;

  export default userSlice.reducer;