import { RootState } from "../../../utils/types/hooksTypes";

export const getRatesArray = (state: RootState) => state.rate.rates;
export const getRatesPending = (state: RootState) => state.rate.ratesPending;
export const getRatesSuccess = (state: RootState) => state.rate.ratesSuccess;
export const getRatesError = (state: RootState) => state.rate.ratesError;
