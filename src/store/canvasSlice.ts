import { createSlice } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

interface IInitialState {
  elements: { name: string; children: ReactNode }[];
}

const initialState: IInitialState = {
  elements: [],
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.elements.push(action.payload);
    },
    reorder: (state, action) => {
      const tmp = state.elements[action.payload.draggedIndex];
      state.elements.splice(action.payload.draggedIndex, 1);
      state.elements.splice(action.payload.droppedIndex, 0, tmp);
    },
  },
});

export default canvasSlice.reducer;
export const { addElement, reorder } = canvasSlice.actions;
