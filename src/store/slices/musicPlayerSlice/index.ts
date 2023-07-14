import { createSlice } from '@reduxjs/toolkit';

const musicPlayerSlice = createSlice({
  name: 'musicPlayer',
  initialState: {
    music: null,
    play: false,
  },
  reducers: {
    setMusic(state, action) {
      state.music = action.payload;
    },
    togglePlay(state, action) {
      state.play = !state.play;
    },
  },
});
export default musicPlayerSlice;
