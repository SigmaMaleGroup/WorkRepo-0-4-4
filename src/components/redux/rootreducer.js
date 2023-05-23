import { combineReducers } from '@reduxjs/toolkit';
import currentPageReducer from './createslice'; // Убедитесь, что путь верный

const rootReducer = combineReducers({
  currentPage: currentPageReducer, // Этот ключ определяет, как будет называться часть состояния в хранилище Redux
  // Если у вас есть другие срезы, добавьте их здесь...
});

export default rootReducer;