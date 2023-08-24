import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./modalTask/modalSlice";
import { taskSlice } from "./task/taskSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    task: taskSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
