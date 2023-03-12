import { RootState } from '.';

export const selectAppMode = (state: RootState) => state.appMode.mode;
