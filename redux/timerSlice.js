import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  seconds: 0,
  isRunning: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer: (state) => {
      state.isRunning = true;
    },
    stopTimer: (state) => {
      state.isRunning = false;
    },
    resetTimer: (state) => {
      state.seconds = 0;
    },
    increment: (state) => {
      if (state.isRunning) {
        state.seconds += 1;
      }
    },
  },
});

export const { startTimer, stopTimer, resetTimer, increment } = timerSlice.actions;

export default timerSlice.reducer;
