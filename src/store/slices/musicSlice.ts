/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const musicSlice = createSlice({
  name: 'template',
  initialState: {
    music: null,
  },
  reducers: {
    addMusic(state, action) {
      state.music = action.payload;
    },
  },
});
export default musicSlice;
