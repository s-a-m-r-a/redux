import { configureStore, createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
    name: "timer",
    initialState: {
        hours: 0,
        minutes: 0,
        seconds: 0,
        measurements: []
    },
    reducers: {
        incrementHours: (state) => {
            state.hours = (state.hours + 1) % 24;
        },
        incrementMinutes: (state) => {
            state.minutes = (state.minutes + 1) % 60;
        },
        incrementSeconds: (state) => {
            state.seconds = (state.seconds + 1) % 60;
        },
        addMeasurement: (state) => {
            const time = `${state.hours.toString().padStart(2, "0")}:${state.minutes
                .toString()
                .padStart(2, "0")}:${state.seconds.toString().padStart(2, "0")}`;
            state.measurements.push(time);
        }
    }
});

export const {
    incrementHours,
    incrementMinutes,
    incrementSeconds,
    addMeasurement
} = timerSlice.actions;

export const store = configureStore({
    reducer: {
        timer: timerSlice.reducer
    }
});