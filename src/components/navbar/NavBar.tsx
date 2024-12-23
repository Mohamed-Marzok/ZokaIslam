import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

export default function NavBar() {
  const { t } = useTranslation();

  const active = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "underline underline-offset-8 text-primary" : "";
  };

  return (
    <div className="flex items-center shadow-md xl:px-4 py-2 justify-between">
      <div className="flex items-center gap-5">
        <img
          className="w-12"
          src="https://cdn.pixabay.com/photo/2024/02/29/05/53/ai-generated-8603446_640.png"
          alt="Logo"
        />
        <NavLink
          className={(props) => `${active(props)} font-semibold text-nowrap`}
          to="/"
        >
          {t("Prayer Times")}
        </NavLink>
        <NavLink
          className={(props) => `${active(props)} font-semibold text-nowrap`}
          to="/azkar"
        >
          {t("Azkar")}
        </NavLink>
        <NavLink
          className={(props) => `${active(props)} font-semibold text-nowrap`}
          to="/masbaha"
        >
          {t("Masbaha")}
        </NavLink>
        <NavLink
          className={(props) => `${active(props)} font-semibold text-nowrap`}
          to="/ramadan"
        >
          {t("Ramadan")}
        </NavLink>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </div>
  );
}
