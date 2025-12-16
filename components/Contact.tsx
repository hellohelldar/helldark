import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Instagram, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const links = [
    { name: 'Email', icon: Mail, href: 'mailto:contact@eldar.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  ];

  return (
    <section id="contact" className="py-32 bg-dark-bg relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8">Get in touch</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            Whether you want to build a product, launch a startup, talk engineering, or just say hi.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 transition-all hover:-translate-y-1 hover:border-white hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <link.icon size={20} />
                <span className="font-medium">{link.name}</span>
                <ArrowUpRight size={16} className="opacity-50" />
              </a>
            ))}
          </div>

          <div className="p-8 border border-dashed border-slate-800 rounded-2xl inline-block bg-slate-900/30">
            <p className="text-slate-500 font-mono text-sm">
              Open to interesting collaborations in GameDev & EdTech.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;