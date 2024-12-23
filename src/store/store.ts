import { configureStore } from "@reduxjs/toolkit";
import azkarReducer from "./azkarSlice";
import locationAndTimeReducer from "./locationAndTimeSlice";
import prayerReducer from "./prayerSlice";

const store = configureStore({
  reducer: {
    azkar: azkarReducer,
    locationAndTime: locationAndTimeReducer,
    prayer: prayerReducer,
  },
});

export type TState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;

export default store;
