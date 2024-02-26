import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRateList } from "../../../utils/api";

export const getRates = createAsyncThunk('rate/getRates', getRateList)