import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import PrayerSkeleton from "./PrayerSkeleton";
import { TDispatch, TState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { getPrayer } from "../../store/prayerSlice";
interface IPrayerImgs {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}
const prayerNames = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];
const prayerIamges: IPrayerImgs = {
  Fajr: "https://cdn.pixabay.com/photo/2024/02/10/08/45/ramadan-8564369_640.png",
  Sunrise:
    "https://cdn.pixabay.com/photo/2022/07/02/02/46/badge-7296525_640.png",
  Dhuhr: "https://cdn.pixabay.com/photo/2013/07/13/12/12/sun-159392_640.png",
  Asr: "https://cdn.pixabay.com/photo/2019/06/25/06/26/mosque-4297544_640.png",
  Maghrib:
    "https://cdn.pixabay.com/photo/2017/08/30/14/08/black-shadow-2697238_640.png",
  Isha: "https://cdn.pixabay.com/photo/2017/03/23/17/02/night-2168868_640.png",
};
export default function AllPrayerCards() {
  const location = useSelector(
    (state: TState) => state.locationAndTime.location
  );
  const data = useSelector(
    (state: TState) => state.prayer.prayerTimes?.timings
  );
  const loading = useSelector((state: TState) => state.prayer.loading);
  const dispatch: TDispatch = useDispatch();

  useEffect(() => {
    if (location?.city && location?.countryCode) {
      dispatch(
        getPrayer({ city: location.city, countryCode: location.countryCode })
      );
    }
  }, [location, dispatch]);

  const { t } = useTranslation();

  return (
    <div className="lg:mt-20 mt-8">
      <h3 className="text-xl font-bold text-accent text-center mb-4">
        {t("Prayer Times")}
      </h3>
      {loading ? (
        <PrayerSkeleton />
      ) : data ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-5 items-center justify-center">
          {Object.entries(data)
            .filter(([p]) => prayerNames.includes(p))
            .map(([prayer, time]: [string, string]) => (
              <div
                key={prayer}
                className="shadow p-2 w-fit rounded-md dark:bg-gray-600"
              >
                <img
                  className="h-36 w-56"
                  src={prayerIamges[prayer as keyof IPrayerImgs]}
                />
                <div>
                  <p className="font-bold text-2xl mb-1 text-primary">
                    {t(prayer)}
                  </p>
                  <p className="font-semibold text-lg text-neutral dark:text-white">
                    {+time.slice(0, 2) > 12
                      ? `${+time.slice(0, 2) - 12}${time.slice(2)} ${t("PM")}`
                      : `${time} ${t("AM")}`}
                  </p>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="text-center">{t("No prayer times available")}</div>
      )}
    </div>
  );
}
