// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const inputValueSlice = createSlice({
  name: "inputValue",
  initialState: initialState,
  reducers: {
    setInputValue: (state, action) => {
      state = action.payload;
      console.log(action.payload);
      return state;
    },
  },
});

export const { setInputValue } = inputValueSlice.actions;
export default inputValueSlice.reducer;
