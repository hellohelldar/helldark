import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  const principles = [
    { text: "Create first, improve later", delay: 0 },
    { text: "Simplicity over cleverness", delay: 100 },
    { text: "Ship → Learn → Iterate", delay: 200 },
    { text: "Talk to users early and often", delay: 300 },
    { text: "Tech exists to create value, not complexity", delay: 400 }
  ];

  return (
    <section id="philosophy" className="py-20 bg-slate-950 border-y border-slate-900/50">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-12">Engineering Philosophy</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {principles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <h3 className="text-2xl md:text-3xl font-display font-medium text-slate-300 hover:text-white transition-colors cursor-default">
                  {item.text}
                </h3>
              </motion.div>
            ))}
          </div>

          <p className="mt-16 text-slate-500 max-w-2xl mx-auto text-lg">
            I strongly believe that <span className="text-white">impact beats elegance</span>, and that the best engineers are those who understand both technology and people.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;