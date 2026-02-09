import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="
        max-w-6xl mx-auto
        min-h-screen
        flex flex-col items-center justify-center
        text-center
        px-6
        bg-page
      "
    >
      {/* NAME */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold text-primary mb-4"
      >
        Zarif Amir Sanad
      </motion.h1>

      {/* ROLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-xl md:text-2xl text-secondary mb-6"
      >
        DevOps & Full-stack Developer
      </motion.h2>

      {/* TAGLINE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-2xl text-muted text-base md:text-lg mb-10"
      >
        I build scalable web applications, clean APIs, and thoughtful user
        experiences — from backend architecture to polished frontend interfaces.
      </motion.p>

      {/* CTA BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a
          href="/resume"
          className="
            px-8 py-3 rounded-full
            bg-accent text-black
            font-semibold
            hover:opacity-90
            transition
          "
        >
          View Resume
        </a>

        <a
          href="/contact"
          className="
            px-8 py-3 rounded-full
            border-2 border-accent
            text-accent
            font-semibold
            hover:bg-accent hover:text-black
            transition
          "
        >
          Contact Me
        </a>
      </motion.div>
    </motion.section>
  );
};

export default HomeSection;
