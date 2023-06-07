import { createSlice } from '@reduxjs/toolkit'

const initialState = { days: [] }

const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    addDay(state) {
      state.days.push({ activities: [] }) // добавляем новый день с пустым списком мероприятий
    },
    removeDay(state, action) {
      state.days.splice(action.payload, 1) // удаляем день по индексу
    },
    addActivity(state, action) {
      const { dayIndex, activity } = action.payload // получаем индекс дня и мероприятие
      state.days[dayIndex].activities.push(activity) // добавляем мероприятие в конкретный день
    },
    removeActivity(state, action) {
      const { dayIndex, activityIndex } = action.payload
      state.days[dayIndex].activities.splice(activityIndex, 1) // удаляем мероприятие из конкретного дня
    },
  },
})

export const { addDay, removeDay, addActivity, removeActivity } = tripSlice.actions

export default tripSlice.reducer
