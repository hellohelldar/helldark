import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Trophy, Users } from 'lucide-react';

const Highlights: React.FC = () => {
  const projects = [
    {
      title: "Outtalent",
      role: "CTO & Co-Founder",
      desc: "Helping engineers from emerging markets land global tech jobs. Built 4 core internal platforms from scratch for education, payments, and analytics.",
      stats: "Global Impact",
      icon: Users,
    },
    {
      title: "Tonmons",
      role: "Founder",
      desc: "Web3 game on TON blockchain. Scaled to 10k Monthly Active Users at peak. Built entire infrastructure solo.",
      stats: "10k MAU",
      icon: Trophy,
    },
    {
      title: "Roblox Games",
      role: "Lead Developer",
      desc: "Created multiple games reaching over 30 million total plays. Learned the fundamentals of product engagement and iteration.",
      stats: "30M+ Plays",
      icon: Star,
    }
  ];

  return (
    <section id="highlights" className="py-24 bg-dark-bg relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-display font-bold text-white mb-16 text-center"
        >
          Selected Highlights
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* White glow on hover */}
              <div className="absolute inset-0 bg-white/10 rounded-2xl transform transition-transform group-hover:scale-[1.02] duration-300 opacity-0 group-hover:opacity-100 blur-sm"></div>
              
              <div className="relative h-full bg-card-bg border border-slate-800 p-8 rounded-2xl flex flex-col hover:border-white transition-colors z-10">
                <div className={`w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center mb-6 shadow-lg shadow-white/5`}>
                  <project.icon size={24} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1 font-display">{project.title}</h3>
                <div className="text-slate-400 text-sm font-medium mb-4">{project.role}</div>
                
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed group-hover:text-slate-300 transition-colors">
                  {project.desc}
                </p>
                
                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-white font-bold font-display text-lg">{project.stats}</span>
                  <ExternalLink size={18} className="text-slate-500 group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-4 font-mono text-sm">Also: Speaker, mentor, and judge at tech & game-dev events.</p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;