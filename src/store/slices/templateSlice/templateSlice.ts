import { createSlice } from '@reduxjs/toolkit';

const templateSlice = createSlice({
  name: 'template',
  initialState: {
    templateContent: null,
  },
  reducers: {
    templateReducerOne(state, action) {
      state.templateContent = action.payload;
    },
    templateReducerTwo(state) {
      state.templateContent = null;
    },
  },
});
export default templateSlice;
