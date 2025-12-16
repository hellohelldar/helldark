import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2, ChevronRight, ArrowRight } from 'lucide-react';

const Experience: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const roles = [
    {
      company: "Outtalent",
      location: "Remote / Global",
      period: "Feb 2023 - Present",
      description: "Career accelerator backed by YC, Founders Fund, and Sequoia. Helping engineers land global jobs.",
      positions: [
        { title: "CTO", date: "Feb 2025 - Present", type: "Full-time" },
        { title: "Software Engineer", date: "Feb 2023 - Feb 2025", type: "Full-time" }
      ]
    },
    {
      company: "Portal College",
      location: "Central Asia",
      period: "Sep 2024 - Present",
      description: "Teaching and mentoring the next generation of engineers in Central Asia.",
      positions: [
        { title: "Teacher", date: "Sep 2024 - Present", type: "Part-time" }
      ]
    },
    {
      company: "Supernatural",
      location: "Central Asia",
      period: "Sep 2023 - May 2024",
      description: "Venture studio & game accelerator. Nurtured indie teams in horror/strategy genres.",
      positions: [
        { title: "Founder", date: "Sep 2023 - May 2024", type: "Self-employed" }
      ]
    },
    {
      company: "Noctum Games",
      location: "Remote",
      period: "Jan 2020 - Sep 2023",
      description: "Indie game studio. Created horror games with 30M+ plays & 1M+ MAU.",
      positions: [
        { title: "Founder", date: "Jan 2020 - Sep 2023", type: "Self-employed" }
      ]
    },
    {
      company: "Connect4pro",
      location: "Remote",
      period: "Sep 2020 - Jan 2023",
      description: "Investment portal for startups. Product ownership & full-stack development.",
      positions: [
        { title: "Software Engineer", date: "Sep 2020 - Jan 2023", type: "Full-time" }
      ]
    },
    {
      company: "Mancho",
      location: "Hybrid",
      period: "Nov 2021 - Feb 2022",
      description: "Product management internship before focusing on engineering.",
      positions: [
        { title: "Product Manager Intern", date: "Nov 2021 - Feb 2022", type: "Internship" }
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-dark-bg relative overflow-hidden border-t border-slate-900/50">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-4">Journey</h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              My path from indie game developer to CTO.
            </p>
          </div>
          <div className="hidden md:flex text-slate-500 text-sm items-center gap-2">
            Scroll for more <ArrowRight size={16} />
          </div>
        </motion.div>

        {/* Horizontal Timeline Container */}
        <div 
          ref={scrollContainerRef}
          className="relative w-full overflow-x-auto pb-12 hide-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* Continuous Line */}
          <div className="absolute top-[24px] left-0 w-[1800px] h-px bg-slate-800" />

          <div className="flex gap-8 min-w-max px-4">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px -100px 0px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-[350px] pt-12"
              >
                {/* Timeline Dot */}
                <div className="absolute top-[18px] left-6 w-3 h-3 rounded-full bg-dark-bg border-2 border-white z-10 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>

                {/* Card */}
                <div className="bg-card-bg border border-slate-800 p-6 rounded-2xl hover:border-white/50 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] h-full flex flex-col group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 group-hover:border-white transition-colors group-hover:bg-white/10">
                      <Building2 size={20} className="text-white" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 bg-slate-900/50 px-2 py-1 rounded border border-slate-800">
                      {role.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-1">{role.company}</h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                    <MapPin size={14} />
                    <span>{role.location}</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    {role.positions.map((pos, pIndex) => (
                      <div key={pIndex} className={`relative ${pIndex > 0 ? 'pt-2 border-t border-slate-800/50' : ''}`}>
                        <div className="text-base font-medium text-slate-200">
                          {pos.title}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                          <span>{pos.date}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                          <span>{pos.type}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                    {role.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;