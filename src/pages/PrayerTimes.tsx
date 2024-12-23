import Header from "../components/prayer times/header/Header";
import AllPrayerCards from "../components/prayer times/AllPrayerCards";

export default function PrayerTimes() {
  return (
    <div className="container mx-auto mt-8">
      <Header />
      <AllPrayerCards />
    </div>
  );
}
