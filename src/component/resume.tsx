import { motion } from "framer-motion";

interface Experience {
  date: string;
  title: string;
  subtitle: string;
  points: string[];
}

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  return (
    <motion.article
      key={`${exp.title}-${index}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="
        rounded-2xl
        border border-border
      
        p-6 md:p-8
        hover:border-accent/40 hover:shadow-xl
        transition
        focus:outline-none focus:ring-2 focus:ring-accent/30
      "
      tabIndex={0}
      aria-labelledby={`exp-title-${index}`}
      role="article"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] md:items-center gap-3 pb-4">
        <div className="min-w-0">
          <h4
            id={`exp-title-${index}`}
            className="text-xl md:text-2xl font-bold text-primary"
          >
            {exp.title}
          </h4>
          <p className="text-secondary truncate">{exp.subtitle}</p>
        </div>

        <div className="flex items-center md:ml-6">
          <span
            className="hidden md:inline-block w-px h-8 bg-border mr-4"
            aria-hidden="true"
          />
          <time
            className="text-lg text-accent whitespace-nowrap"
            dateTime={exp.date}
          >
            {exp.date}
          </time>
        </div>
      </div>

      <ul
        className="list-disc list-inside space-y-2 text-secondary leading-relaxed"
        role="list"
        aria-label={`${exp.title} responsibilities`}
      >
        {exp.points.map((point, idx) => (
          <li key={`${exp.title}-point-${idx}`}>{point}</li>
        ))}
      </ul>
    </motion.article>
  );
}

const Resume = () => {
  const experience = [
    {
      date: "Dec 2024 – Present",
      title: "Software Engineer",
      subtitle: "MNA Associates (BIFPCL – Rampal Power Plant)",
      points: [
        "Designing and developing a site-specific enterprise management system for BIFPCL.",
        "Building full-stack solutions including backend APIs, frontend interfaces, and database design.",
        "Leading end-to-end development from requirement analysis to deployment and maintenance.",
        "Collaborating with on-site engineers and administrative teams to translate operational needs into scalable software.",
        "Managing deployment pipelines, environment configuration, and production stability.",
      ],
    },
    {
      date: "Jan 2023 – Jun 2023",
      title: "Junior Software Engineer",
      subtitle: "Quad Theory Ltd.",
      points: [
        "Maintained and enhanced Sundarban, a car parts sales and management system.",
        "Developed and optimized inventory tracking and order processing modules.",
        "Improved backend logic, UI responsiveness, and overall system stability.",
        "Contributed to QT Sales & Inventory with stock tracking and sales analytics features.",
      ],
    },
  ];

  const skills = [
    {
      title: "DevOps & Cloud",
      items: [
        "Docker",
        "Docker Compose",
        "GitLab CI/CD",
        "GitHub Actions",
        "Nginx",
        "Linux",
      ],
    },
    {
      title: "Backend",
      items: [".NET Core 8", "Laravel", "REST APIs", "JWT", "ASP.NET Identity"],
    },
    {
      title: "Frontend",
      items: [
        "React.js",
        "AngularJS",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Databases",
      items: ["SQL Server", "MySQL"],
    },
    {
      title: "Architecture",
      items: [
        "N-Tier Architecture",
        "SOLID Principles",
        "MVC",
        "Repository Pattern",
        "Dependency Injection",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 text-primary">
      {/* PAGE TITLE */}
      <div className="pb-4">
        <h2 className="text-4xl font-bold">Resume</h2>
      </div>

      {/* EXPERIENCE */}
      <section className="py-8" aria-labelledby="experience-heading">
        <h3
          id="experience-heading"
          className="text-3xl font-bold flex items-center gap-2 pb-10 px-2"
        >
          Experience
          <span className="w-4 h-1 bg-accent rounded-full" />
        </h3>

        <div className="space-y-8 px-2">
          {experience.map((exp, i) => (
            <ExperienceCard key={`${exp.title}-${i}`} exp={exp} index={i} />
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-8">
        <h3 className="text-3xl font-bold flex items-center gap-2 pb-10 px-2">
          Skills
          <span className="w-4 h-1 bg-accent rounded-full" />
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="border border-border rounded-xl p-6"
            >
              <h4 className="font-semibold mb-4 text-accent">{group.title}</h4>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-sm underline underline-offset-4"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-8 px-2">
        <h3 className="text-3xl font-bold flex items-center gap-2 pb-10">
          Education
          <span className="w-4 h-1 bg-accent rounded-full" />
        </h3>

        <div className="border-l-2 border-border pl-6">
          <span className="text-sm text-gray-400">2019 – 2024</span>

          <h4 className="text-xl font-bold mt-1">
            BSc in Computer Science & Engineering
          </h4>

          <p className="text-secondary">
            American International University-Bangladesh
          </p>

          <p className="mt-3">
            GPA: <span className="font-bold text-accent">3.88 / 4.00</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
