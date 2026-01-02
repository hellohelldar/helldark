import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  const principles = [
    "Create first, improve later.",
    "Simplicity over cleverness.",
    "Ship → Learn → Iterate.",
    "Talk to users early.",
    "Tech exists to create value."
  ];

  return (
    <section id="philosophy" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-widest text-accent uppercase mb-8">Philosophy</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              Core Values
            </h2>
            <p className="text-white text-xl leading-relaxed mb-12">
              Engineering is more than code. It's about solving problems with clarity, empathy, and pragmatism.
            </p>

            <div className="p-8 bg-white/5 backdrop-blur-sm border border-accent/30">
              <p className="text-white text-xl italic leading-relaxed">
                "The best engineers I know are the ones who understand that their code is a means to an end, not the end itself."
              </p>
            </div>
          </motion.div>

          {/* Right - Principles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-16"
          >
            <div className="space-y-0">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center justify-between py-6 border-b border-white/10 hover:bg-white/5 transition-colors px-6 -mx-6"
                >
                  <h3 className="text-xl text-white group-hover:text-accent transition-colors">
                    {principle}
                  </h3>
                  <span className="text-4xl font-bold text-accent/30 group-hover:text-accent transition-colors font-mono">
                    0{index + 1}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;
