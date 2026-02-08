import { motion } from "framer-motion";

const calculateAge = () => {
  const birthDate = new Date("1999-10-04");
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // Adjust age if birthday hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
};

const AboutMe = () => {
  const age = calculateAge();
  return (
    <div className="flex flex-col w-full overflow-y-auto px-6 py-16 space-y-20 bg-page text-primary">
      {/* Top Row: Heading + About text + Info */}
      <div className="flex flex-col xl:flex-row justify-between items-start gap-12 pb-6">
        {/* Left: Heading + About Text */}
        <motion.div
          className="w-full xl:w-[60%] max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold pb-6">
            About <span className="text-accent">Me</span>
          </h1>
          <p className="text-lg mb-4 leading-relaxed text-secondary">
            Full-Stack Developer with hands-on experience in .NET, PHP,
            JavaScript, ReactJS, and AngularJS. Proven track record of building
            scalable, responsive web applications and managing complex software
            systems. Skilled at crafting efficient solutions aligned with
            business requirements, with a strong focus on clean architecture,
            UI/UX best practices, and collaborative development.
          </p>
        </motion.div>

        {/* Right: Personal Info */}

        <aside className="w-full xl:w-[30%] rounded-2xl space-y-4 text-base pt-13 text-primary">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-2 text-secondary">
              <p className="pb-4">
                <span className="font-bold text-accent">Age:</span>
                <span className="pl-2">{age}</span>
              </p>
              <p className="pb-4">
                <span className="font-bold text-accent">Residence:</span>
                <span className="pl-2">Bangladeshi</span>
              </p>
              <p className="pb-4">
                <span className="font-bold text-accent">Address:</span>
                <span className="pl-2">Munshigonj,Dhaka</span>
              </p>
              <p className="pb-4">
                <span className="font-bold text-accent">E-mail:</span>
                <span className="pl-2">zarifsanad@gmail.com</span>
              </p>
              <p className="pb-4">
                <span className="font-bold text-accent">Phone:</span>
                <span className="pl-2">+880 197539-3838</span>
              </p>
            </div>
          </motion.div>
        </aside>
      </div>

      {/* What I Do Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold pb-10">
          What <span className="text-accent">I Do</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Full-Stack Web Development */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-start gap-4 bg-surface p-6 rounded-2xl border border-border"
          >
            <svg
              className="w-8 h-8 text-accent flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
            <div>
              <h3 className="font-bold mb-2 text-primary">
                {" "}
                Full-Stack Web Development
              </h3>
              <p className="text-secondary">
                Developing scalable web applications with .NET, Laravel, React,
                and Angular, combining responsive front-ends with secure,
                high-performance back-ends.
              </p>
            </div>
          </motion.div>

          {/* Database & Backend Systems */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-start gap-4 bg-surface p-6 rounded-2xl border border-border"
          >
            <svg
              className="w-8 h-8 text-accent flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z" />
            </svg>
            <div>
              <h3 className="font-bold mb-2 text-primary">
                Database & Backend Systems
              </h3>
              <p className="text-secondary">
                Designing robust MySQL, PostgreSQL and SQL Server databases with
                efficient, secure back-end architectures to ensure scalability
                and performance.
              </p>
            </div>
          </motion.div>

          {/* API Design & Integration */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-start gap-4 bg-surface p-6 rounded-2xl border border-border"
          >
            <svg
              className="w-8 h-8 text-accent flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 6 L18 18 M6 18 L18 6" />
            </svg>
            <div>
              <h3 className="font-bold mb-2 text-primary">
                API Design & Integration
              </h3>
              <p className="text-secondary">
                Creating secure RESTful APIs with versioning, authentication,
                and seamless third-party integrations for reliable system
                communication.
              </p>
            </div>
          </motion.div>

          {/*  CI/CD & DevOps */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-start gap-4 bg-surface p-6 rounded-2xl border border-border"
          >
            <svg
              className="w-8 h-8 text-accent flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 4 L4 20 L20 20 Z" />
            </svg>
            <div>
              <h3 className="font-bold mb-2 text-primary"> CI/CD & DevOps</h3>
              <p className="text-secondary">
                Automating deployments with CI/CD pipelines and Docker, ensuring
                consistent, streamlined releases aligned with modern DevOps
                practices.
              </p>
            </div>
          </motion.div>

          {/* UI/UX & Responsive Design */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-start gap-4 bg-surface p-6 rounded-2xl border border-border"
          >
            <svg
              className="w-8 h-8 text-accent flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
            <div>
              <h3 className="font-bold mb-2 text-primary">
                {" "}
                UI/UX & Responsive Design
              </h3>
              <p className="text-secondary">
                Crafting intuitive, responsive user interfaces with Tailwind CSS
                and modern JavaScript frameworks for engaging cross-device
                experiences.
              </p>
            </div>
          </motion.div>

          {/* Project Management & Collaboration */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-start gap-4 bg-surface p-6 rounded-2xl border border-border"
          >
            <svg
              className="w-8 h-8 text-accent flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z" />
            </svg>
            <div>
              <h3 className="font-bold mb-2 text-primary">
                Project Management & Collaboration
              </h3>
              <p className="text-secondary">
                Coordinating with teams to gather requirements, define scopes,
                and deliver projects on time with clear communication.
              </p>
            </div>
          </motion.div>

          {/*  System Architecture & Design Patterns */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-start gap-4 bg-surface p-6 rounded-2xl border border-border"
          >
            <svg
              className="w-8 h-8 text-accent flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 6 L18 18 M6 18 L18 6" />
            </svg>
            <div>
              <h3 className="font-bold mb-2 text-primary">
                {" "}
                System Architecture & Design Patterns
              </h3>
              <p className="text-secondary">
                Implementing N-tier architectures, SOLID principles, and proven
                patterns for modular, maintainable, and scalable systems.
              </p>
            </div>
          </motion.div>

          {/*  Authentication & Security */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-start gap-4 bg-surface p-6 rounded-2xl border border-border"
          >
            <svg
              className="w-8 h-8 text-accent flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 4 L4 20 L20 20 Z" />
            </svg>
            <div>
              <h3 className="font-bold mb-2 text-primary">
                {" "}
                Authentication & Security
              </h3>
              <p className="text-secondary">
                Developing secure authentication and authorization solutions
                with OAuth2, JWT, and ASP.NET Identity to protect user data.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
