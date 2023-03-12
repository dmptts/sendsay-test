import { configureStore } from '@reduxjs/toolkit';
import canvasReducer from './canvasSlice';
import appModeReducer from './appModeSlice';

const store = configureStore({
  reducer: {
    canvas: canvasReducer,
    appMode: appModeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'canvas/pushElement',
          'canvas/insertElement',
          'canvas/replace',
        ],
        ignoredPaths: ['canvas.elements'],
      },
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
