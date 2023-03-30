import { configureStore } from "@reduxjs/toolkit";
import reducers from "./slices/index.reducers";

const store = configureStore({
  reducer: { ...reducers },
});

export default store;
