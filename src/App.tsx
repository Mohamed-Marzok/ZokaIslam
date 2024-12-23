import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import PrayerTimes from "./pages/PrayerTimes";
import Azkar from "./pages/Azkar";
import Masbaha from "./pages/Masbaha";
import RamadanTable from "./components/Ramadan/RamadanTable";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<PrayerTimes />} />
          <Route path="azkar" element={<Azkar />} />
          <Route path="masbaha" element={<Masbaha />} />
          <Route path="ramadan" element={<RamadanTable />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
