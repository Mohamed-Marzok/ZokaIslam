import { useEffect } from "react";

import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TDispatch, TState } from "../../../store/store";
import { getLocation, getTime } from "../../../store/locationAndTimeSlice";

export default function TimeAndCity() {
  const dispatch: TDispatch = useDispatch();
  const city = useSelector(
    (state: TState) => state.locationAndTime.location?.city
  );
  const currentTime = useSelector(
    (state: TState) => state.locationAndTime.time
  );
  useEffect(() => {
    dispatch(getLocation());
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getTime());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <p className="font-medium text-xl text-secondary">{currentTime}</p>
      <p className="font-bold text-2xl text-primary">
        {city ? city : <CircularProgress size={25} />}
      </p>
    </div>
  );
}
