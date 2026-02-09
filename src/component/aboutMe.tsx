import { motion } from "framer-motion";
import WhatIDoCard from "./UI/WhatIDoCard";

const calculateAge = () => {
  const birthDate = new Date("1999-10-04");
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
};

const AboutMe = () => {
  const age = calculateAge();

  return (
    <div className="flex flex-col w-full overflow-y-auto px-6 py-16 space-y-24 bg-page text-primary">
      {/* ABOUT HEADER */}
      <div className="flex flex-col xl:flex-row justify-between gap-14">
        {/* LEFT CONTENT */}
        <motion.div
          className="w-full xl:w-[60%] max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-6">
            About <span className="text-accent">Me</span>
          </h1>

          <p className="text-lg leading-relaxed text-secondary">
            DevOps & Full-Stack Developer with hands-on experience building,
            deploying, and maintaining scalable production systems. Strong
            background in{" "}
            <span className="text-primary font-medium">
              .NET Core, Laravel, React, Docker, CI/CD pipelines
            </span>
            , and relational databases.
            <br />
            <br />I specialize in designing clean backend architectures,
            developing secure RESTful APIs, automating deployments, and
            collaborating closely with cross-functional teams to deliver
            reliable, maintainable enterprise software.
          </p>
        </motion.div>

        {/* RIGHT INFO CARD */}
        <motion.aside
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full xl:w-[30%] p-8 space-y-4"
        >
          <Info label="Age" value={age} />
          <Info label="Nationality" value="Bangladeshi" />
          <Info label="Location" value="Munshigonj, Dhaka" />
          <Info label="Email" value="zarifsanad@gmail.com" />
          <Info label="Phone" value="+880 1975-393838" />
          <Info label="Role" value="DevOps & Full-Stack Developer" />
        </motion.aside>
      </div>

      {/* WHAT I DO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto w-full"
      >
        <h2 className="text-3xl font-bold mb-14 text-center">
          What <span className="text-accent">I Do</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          <WhatIDoCard
            title="Enterprise Software Development"
            subtitle="Large-scale, real-world systems"
            description="Design and develop enterprise-grade software aligned with real operational workflows, particularly in industrial and power-plant environments."
            icon="🏗️"
          />

          <WhatIDoCard
            title="Backend Systems & APIs"
            subtitle=".NET Core & Laravel"
            description="Build secure, scalable RESTful APIs with JWT authentication, RBAC, and clean architecture principles."
            icon="⚙️"
          />

          <WhatIDoCard
            title="DevOps & CI/CD Automation"
            subtitle="Docker · GitHub Actions · GitLab CI"
            description="Automate builds, deployments, and environment setups using containerization and modern CI/CD pipelines."
            icon="🚀"
          />

          <WhatIDoCard
            title="Database Design & Optimization"
            subtitle="SQL Server · MySQL"
            description="Design efficient relational schemas, optimize queries, and ensure data integrity for high-performance systems."
            icon="🗄️"
          />

          <WhatIDoCard
            title="Frontend Engineering"
            subtitle="React · Angular · Tailwind"
            description="Craft responsive, accessible, and maintainable user interfaces using modern JavaScript frameworks."
            icon="🎨"
          />

          <WhatIDoCard
            title="System Architecture & Best Practices"
            subtitle="N-Tier · SOLID · DI"
            description="Apply proven architectural patterns and clean coding principles to build scalable, maintainable software."
            icon="🧠"
          />
        </div>
      </motion.section>
    </div>
  );
};

/* Small helper components */
const Info = ({ label, value }: { label: string; value: string | number }) => (
  <p className="flex justify-between text-secondary">
    <span className="font-semibold text-accent">{label}</span>
    <span className="text-primary">{value}</span>
  </p>
);

export default AboutMe;
