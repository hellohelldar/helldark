import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Profile Picture */}
          <div className="mb-8 relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 border border-white/10 bg-white/5 backdrop-blur-md relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" 
                alt="Eldar Azamatov" 
                className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Glow behind profile */}
            <div className="absolute top-1/2 left-12 md:left-16 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-white/20 blur-[50px] rounded-full pointer-events-none"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Eldar Azamatov
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-400 font-light mb-8">
            Engineer · Founder · <span className="text-white font-medium border-b border-white/20 pb-1">Builder</span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
            I build technology, companies, and communities — from game studios with millions of players to platforms helping engineers from emerging markets land global tech jobs.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white hover:bg-slate-200 text-black font-bold rounded-lg transition-all flex items-center gap-2 group"
            >
              Contact me 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent hover:bg-white/5 text-white font-medium rounded-lg border border-slate-700 hover:border-white transition-all"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full"></div>
          <div className="relative bg-[#050505] border border-slate-800 rounded-xl p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="ml-auto text-xs text-slate-600 font-mono">portfolio.tsx</div>
            </div>
            {/* Monochrome Syntax Highlighting */}
            <div className="font-mono text-sm text-slate-300 space-y-2">
              <div className="flex">
                <span className="text-slate-700 w-6 select-none">1</span>
                <span className="text-white font-semibold">const</span> <span className="text-slate-300">Eldar</span> = <span className="text-white font-semibold">new</span> <span className="text-slate-300">Engineer</span>({'{'}
              </div>
              <div className="flex">
                <span className="text-slate-700 w-6 select-none">2</span>
                <span className="pl-4 text-slate-400">focus:</span> <span className="text-slate-200">['Product', 'Scale', 'Impact']</span>,
              </div>
              <div className="flex">
                <span className="text-slate-700 w-6 select-none">3</span>
                <span className="pl-4 text-slate-400">currentRole:</span> <span className="text-slate-200">'CTO @ Outtalent'</span>,
              </div>
              <div className="flex">
                <span className="text-slate-700 w-6 select-none">4</span>
                <span className="pl-4 text-slate-400">mission:</span> <span className="text-slate-200">'Empower global talent'</span>,
              </div>
              <div className="flex">
                <span className="text-slate-700 w-6 select-none">5</span>
                <span className="pl-4 text-slate-400">philosophy:</span> <span className="text-white font-semibold">async</span> () <span className="text-white font-semibold">{'=> '}</span>{`{`}
              </div>
              <div className="flex">
                <span className="text-slate-700 w-6 select-none">6</span>
                <span className="pl-8"><span className="text-white font-semibold">return</span> <span className="text-slate-200">"Build fast, iterate relentlessly"</span>;</span>
              </div>
              <div className="flex">
                <span className="text-slate-700 w-6 select-none">7</span>
                <span className="pl-4">{'}'}</span>
              </div>
              <div className="flex">
                <span className="text-slate-700 w-6 select-none">8</span>
                <span>{'}'};</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;