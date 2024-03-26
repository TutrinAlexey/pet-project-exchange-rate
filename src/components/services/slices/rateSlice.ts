import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getRates } from "../thunk/rateQuery";
import { TOptions } from "../../../utils/types/selectrateTypes";

type TInitialState = {
  rates: [] | null;
  ratesPending: boolean;
  ratesSuccess: boolean | null;
  ratesError: string;
  selectedValue: TOptions | null;
};
const initialState: TInitialState = {
  rates: [],
  ratesPending: false,
  ratesSuccess: null,
  ratesError: "",
  selectedValue: null,
};

const rateSlice = createSlice({
  name: "rate",
  initialState,
  reducers: {
    setSelectedValue: (state, action) => {
      state.selectedValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRates.pending.type, (state, action) => {
      state.ratesPending = true;
      state.ratesSuccess = false;
      state.ratesError = "";
    });
    builder.addCase(
      getRates.fulfilled.type,
      (state, action: PayloadAction<[]>) => {
        state.ratesPending = false;
        state.ratesSuccess = true;
        state.rates = action.payload;
      }
    );
    builder.addCase(
      getRates.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.ratesPending = false;
        state.ratesSuccess = false;
        state.ratesError = action.payload;
      }
    );
  },
});

export const { setSelectedValue } = rateSlice.actions;
export default rateSlice.reducer;
