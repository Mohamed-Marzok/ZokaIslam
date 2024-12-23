import { useDispatch, useSelector } from "react-redux";
import { TDispatch, TState } from "../../store/store";
import { setActive } from "../../store/azkarSlice";

const categories = [
  "أدعية الأنبياء",
  "أدعية قرآنية",
  "أذكار الاستيقاظ",
  "أذكار الصباح",
  "أذكار المساء",
  "أذكار النوم",
  "أذكار بعد السلام من الصلاة المفروضة",
  "تسابيح",
];

export default function SideBar() {
  const dispatch: TDispatch = useDispatch();
  const active = useSelector((state: TState) => state.azkar.active);

  return (
    <div className="h-full bg-gradient-to-b from-primary to-secondary p-4 shadow-lg rounded-lg dark:bg-gradient-to-b dark:from-primary-dark dark:to-gray-900 mt-5 hidden lg:block">
      <div className="w-full max-w-xs bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
        <h2 className="text-2xl font-bold text-primary mb-6 dark:text-accent">
          الفئات
        </h2>
        <ul className="space-y-4">
          {categories.map((category, index) => (
            <li
              onClick={() => dispatch(setActive(category))}
              key={index}
              className={`text-lg p-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out dark:text-neutral-dark dark:hover:bg-primary dark:hover:text-white 
                ${
                  active === category
                    ? "bg-primary text-white dark:bg-primary-dark dark:text-white"
                    : "text-neutral hover:bg-primary hover:text-white"
                } // Default category styles
              `}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
