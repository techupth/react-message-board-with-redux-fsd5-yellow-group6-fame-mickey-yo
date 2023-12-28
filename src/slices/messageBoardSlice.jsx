// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit";

const initialState = { messages: [], inputMessages: "" };

export const messageSlice = createSlice({
  name: "message",
  initialState: initialState,
  reducers: {
    inputMessage: (state, action) => {
      state.inputMessages = action.payload;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    deleteMessage: (state, action) => {
      state.messages.splice(action.payload, 1);
    },
  },
});

export const { addMessage, deleteMessage, inputMessage } = messageSlice.actions;
export default messageSlice.reducer;
