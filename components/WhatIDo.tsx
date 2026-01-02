import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Cpu, Gamepad2, GraduationCap, ArrowUpRight } from 'lucide-react';

const WhatIDo: React.FC = () => {
  const areas = [
    {
      icon: Rocket,
      title: 'Venture Building',
      description: 'Zero to one. Building scalable startups from rough ideas to funded companies.',
    },
    {
      icon: Cpu,
      title: 'Engineering',
      description: 'Architecting robust, high-performance systems that scale with demand.',
    },
    {
      icon: Gamepad2,
      title: 'Creative Tech',
      description: 'Building immersive digital experiences and game systems for mass audiences.',
    },
    {
      icon: GraduationCap,
      title: 'Talent Systems',
      description: 'Developing platforms to accelerate engineering careers globally.',
    }
  ];

  return (
    <section id="what-i-do" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-sm tracking-widest text-accent uppercase mb-4">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Engineering impact at scale.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all relative"
            >
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-accent" size={20} />
              </div>

              <div className="mb-8 p-4 bg-accent/10 border border-accent/30 w-fit text-accent">
                <area.icon size={28} strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                {area.title}
              </h3>
              <p className="text-white text-lg leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
