import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const socialLinks = [
  {
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/zarif-amir/",
    label: "LinkedIn",
  },
  {
    Icon: GitHubIcon,
    href: "https://github.com/Zarifur",
    label: "GitHub",
  },
  {
    Icon: WhatsAppIcon,
    href: "https://wa.me/8801975393838",
    label: "WhatsApp",
  },
];

const ProfileSidebar = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full px-6 py-10 text-center">
      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center gap-6"
      >
        {/* AVATAR WITH ACCENT GLOW RING */}
        <motion.div whileHover={{ scale: 1.05 }} className="relative">
          {/* GLOW RING */}
          <div
            className="
              absolute inset-0 rounded-full
              ring-4 ring-accent
              blur-md opacity-40
              animate-pulse
            "
          />

          {/* IMAGE */}
          <img
            src={`${import.meta.env.BASE_URL}img/Zarif.jpg`}
            alt="Zarif Amir Sanad"
            className="
              relative
              w-56 h-56
              rounded-full
              object-cover
              border-4 border-border
              bg-surface
            "
          />
        </motion.div>

        {/* NAME & TITLE */}
        <div>
          <h1 className="text-3xl font-bold text-primary">Zarif Amir Sanad</h1>
          <h2 className="text-secondary">DevOps & Full-stack Developer</h2>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6">
          {socialLinks.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -3, scale: 1.15 }}
              transition={{ duration: 0.15 }}
              className="
                text-secondary
                hover:text-accent
                transition-colors
              "
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
          target="_blank"
          rel="noopener noreferrer"
          download
          className="
            mt-4 px-8 py-3
            border-2 border-accent
            text-accent
            rounded-full
            font-semibold
            hover:bg-accent hover:text-black
            transition-colors
          "
        >
          Download CV
        </motion.a>
      </motion.div>

      {/* FOOTER */}
      <footer className="text-sm text-muted">
        © {new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  );
};

export default ProfileSidebar;
