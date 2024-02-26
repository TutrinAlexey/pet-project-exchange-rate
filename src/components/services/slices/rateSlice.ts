import { createSlice } from "@reduxjs/toolkit";
type TInitialState = {};
const initialState: TInitialState = {};

const rateSlice = createSlice({
  name: "rate",
  initialState,
  reducers: {},
});

export const {} = rateSlice.actions;
export default rateSlice.reducer;
