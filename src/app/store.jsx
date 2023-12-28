// TODO: Start Create Store Here !
import { configureStore } from "@reduxjs/toolkit";
import messageBoardSlice from "../slices/messageBoardSlice";
import inputValueSlice from "../slices/inputValueSlice";

export const store = configureStore({
  reducer: {
    messageBoard: messageBoardSlice,
    inputValue: inputValueSlice,
  },
});
