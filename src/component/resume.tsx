import { motion } from "framer-motion";

const Resume = () => {
  const education = [
    {
      date: "2019 – 2024",
      title: "Bachelor of Science in Computer Science & Engineering",
      subtitle: "American International University-Bangladesh (AIUB)",
      description:
        "Graduated with a CGPA of [bold]3.88[/bold]/4.00, focusing on modern software engineering, data structures, algorithms, and full-stack web development.",
    },
    {
      date: "2019",
      title: "Higher Secondary Certificate (HSC)",
      subtitle: "Government Haraganga College",
      description:
        "Completed higher secondary education with emphasis on science subjects, laying the foundation for future studies in technology.",
    },
    {
      date: "2016",
      title: "Secondary School Certificate (SSC)",
      subtitle: "Secondary School Certificate",
      description:
        "Completed secondary education, specializing in science and mathematics.",
    },
  ];

  const experience = [
    {
      date: "Dec 2024 – Present",
      title: "Software Engineer",
      subtitle: "MNA Associates (Deployed to BIFPCL – Rampal Power Plant)",
      description: [
        "Leading the design and development of a comprehensive management software system tailored to BIFPCL’s on-site operational needs.",
        "Collaborating closely with engineers and administrative staff to gather detailed requirements and translate them into effective software solutions.",
        "Implementing modern, scalable architecture to ensure system performance and maintainability.",
        "Overseeing the deployment and ongoing maintenance of the platform, ensuring high availability and alignment with real-world workflows.",
        "Introducing automated testing and deployment practices to improve development efficiency and reduce downtime.",
      ],
    },
    {
      date: "Jan 2023 – Jun 2023",
      title: "Software Engineer Intern → Junior Software Engineer",
      subtitle: "Quad Theory Ltd.",
      description: [
        "Enhanced and maintained Sundarban, a car parts sales and management system, adding new features and fixing bugs to improve reliability.",
        "Designed and developed new modules for inventory tracking, optimizing the process for faster and more accurate stock updates.",
        "Worked closely with the UI/UX team to improve responsiveness and user experience across the application.",
        "Contributed to QT Sales & Inventory by implementing product entry workflows, tracking stock movements, and developing sales analytics dashboards.",
        "Collaborated in an agile team environment, participating in sprint planning and code reviews to ensure high-quality deliverables.",
      ],
    },
  ];

  const skillsData = [
    {
      title: "Languages",
      items: ["C#", "PHP", "JavaScript", "Python", "SQL", "HTML"],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        "Laravel",
        ".NET",
        "React.js",
        "Next.js",
        "AngularJS",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Databases",
      items: ["MySQL", "SQL Server"],
    },
    {
      title: "Tools & Platforms",
      items: ["Docker", "Docker Compose", "Git", "GitLab", "Nginx"],
    },
    {
      title: "Version Control & DevOps",
      items: ["Git", "GitLab CI/CD", "Docker Compose"],
    },
    {
      title: "Web Technologies",
      items: ["REST APIs", "Responsive UI Design"],
    },
    {
      title: "Authentication",
      items: ["OAuth2", "JWT", "Laravel Sanctum/Passport", "ASP.NET Identity"],
    },
    {
      title: "API Design & Integration",
      items: [
        "RESTful APIs",
        "GraphQL (basic)",
        "API versioning",
        "Pagination",
      ],
    },
    {
      title: "Architecture",
      items: [
        "N-tier Architecture",
        "SOLID Principles",
        "MVC",
        "Repository Pattern",
        "Dependency Injection",
        "Separation of Concerns",
      ],
    },
    {
      title: "Deployment & CI/CD",
      items: [
        "CI/CD pipelines (GitLab CI, GitHub Actions)",
        "Docker",
        "Nginx",
        "Environment Configuration",
      ],
    },
  ];

  // const designSkills = [
  //   { name: "Web Design", level: "95%" },
  //   { name: "Print Design", level: "65%" },
  //   { name: "Logo Design", level: "80%" },
  //   { name: "Graphic Design", level: "90%" },
  // ];

  // const codingSkills = [
  //   { name: "JavaScript", level: "95%" },
  //   { name: "PHP", level: "85%" },
  //   { name: "HTML/CSS", level: "100%" },
  //   { name: "Smarty/Twig", level: "75%" },
  //   { name: "Perl", level: "90%" },
  // ];

  return (
    <>
      <div className="w-full px-4 py-8 md:px-8 md:py-12 bg-page text-primary">
        <h2 className="text-4xl font-bold pb-12 text-primary">Resume</h2>

        {/* Experience */}
        <section className="relative pb-10 ">
          <h3 className="text-3xl font-bold pb-8 text-primary flex items-center gap-2">
            Experience
            <span className="w-4 h-1 bg-accent rounded-full" />
          </h3>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[11.75rem] transform -translate-x-1/2 w-0.5 bg-border" />
            {experience.map((item, idx) => (
              <div key={idx} className="flex flex-row relative pb-5">
                {/* Date & subtitle column */}
                <div className="w-44 flex-shrink-0 text-right pr-4 pt-1.5">
                  <div className="text-sm font-bold text-gray-300 whitespace-nowrap">
                    {item.date}
                  </div>
                  <div className="text-gray-400 text-sm">{item.subtitle}</div>
                </div>

                {/* Timeline line + dot */}
                <div className="relative pr-6  flex flex-col ">
                  {/* Full-height vertical line */}
                  {/* <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-600" /> */}

                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 pt-2">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pl-3">
                  <h4 className="text-lg font-bold pb-2 text-primary">
                    {item.title}
                  </h4>
                  <motion.ul
                    className="list-disc list-inside text-secondary  text-base leading-relaxed space-y-1"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: { staggerChildren: 0.15 },
                      },
                    }}
                  >
                    {item.description.map((point, i) => (
                      <motion.li
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative pb-10 ">
          <h3 className="text-3xl font-bold pb-8 text-primary flex items-center gap-2">
            Skills
            <span className="w-4 h-1 bg-accent rounded-full" />
          </h3>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[11.75rem] transform -translate-x-1/2 w-0.5 bg-gray-600" />
            {skillsData.map((item, idx) => (
              <div key={idx} className="flex flex-row relative pb-5">
                {/* Date & subtitle column */}
                <div className="w-44 flex-shrink-0 text-right pr-4 pt-1.5">
                  <div className="text-sm font-bold text-gray-300 whitespace-nowrap">
                    {item.title}
                  </div>
                </div>

                {/* Timeline line + dot */}
                <div className="relative pr-6  flex flex-col ">
                  {/* Full-height vertical line */}
                  {/* <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-600" /> */}

                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 pt-2">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pl-3">
                  <motion.div
                    className="flex flex-wrap gap-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: { staggerChildren: 0.1 },
                      },
                    }}
                  >
                    {item.items.map((point, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="text-accent font-medium underline underline-offset-4 decoration-1"
                      >
                        {point}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-10">
          <h3 className="text-3xl font-bold pb-8 text-primary flex items-center gap-2">
            Education
            <span className="w-4 h-1 bg-accent rounded-full" />
          </h3>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[11.75rem] transform -translate-x-1/2 w-0.5 bg-gray-600" />
            {education.map((item, idx) => (
              <div key={idx} className="flex pb-5 relative">
                {/* Date column */}
                <div className="w-44 flex-shrink-0 text-right pr-4 pt-1.5">
                  <div className="text-sm font-bold text-gray-300 whitespace-nowrap">
                    {item.date}
                  </div>
                  <div className="text-gray-400 text-sm">{item.subtitle}</div>
                </div>

                {/* Timeline line */}
                <div className="relative pr-6  flex flex-col ">
                  {/* Full-height vertical line */}
                  {/* <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-600 h-[6rem]" /> */}

                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 pt-2">
                    <div className="w-4 h-4 rounded-full bg-cyan-400/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pl-3">
                  <h4 className="text-lg font-bold pb-1 text-primary">
                    {item.title}
                  </h4>
                  <p className="text-secondary text-sm leading-relaxed">
                    {item.description
                      .split(/(\[bold\].*?\[\/bold\])/g)
                      .map((part, idx) => {
                        if (
                          part.startsWith("[bold]") &&
                          part.endsWith("[/bold]")
                        ) {
                          const content = part
                            .replace("[bold]", "")
                            .replace("[/bold]", "");
                          return (
                            <span key={idx} className="font-bold text-accent">
                              {content}
                            </span>
                          );
                        }
                        return part;
                      })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Resume;
