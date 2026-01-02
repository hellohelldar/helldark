import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const roles = [
    {
      company: "Outtalent",
      period: "2023 — Present",
      role: "CTO & Co-Founder",
      description: "Leading engineering for a YC-backed career accelerator helping engineers get jobs at FAANG.",
      current: true
    },
    {
      company: "Portal College",
      period: "2024 — Present",
      role: "Teacher",
      description: "Teaching software engineering to the next generation of developers."
    },
    {
      company: "Supernatural",
      period: "2023 — 2024",
      role: "Founder",
      description: "Built a venture studio and game accelerator focused on horror and strategy games."
    },
    {
      company: "Noctum Games",
      period: "2020 — 2023",
      role: "Founder",
      description: "Created horror games with 30M+ plays and 1M+ monthly active users."
    },
    {
      company: "Connect4pro",
      period: "2020 — 2023",
      role: "Software Engineer",
      description: "Built information portal for entrepreneurs. Accepted into Accelerate Prosperity."
    },
    {
      company: "Mancho",
      period: "Nov 2021 — Feb 2022",
      role: "Product Manager Intern",
      description: "Briefly explored junior product management before returning to software engineering and game development."
    }
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div>
            <p className="text-sm tracking-widest text-accent uppercase mb-4">Experience</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Journey
            </h2>
          </div>
          <p className="text-accent font-mono">2020 — 2025</p>
        </motion.div>

        <div className="space-y-0">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group py-8 border-b border-white/10 hover:bg-white/5 transition-colors px-6 -mx-6 ${
                role.current ? 'bg-accent/5 border-accent/20' : ''
              }`}
            >
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-3">
                  <p className="text-accent font-mono">{role.period}</p>
                </div>
                <div className="md:col-span-6">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    {role.logo && (
                      <img 
                        src={role.logo} 
                        alt={`${role.company} logo`} 
                        className="w-8 h-8 object-contain rounded"
                      />
                    )}
                    {role.company}
                    {role.current && (
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    )}
                  </h3>
                  <p className="text-accent mb-3">{role.role}</p>
                  <p className="text-white text-lg leading-relaxed">{role.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
