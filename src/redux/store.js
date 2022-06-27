import { configureStore } from "@reduxjs/toolkit";
import unreliableTransporterReducer from "./reducers/unreliableTransporters";

export default configureStore({
  reducer: {
    unreliableTransporter: unreliableTransporterReducer,
  },
});
