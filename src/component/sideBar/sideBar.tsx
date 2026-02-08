import { Link, useLocation } from "wouter";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import { useTheme } from "../../context/useTheme";

const navLinks = [
  { href: "/", label: "Home", icon: <HomeIcon /> },
  { href: "/about", label: "About Me", icon: <PersonIcon /> },
  { href: "/resume", label: "Resume", icon: <SchoolIcon /> },
  { href: "/contact", label: "Contact", icon: <EmailIcon /> },
];

const Sidebar = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const isActive = (href: string) => location === href;

  const mobileVariants: Variants = {
    hidden: { x: "100%" },
    show: {
      x: 0,
      transition: { type: "spring", stiffness: 90 },
    },
    exit: { x: "100%" },
  };

  const sidebarVariants: Variants = {
    hidden: { x: -80, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {/* DESKTOP SIDEBAR */}
<motion.aside
  initial="hidden"
  animate="show"
  variants={sidebarVariants}
  className="
    hidden lg:flex
    h-screen
    w-[320px] xl:w-[360px]
    bg-surface
    text-primary
    z-40
    shrink-0
  "
>
        <div className="flex w-full">
          {/* ICON NAV */}
          <nav className="flex flex-col items-center justify-between w-20 bg-surfaceMuted py-6 space-y-4 h-full">
            {/* Navigation Links */}
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map(({ href, label, icon }) => {
                const isActive = location === href;
                return (
                  <Link key={href} href={href}>
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex flex-col items-center justify-center py-3 w-full ${
                        isActive ? "text-accent" : "text-secondary"
                      }`}
                    >
                      {icon}
                      <span className="text-xs font-semibold">{label}</span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* THEME TOGGLE - Bottom Left */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.85 }}
                onMouseEnter={() => setShowThemeMenu(true)}
                onMouseLeave={() => setShowThemeMenu(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:border-accent transition"
              >
                <SettingsIcon />
              </motion.button>

              {/* Theme Menu */}
              <AnimatePresence>
                {showThemeMenu && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setShowThemeMenu(true)}
                    onMouseLeave={() => setShowThemeMenu(false)}
                    className="absolute bottom-12 left-0 bg-surface border border-border rounded-lg shadow-lg overflow-hidden"
                  >
                    {(["light", "dark", "system"] as const).map((t) => (
                      <motion.button
                        key={t}
                        whileHover={{
                          backgroundColor: "rgba(34, 211, 238, 0.1)",
                        }}
                        onClick={() => {
                          setTheme(t);
                          setShowThemeMenu(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm capitalize border-b border-border last:border-b-0 transition ${
                          theme === t
                            ? "text-accent font-semibold"
                            : "text-secondary"
                        }`}
                      >
                        {t}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* PROFILE COLUMN */}
          <div className="flex flex-col justify-between h-full w-full px-6 py-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-6"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={`${import.meta.env.BASE_URL}img/Zarif.jpg`}
                alt="Profile"
                className="w-56 h-56 rounded-full border-4 border-border object-cover"
              />

              <div>
                <h1 className="text-3xl font-bold text-primary">
                  Zarif Amir Sanad
                </h1>
                <h2 className="text-secondary">Full-stack Developer</h2>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex gap-6">
                {[LinkedInIcon, GitHubIcon, WhatsAppIcon].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="text-secondary hover:text-accent transition"
                  >
                    <Icon fontSize="large" />
                  </motion.a>
                ))}
              </div>

              {/* DOWNLOAD CV */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`${import.meta.env.BASE_URL}files/Zarif_Amir_Sanad.pdf`}
                download
                className="mt-4 px-8 py-3 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-black transition"
              >
                Download CV
              </motion.a>
            </motion.div>

            <footer className="text-sm text-muted">
              © 2025 All rights reserved.
            </footer>
          </div>
        </div>
      </motion.aside>

      {/* MOBILE TOGGLE */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-accent rounded-full text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </motion.button>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-surface text-primary z-40 p-6"
              variants={mobileVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <h1 className="text-2xl font-bold mb-6">Zarif Amir Sanad</h1>

              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href} onClick={() => setIsOpen(false)}>
                  <motion.div
                    whileHover={{ x: 3 }}
                    className={`py-3 text-lg border-b border-border transition-colors
    ${
      isActive(href)
        ? "text-accent hover:opacity-80"
        : "text-secondary hover:text-accent"
    }
  `}
                  >
                    {label}
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
