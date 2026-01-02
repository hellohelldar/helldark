import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const stats = [
    { value: '8+', label: 'Years Building' },
    { value: '30M+', label: 'Game Plays' },
    { value: '3', label: 'Companies' },
    { value: '100+', label: 'Engineers Helped' },
  ];

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
                I'm a software engineer and entrepreneur from Kyrgyzstan. My journey began in game development, where I learned that performance isn't just about code—it's about user experience.
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

            {/* Tech stack */}
            <div className="mt-12">
              <p className="text-sm tracking-widest text-accent uppercase mb-4">Stack</p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Lua'].map(tech => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 bg-white/5 border border-white/10 text-sm text-white hover:border-accent hover:text-accent transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
