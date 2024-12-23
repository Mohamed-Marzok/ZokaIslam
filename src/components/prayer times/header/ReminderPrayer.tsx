import { useEffect, useState } from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { TState } from "../../../store/store";

type ActiveState = {
  name: string;
  reminder: string;
};

export default function ReminderPrayer() {
  const timings = useSelector(
    (state: TState) => state.prayer.prayerTimes?.timings
  );
  const [active, setActive] = useState<ActiveState>({ name: "", reminder: "" });

  const { t } = useTranslation();

  const activeFun = () => {
    if (!timings) return;

    const currentTime = moment();
    const fajr = moment(timings.Fajr, "HH:mm");
    const dhuhr = moment(timings.Dhuhr, "HH:mm");
    const asr = moment(timings.Asr, "HH:mm");
    const maghrib = moment(timings.Maghrib, "HH:mm");
    const isha = moment(timings.Isha, "HH:mm");

    const formatDuration = (duration: moment.Duration) => {
      const hours = Math.floor(duration.asHours());
      const minutes = duration.minutes();
      const seconds = duration.seconds();
      return `${hours}:${minutes}:${seconds}`;
    };

    // Determine the next prayer based on current time
    let nextPrayer = "";
    let nextPrayerTime = moment();

    if (currentTime.isBefore(fajr)) {
      nextPrayer = "Fajr";
      nextPrayerTime = fajr;
    } else if (currentTime.isBefore(dhuhr)) {
      nextPrayer = "Dhuhr";
      nextPrayerTime = dhuhr;
    } else if (currentTime.isBefore(asr)) {
      nextPrayer = "Asr";
      nextPrayerTime = asr;
    } else if (currentTime.isBefore(maghrib)) {
      nextPrayer = "Maghrib";
      nextPrayerTime = maghrib;
    } else if (currentTime.isBefore(isha)) {
      nextPrayer = "Isha";
      nextPrayerTime = isha;
    } else {
      nextPrayer = "Fajr";
      nextPrayerTime = fajr.add(1, "day");
    }

    // Calculate the time remaining until the next prayer
    const duration = moment.duration(nextPrayerTime.diff(currentTime));
    setActive({
      name: nextPrayer,
      reminder: formatDuration(duration),
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      activeFun();
    }, 1000);

    return () => clearInterval(interval);
  }, [timings]);

  return (
    <div>
      {active.name !== "" ? (
        <>
          <p className="font-bold text-2xl text-secondary">{`${t(
            "Reminder"
          )} ${t(active.name)}`}</p>
          <p className="font-bold text-2xl text-neutral">{active.reminder}</p>
        </>
      ) : (
        <CircularProgress color="warning" />
      )}
    </div>
  );
}
