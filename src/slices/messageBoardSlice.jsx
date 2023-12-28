// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const messageBoardSlice = createSlice({
  name: "messageBoard",
  initialState: initialState,
  reducers: {
    setAddMessageBoard: (state, action) => {
      state.push(action.payload);
    },
    setDeleteMessageBoard: (state, action) => {
      state.splice(action.pay, 1);
    },
  },
});

export const { setAddMessageBoard, setDeleteMessageBoard } =
  messageBoardSlice.actions;
export default messageBoardSlice.reducer;
