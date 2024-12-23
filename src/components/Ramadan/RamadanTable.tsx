import { useDispatch, useSelector } from "react-redux";
import { TDispatch, TState } from "../../store/store";
import { useEffect } from "react";
import { getPrayerInRamadan } from "../../store/prayerSlice";
import { useTranslation } from "react-i18next";

// List of prayer names for the table headers
const prayerTimesList = [
  "Fajr",
  "Sunrise",
  "Dhuhr",
  "Asr",
  "Maghrib",
  "Isha",
  "Imsak",
];

export default function RamadanPrayerTimesTable() {
  // Access the Ramadan prayer times data from Redux store
  const ramadanPrayerTimes = useSelector(
    (state: TState) => state.prayer.ramadanTimes
  );

  const dispatch: TDispatch = useDispatch();
  const { t } = useTranslation();

  // Fetch Ramadan prayer times when the component is mounted
  useEffect(() => {
    console.log("Fetching Ramadan prayer times...");
    dispatch(getPrayerInRamadan());
  }, [dispatch]);

  return (
    <div className="container mx-auto my-2">
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg ">
        <div
          className="overflow-auto"
          style={{ height: "calc(100vh - 125px)" }}
        >
          <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-300 ">
            <thead className="bg-blue-600 text-white dark:bg-blue-800">
              <tr>
                <th className="px-6 py-3 sticky top-0 bg-blue-600 dark:bg-blue-800 z-10">
                  {t("Hijri Date")}
                </th>
                <th className="px-6 py-3 sticky top-0 bg-blue-600 dark:bg-blue-800 z-10">
                  {t("Day")}
                </th>
                <th className="px-6 py-3 sticky top-0 bg-blue-600 dark:bg-blue-800 z-10">
                  {t("Gregorian Date")}
                </th>
                {prayerTimesList.map((prayerName) => (
                  <th
                    key={prayerName}
                    className="px-6 py-3 sticky top-0 bg-blue-600 dark:bg-blue-800 z-10"
                  >
                    {t(prayerName)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ramadanPrayerTimes?.map((prayerData) => (
                <tr
                  key={prayerData.date.hijri.day}
                  className="border-b hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white"
                >
                  <td className="px-6 py-4">{`${prayerData.date.hijri.day} ${prayerData.date.hijri.month.ar}`}</td>
                  <td className="px-6 py-4">
                    {prayerData.date.hijri.weekday.ar}
                  </td>
                  <td className="px-6 py-4">{prayerData.date.readable}</td>
                  {Object.entries(prayerData.timings)
                    .filter(([prayerName]) =>
                      prayerTimesList.includes(prayerName)
                    )
                    .map(([prayerName, prayerTime]) => (
                      <td key={prayerName} className="px-6 py-4">
                        {prayerTime}
                      </td>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
