import { useState, useEffect } from "react";
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

export default function HeaderForPhone() {
  const dispatch: TDispatch = useDispatch();
  const active = useSelector((state: TState) => state.azkar.active);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY < 300) {
        setIsVisible(true);
      } else {
        setIsVisible(window.scrollY < lastScrollY); // Hide on scroll down, show on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`h-64 bg-gradient-to-b from-primary to-gray-700 p-2 shadow-lg dark:bg-gradient-to-b dark:from-primary-dark dark:to-gray-900 lg:hidden sticky top-0 z-50 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <p className="text-2xl font-bold text-secondary-dark mb-6 dark:text-accent">
        الفئات
      </p>
      <div className="flex w-screen flex-wrap">
        {categories.map((category, index) => (
          <p
            key={index}
            onClick={() => dispatch(setActive(category))}
            className={`text-lg h-fit p-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out dark:text-neutral-dark dark:hover:bg-primary dark:hover:text-white 
                ${
                  active === category
                    ? "bg-primary text-white dark:bg-primary-dark dark:text-white"
                    : "text-white hover:bg-primary hover:text-white"
                }
              `}
          >
            {category}
          </p>
        ))}
      </div>
    </div>
  );
}
