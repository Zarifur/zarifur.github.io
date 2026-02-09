import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

const WhatIDoCard = ({ title, subtitle, description, icon }: Props) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="
        relative
        bg-surface
        border border-border
        rounded-2xl
        p-7
        overflow-hidden
        group
      "
    >
      {/* Accent glow */}
      <div
        className="
        absolute inset-0
        bg-accent/10
        opacity-0
        group-hover:opacity-100
        transition
      "
      />

      <div className="relative z-10 space-y-3">
        <div className="flex items-center gap-4">
          <span className="text-3xl">{icon}</span>
          <div>
            <h3 className="text-lg font-bold text-primary">{title}</h3>
            <p className="text-sm text-accent font-medium">{subtitle}</p>
          </div>
        </div>

        <p className="text-secondary leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default WhatIDoCard;
