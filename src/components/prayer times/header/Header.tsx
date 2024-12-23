import ReminderPrayer from "./ReminderPrayer";
import TimeAndCity from "./TimeAndCity";

export default function Header() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2">
      <TimeAndCity />
      <ReminderPrayer />
    </div>
  );
}
