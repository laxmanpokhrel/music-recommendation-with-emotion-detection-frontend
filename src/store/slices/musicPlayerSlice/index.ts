import { createSlice } from '@reduxjs/toolkit';
import { stat } from 'fs';

const musicPlayerSlice = createSlice({
  name: 'musicPlayer',
  initialState: {
    music: null,
    play: false,
  },
  reducers: {
    setMusic(state, action) {
      console.log('🚀 ~ file: index.ts:12 ~ setMusic ~ action:', action.payload);
      state.music = action.payload;
    },
    togglePlay(state, action) {
      console.log('🚀 ~ file: index.ts:15 ~ togglePlay ~ state:', state.play);
      state.play = !state.play;
    },
  },
});
export default musicPlayerSlice;
