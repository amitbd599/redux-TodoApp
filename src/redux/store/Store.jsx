import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../state/Counter/CounterSlice";
import todoReducer from "../state/Todo/TodoSlice";

export default configureStore({
  reducer: {
    Counter: counterReducer,
    todo: todoReducer,
  },
});
