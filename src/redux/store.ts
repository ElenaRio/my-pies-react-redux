import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import  piesSlice  from './slices/piesSlice';

export const store = configureStore({
  reducer: {
    filters: filterSlice,
    cart: cartSlice,
    pies: piesSlice,
  },
});

// Используем тип RootState, чтобы получить тип состояния
export type RootState = ReturnType<typeof store.getState>;

// Если нужно, можно также экспортировать тип для dispatch
export type AppDispatch = typeof store.dispatch;