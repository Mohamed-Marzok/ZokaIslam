import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function NavMenuForPhone() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex flex-col items-center shadow-md xl:px-4 p-2 justify-between">
      <div className="flex items-center justify-between w-full">
        <img
          className="w-12"
          src="https://cdn.pixabay.com/photo/2024/02/29/05/53/ai-generated-8603446_640.png"
          alt="Logo"
        />
        {/* Hamburger Icon Button for Mobile */}
        <IconButton
          edge="start"
          className="block xl:hidden"
          color="inherit"
          aria-label="menu"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </IconButton>
      </div>

      {/* MUI Drawer (floating menu opening from the top) */}
      <Drawer
        anchor="top"
        open={isMenuOpen}
        onClose={toggleMenu}
        PaperProps={{
          style: {
            width: "100%",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div className="bg-background text-primary dark:bg-background-dark   p-3">
          <List>
            <ListItem component={NavLink} to="/" onClick={toggleMenu}>
              <ListItemText primary={t("Prayer Times")} />
            </ListItem>
            <ListItem component={NavLink} to="/azkar" onClick={toggleMenu}>
              <ListItemText primary={t("Azkar")} />
            </ListItem>
            <ListItem component={NavLink} to="/masbaha" onClick={toggleMenu}>
              <ListItemText primary={t("Masbaha")} />
            </ListItem>
            <ListItem component={NavLink} to="/ramadan" onClick={toggleMenu}>
              <ListItemText primary={t("Ramadan")} />
            </ListItem>
          </List>
          <div className="flex gap-4 mt-4">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
