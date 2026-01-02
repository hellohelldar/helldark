import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "helldar@outtalent.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/eldar-azamatov/' },
    { name: 'GitHub', href: 'https://github.com/hellohelldar' },
    { name: 'Instagram', href: 'https://www.instagram.com/hellohelldar/' },
  ];

  return (
    <section id="contact" className="min-h-screen relative flex flex-col">
      <div className="flex-1 container mx-auto px-6 py-32 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-12">
              <span className="text-white">Let's build</span>
              <br />
              <span className="text-accent">something together.</span>
            </h2>
            
            <div>
              <p className="text-sm tracking-widest text-accent uppercase mb-4">Email</p>
              <button
                onClick={handleCopy}
                className="group flex items-center gap-4 cursor-pointer"
              >
                <span className="text-2xl md:text-3xl font-medium text-white hover:text-accent transition-colors">
                  {email}
                </span>
                <span className={`
                  flex items-center justify-center w-12 h-12 border text-xs transition-all duration-300
                  ${copied 
                    ? 'border-accent bg-accent text-black' 
                    : 'border-white/20 text-white group-hover:border-accent group-hover:text-accent'
                  }
                `}>
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm tracking-widest text-accent uppercase mb-8">Connect</p>
            
            <div className="space-y-0">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-accent/50 transition-colors"
                >
                  <span className="text-2xl text-white group-hover:text-accent transition-colors">
                    {link.name}
                  </span>
                  <ArrowUpRight 
                    size={24} 
                    className="text-white group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                  />
                </a>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-accent animate-pulse" />
              <span className="text-white text-lg">Open for opportunities</span>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
