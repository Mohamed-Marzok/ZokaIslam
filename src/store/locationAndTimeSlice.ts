import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ILocation } from "../interfaces";
import moment from "moment";

// Async thunk to fetch the location data
export const getLocation = createAsyncThunk(
  "locationAndTime/getLocation",
  async () => {
    const ipResponse = await axios.get("https://api.ipify.org?format=json");
    const ip = ipResponse.data.ip;

    const locationResponse = await axios.get(`http://ip-api.com/json/${ip}`);
    return locationResponse.data;
  }
);

export const locationAndTimeSlice = createSlice({
  name: "locationAndTime",
  initialState: {
    location: {
      city: "",
      countryCode: "",
    },
    time: "",
  } as {
    location: ILocation;
    time: string;
  },
  reducers: {
    getTime: (state) => {
      state.time = moment().format("LLLL");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLocation.fulfilled, (state, action) => {
      state.location = action.payload;
    });
  },
});
export const { getTime } = locationAndTimeSlice.actions;
export default locationAndTimeSlice.reducer;
