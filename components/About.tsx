import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Rocket, Globe } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Exp', value: '5+', icon: Code },
    { label: 'Game Plays', value: '30M+', icon: Users },
    { label: 'Startups', value: '3', icon: Rocket },
    { label: 'MAU Peak', value: '10k', icon: Globe },
  ];

  return (
    <section id="about" className="py-24 bg-dark-bg relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-12 flex items-center gap-4">
            About Me
            <div className="h-px bg-slate-800 flex-grow"></div>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                I’m a software engineer and entrepreneur from Kyrgyzstan with <span className="text-slate-200 font-medium">5+ years of hands-on experience</span> building real products end-to-end: from idea and MVP to scaling systems used by thousands of people.
              </p>
              <p>
                I started my journey as a self-taught game developer, creating games on Roblox that reached <span className="text-accent font-medium">30+ million plays</span>. That experience shaped how I think about engineering: <span className="text-slate-200 italic">build fast, test with users, iterate relentlessly</span>.
              </p>
              <p>
                Currently, I serve as <span className="text-white font-medium">CTO & Co-Founder at Outtalent</span>, where we help engineers from emerging markets land global tech jobs.
              </p>
              
              <div className="pt-6">
                <h3 className="text-white font-display font-semibold mb-4">Today I focus on:</h3>
                <ul className="space-y-3">
                  {[
                    'Building scalable engineering systems',
                    'Launching products fast without over-engineering',
                    'Leading small, high-impact teams',
                    'Creating opportunities for engineers in emerging markets'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card-bg p-6 rounded-xl border border-slate-800 hover:border-accent/50 transition-colors group"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 rounded-lg bg-slate-900 group-hover:bg-accent/10 transition-colors">
                      <stat.icon className="text-accent" size={20} />
                    </div>
                    <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</span>
                  </div>
                  <div className="text-3xl font-bold text-white font-display pl-2">{stat.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;