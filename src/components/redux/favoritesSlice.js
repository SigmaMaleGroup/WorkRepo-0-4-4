import { createSlice } from '@reduxjs/toolkit'

const initialState = { trips: [], activities: [] }

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addTrip(state, action) {
      state.trips.push(action.payload)
    },
    removeTrip(state, action) {
      state.trips.splice(action.payload, 1)
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
