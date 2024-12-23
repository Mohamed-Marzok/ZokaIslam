import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ILocation, IPrayerTimes } from "../interfaces";
import moment from "moment";

// Async thunk to fetch the Prayer data
export const getPrayer = createAsyncThunk(
  "prayer /getPrayer",
  async ({ city, countryCode }: ILocation) => {
    if (!city || !countryCode) {
      console.warn("City or country is missing. Skipping API request.");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${countryCode}`
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching prayer times:", error);
    }
  }
);

// Async thunk to fetch the Prayer In Ramadan data
export const getPrayerInRamadan = createAsyncThunk(
  "prayer /getPrayerInRamadan",
  async () => {
    try {
      const startDay = moment("2025-3-1");
      const endDay = moment("2025-3-30");
      const ramadanTimes: IPrayerTimes[] = [];

      for (
        let date = startDay.clone();
        date.isSameOrBefore(endDay);
        date.add(1, "day")
      ) {
        const response = await axios
          .get(
            `https://api.aladhan.com/v1/timingsByCity/${date.format(
              "DD-MM-YYYY"
            )}?city=Cairo&country=EG`
          )
          .catch((error) => {
            console.error(
              `Failed to fetch data for ${date.format("YYYY-MM-DD")}:`,
              error
            );
            return null;
          });
        if (response) {
          ramadanTimes.push(response.data.data);
        }
      }
      return ramadanTimes;
    } catch (error) {
      console.error("Error fetching Ramadan prayer times:", error);
      return [];
    }
  }
);

export const prayerSlice = createSlice({
  name: "prayer",
  initialState: {
    prayerTimes: null,
    ramadanTimes: undefined,
    loading: false,
    error: null,
  } as {
    prayerTimes: IPrayerTimes | null;
    ramadanTimes: IPrayerTimes[] | undefined;
    loading: boolean;
    error: string | null;
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPrayer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPrayer.fulfilled, (state, action) => {
        state.prayerTimes = action.payload;
        state.loading = false;
      })
      .addCase(getPrayer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching prayer times";
      })
      .addCase(getPrayerInRamadan.fulfilled, (state, action) => {
        state.ramadanTimes = action.payload;
      });
  },
});

export default prayerSlice.reducer;
