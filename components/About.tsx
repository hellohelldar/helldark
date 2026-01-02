import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Simplified tech categories
const techCategories = [
  {
    id: 'languages',
    label: 'Languages',
    techs: ['Python', 'TypeScript', 'JavaScript', 'C#', 'Lua', 'SQL'],
  },
  {
    id: 'backend',
    label: 'Backend',
    techs: ['Django', 'FastAPI', 'NestJS', 'PostgreSQL', 'Redis', 'Celery'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    techs: ['Vue.js', 'Next.js', 'React', 'Tailwind CSS'],
  },
  {
    id: 'gamedev',
    label: 'Game Dev',
    techs: ['Unity', 'Roblox Studio', 'Godot', 'Unreal Engine', 'Phaser'],
  },
  {
    id: 'devops',
    label: 'DevOps',
    techs: ['Docker', 'GitHub Actions', 'GCP', 'AWS', 'Linux'],
  },
  {
    id: 'web3',
    label: 'Web3',
    techs: ['TON', 'NFTs', 'Wallet Integration'],
  },
];

const About: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('languages');
  
  const stats = [
    { value: '8+', label: 'Years Building' },
    { value: '30M+', label: 'Game Plays' },
    { value: '3', label: 'Companies' },
    { value: '200+', label: 'Engineers Helped' },
  ];

  const currentTechs = techCategories.find(c => c.id === activeCategory)?.techs || [];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-widest text-accent uppercase mb-8">About</p>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              I build systems that bridge technology and human potential.
            </h2>

            <div className="space-y-6 text-lg text-white leading-relaxed">
              <p>
                I'm a software engineer and entrepreneur from Kyrgyzstan. My journey began in game development, where I learned that performance isn't just about code, it's about user experience.
              </p>
              <p>
                Scaling games to <span className="text-accent font-semibold">30 million plays</span> taught me concurrency, distributed systems, and rapid iteration.
              </p>
              <p>
                Now, as <span className="text-accent font-semibold">CTO of Outtalent</span>, I build platforms that help engineers change their careers.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-16"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 group hover:border-accent/50 transition-colors"
                >
                  <div className="text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm uppercase tracking-widest text-white">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech stack - Interactive tabs */}
            <div className="mt-12">
              <p className="text-sm tracking-widest text-accent uppercase mb-6">Tech Stack</p>
              
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {techCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-accent text-black'
                        : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Tech pills */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="min-h-[120px] p-6 bg-white/[0.02] border border-white/10"
                >
                  <div className="flex flex-wrap gap-3">
                    {currentTechs.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 bg-white/5 border border-white/10 text-white text-sm hover:border-accent hover:text-accent transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
