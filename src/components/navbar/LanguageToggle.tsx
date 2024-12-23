import { IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  // Toggle language between 'en' and 'ar'
  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <IconButton
      onClick={changeLanguage}
      className="dark:text-white"
      aria-label="Toggle language"
    >
      <TranslateRoundedIcon />
    </IconButton>
  );
}
