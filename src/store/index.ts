import { configureStore } from '@reduxjs/toolkit';
import canvasSlice from './canvasSlice';

const store = configureStore({
  reducer: {
    canvas: canvasSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['canvas/addElement', 'canvas/replace'],
        ignoredPaths: ['canvas.elements'],
      },
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
