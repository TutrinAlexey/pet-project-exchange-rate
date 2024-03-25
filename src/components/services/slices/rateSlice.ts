import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getRates } from "../thunk/rateQuery";
type TInitialState = {
  rates: [] | null,
  ratesPending: boolean,
  ratesSuccess: boolean | null,
  ratesError: string,
};
const initialState: TInitialState = {
  rates: [],
  ratesPending: false,
  ratesSuccess: null,
  ratesError: '',
};

const rateSlice = createSlice({
  name: "rate",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getRates.pending.type, (state, action) => {
      state.ratesPending = true;
      state.ratesSuccess = false;
      state.ratesError = ''
    });
    builder.addCase(getRates.fulfilled.type, (state, action: PayloadAction<[]>) => {
      state.ratesPending = false;
      state.ratesSuccess = true;
      state.rates = action.payload
    });
    builder.addCase(getRates.rejected.type, (state, action: PayloadAction<string>) => {
      state.ratesPending = false;
      state.ratesSuccess = false;
      state.ratesError = action.payload
    });
  }
});

export const {} = rateSlice.actions;
export default rateSlice.reducer;
