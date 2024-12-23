import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IAZkar } from "../interfaces";

// Async thunk to fetch the public Azkar data
export const getPuplicAzkar = createAsyncThunk<IAZkar>(
  "azkar/getPuplicAzkar",
  async () => {
    const response = await axios.get(
      "https://raw.githubusercontent.com/nawafalqari/ayah/refs/heads/main/src/data/adkar.json"
    );
    console.log(response.data);
    return response.data;
  }
);

export const azkarSlice = createSlice({
  name: "azkar",
  initialState: {
    azkar: null as IAZkar | null,
    active: "أدعية الأنبياء",
  } as {
    azkar: IAZkar | null;
    active: keyof IAZkar;
  },
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPuplicAzkar.fulfilled, (state, action) => {
      state.azkar = action.payload;
    });
  },
});
export const { setActive } = azkarSlice.actions;
export default azkarSlice.reducer;
