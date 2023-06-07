import { configureStore } from '@reduxjs/toolkit'
import tripReducer from './tripSlice'
import favoritesReducer from './favoritesSlice'

export const store = configureStore({
  reducer: {
    trip: tripReducer,
    favorites: favoritesReducer,
  },
})
