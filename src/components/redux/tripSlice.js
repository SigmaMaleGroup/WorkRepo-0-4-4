import { createSlice } from '@reduxjs/toolkit'

const initialState = { days: [] }

const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    initializeDays(state, action) {
      state.days = action.payload.map(day => ({ activities: day }));
    },
    addDay(state) {
      state.days.push({ activities: [] });
    },
    removeDay(state, action) {
      state.days.splice(action.payload, 1);
    },
    addActivity(state, action) {
      const { dayIndex, activity } = action.payload;
      state.days[dayIndex].activities.push(activity);
    },
    removeActivity(state, action) {
      const { dayIndex, activityIndex } = action.payload;
      state.days[dayIndex].activities.splice(activityIndex, 1);
    },
  },
})

export const { initializeDays, addDay, removeDay, addActivity, removeActivity } = tripSlice.actions

export default tripSlice.reducer

