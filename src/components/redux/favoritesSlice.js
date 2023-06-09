import { createSlice } from '@reduxjs/toolkit'

const initialState = { trips: [], activities: [] }

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { tripIds: [], activities: [] },
  reducers: {
    addTrip(state, action) {
      state.tripIds.push(action.payload.id)
    },
    removeTrip(state, action) {
      state.tripIds = state.tripIds.filter(id => id !== action.payload.id);
    },
    addActivity(state, action) {
      state.activities.push(action.payload)
    },
    removeActivity(state, action) {
      state.activities.splice(action.payload, 1)
    },
  },
})


export const { addTrip, removeTrip, addActivity, removeActivity } = favoritesSlice.actions

export default favoritesSlice.reducer
