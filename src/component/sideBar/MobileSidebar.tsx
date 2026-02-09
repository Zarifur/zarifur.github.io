import { motion } from "framer-motion";
import { Link } from "wouter";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import { useTheme } from "../../context/useTheme";

type Props = {
  location: string;
  onClose: () => void;
};

const navLinks = [
  { href: "/", label: "Home", icon: <HomeIcon /> },
  { href: "/about", label: "About Me", icon: <PersonIcon /> },
  { href: "/resume", label: "Resume", icon: <SchoolIcon /> },
  { href: "/contact", label: "Contact", icon: <EmailIcon /> },
];

const MobileSidebar = ({ location, onClose }: Props) => {
  const isActive = (href: string) => location === href;
  const { theme, setTheme } = useTheme();
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  return (
    <div className="flex flex-col h-full bg-surface text-primary">
      {/* PROFILE HEADER */}
      <div className="flex flex-col items-center py-8 border-b border-border">
        <div className="relative mb-4">
          <div className="absolute inset-0 rounded-full ring-4 ring-accent blur-md opacity-40 animate-pulse" />
          <img
            src={`${import.meta.env.BASE_URL}img/Zarif.jpg`}
            alt="Zarif Amir Sanad"
            className="relative w-28 h-28 rounded-full object-cover border-4 border-border"
          />
        </div>

        <h2 className="text-xl font-bold">Zarif Amir Sanad</h2>
        <p className="text-sm text-secondary">Full-stack Developer</p>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navLinks.map(({ href, label, icon }) => (
          <Link key={href} href={href} onClick={onClose}>
            <motion.div
              whileTap={{ scale: 0.97 }}
              className={`
                flex items-center gap-4 px-4 py-3 rounded-lg
                transition-colors
                ${
                  isActive(href)
                    ? "bg-accent/10 text-accent font-semibold"
                    : "text-secondary hover:text-accent hover:bg-accent/5"
                }
              `}
            >
              {icon}
              <span>{label}</span>
            </motion.div>
          </Link>
        ))}
      </nav>

      {/* THEME SWITCHER */}
      <div className="px-4 pb-4 border-t border-border">
        <button
          onClick={() => setShowThemeMenu((v) => !v)}
          className="
            w-full flex items-center gap-3
            px-4 py-3 mt-4
            rounded-lg
            border border-border
            text-secondary
            hover:text-accent hover:border-accent
            transition
          "
        >
          <SettingsIcon />
          <span className="font-medium">Theme</span>
        </button>

        {showThemeMenu && (
          <div className="mt-2 rounded-lg overflow-hidden border border-border">
            {(["light", "dark", "system"] as const).map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTheme(t);
                  setShowThemeMenu(false);
                }}
                className={`
                  w-full text-left px-4 py-2 text-sm capitalize
                  transition
                  ${
                    theme === t
                      ? "bg-accent/10 text-accent font-semibold"
                      : "text-secondary hover:bg-accent/5 hover:text-accent"
                  }
                `}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className="px-6 py-4 border-t border-border text-center text-xs text-muted">
        © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default MobileSidebar;
