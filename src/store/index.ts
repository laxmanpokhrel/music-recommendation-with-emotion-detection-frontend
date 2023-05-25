import { configureStore } from '@reduxjs/toolkit';
import reducers from './slices/index.reducer';

const store = configureStore({
  reducer: { ...reducers },
});

export default store;
