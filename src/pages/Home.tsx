import { useTranslation } from "react-i18next";
import NavBar from "../components/navbar/NavBar";
import { Outlet } from "react-router";
import NavMenuForPhone from "../components/navbar/NavMenuForPhone";
import { useMediaQuery } from "@mui/material";

export default function Home() {
  const { i18n } = useTranslation();
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <div
      style={{
        direction: i18n.language === "ar" ? "rtl" : "ltr",
      }}
    >
      {matches ? <NavMenuForPhone /> : <NavBar />}
      <Outlet />
    </div>
  );
}
