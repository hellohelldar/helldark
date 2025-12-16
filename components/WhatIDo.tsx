import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Cpu, Gamepad2, GraduationCap } from 'lucide-react';

const WhatIDo: React.FC = () => {
  const areas = [
    {
      icon: Rocket,
      title: 'Product & Startup Building',
      description: 'Founded and scaled multiple startups across games, Web3, education, and SaaS.',
      tags: ['MVP in days', 'Investor Relations', 'Growth Strategy']
    },
    {
      icon: Cpu,
      title: 'Engineering & Architecture',
      description: 'Full-stack development with a focus on scalable, maintainable infrastructure.',
      tags: ['Python/Django', 'Node.js', 'Vue.js/TS', 'Docker/K8s', 'AWS/GCP']
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Designed and built game systems, AI behavior, and progression mechanics for millions of players.',
      tags: ['Roblox (Lua)', 'Unity (C#)', 'Godot', 'Multiplayer Systems']
    },
    {
      icon: GraduationCap,
      title: 'Education & Mentorship',
      description: 'Helping engineers globally. Built internal platforms for education, interviews, and analytics.',
      tags: ['Mentoring', 'Tech Hiring', 'Curriculum Design']
    }
  ];

  return (
    <section id="what-i-do" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-900/50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">What I Do</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Merging technical depth with product vision to build things that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card-bg p-8 rounded-2xl border border-slate-800 hover:border-slate-600 transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/10"
            >
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <area.icon className="text-accent group-hover:scale-110 transition-transform" size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 font-display">{area.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {area.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {area.tags.map((tag, tIndex) => (
                  <span 
                    key={tIndex} 
                    className="text-xs font-medium px-2.5 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;