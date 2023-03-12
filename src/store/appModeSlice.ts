import { createSlice } from '@reduxjs/toolkit';
import { AppModes } from '../const';

interface IInitialState {
  mode: AppModes;
}

const initialState: IInitialState = {
  mode: AppModes.CONSTRUCTOR,
};

const appModeSlice = createSlice({
  name: 'appMode',
  initialState,
  reducers: {
    changeMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export default appModeSlice.reducer;
export const { changeMode } = appModeSlice.actions;
