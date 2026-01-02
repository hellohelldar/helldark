import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Rocket, Compass, Video, Database, Code, TrendingUp, Briefcase, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Highlights: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'engineering' | 'impact'>('engineering');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main card reveal animation
      if (mainCardRef.current) {
        gsap.from(mainCardRef.current, {
          y: 100,
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mainCardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });

        // Add a glowing border effect on scroll
        gsap.to(mainCardRef.current, {
          boxShadow: '0 0 60px rgba(46, 255, 113, 0.1)',
          scrollTrigger: {
            trigger: mainCardRef.current,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Magnetic hover effect for product cards
  const handleProductHover = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    setHoveredProduct(idx);
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(card, {
      rotateX: -y * 0.05,
      rotateY: x * 0.05,
      transformPerspective: 1000,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleProductLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setHoveredProduct(null);
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  const products = [
    { name: 'LaunchPad', desc: 'Gamified learning platform', icon: Rocket, color: 'from-orange-500/20 to-yellow-500/20' },
    { name: 'TrackTalent', desc: 'Job search navigation', icon: Compass, color: 'from-blue-500/20 to-cyan-500/20' },
    { name: 'InterviewWatch', desc: 'Interview intelligence', icon: Video, color: 'from-purple-500/20 to-pink-500/20' },
    { name: 'OffersDatabase', desc: 'Salary negotiation data', icon: Database, color: 'from-emerald-500/20 to-teal-500/20' },
  ];

  const placements = [
    { company: 'Meta', count: 16 },
    { company: 'Google', count: 15 },
    { company: 'Uber', count: 15 },
    { company: 'Amazon', count: 12 },
  ];

  const tabs = [
    { id: 'engineering' as const, label: 'Engineering', icon: Code },
    { id: 'impact' as const, label: 'Impact Data', icon: TrendingUp },
  ];

  return (
    <section ref={sectionRef} id="highlights" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div>
            <p className="text-sm tracking-widest text-accent uppercase mb-4">Selected Works</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Building at scale.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white">Currently building Outtalent</span>
          </div>
        </motion.div>

        {/* Main Project - Outtalent */}
        <div
          ref={mainCardRef}
          className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10 mb-20 shadow-2xl shadow-black/20 overflow-hidden"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-white/[0.03] to-transparent">
            <div className="flex items-center gap-4 mb-4 sm:mb-0">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1.5 shadow-lg shadow-white/10"
              >
                <img src="/outtalent_logo.png" alt="Outtalent" className="w-full h-full object-contain" />
              </motion.div>
              <span className="font-bold text-white text-2xl tracking-tight">Outtalent</span>
              <motion.span 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-orange-500/20 to-orange-400/10 text-orange-400 border border-orange-500/30 tracking-wider"
              >
                Y COMBINATOR
              </motion.span>
            </div>
            <motion.a 
              whileHover={{ x: 4 }}
              href="https://outtalent.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent hover:text-white flex items-center gap-2 text-sm font-medium transition-colors group"
            >
              outtalent.com 
              <ExternalLink size={14} className="group-hover:rotate-12 transition-transform" />
            </motion.a>
          </div>

          <div className="grid lg:grid-cols-12">
            {/* Sidebar */}
            <div className="lg:col-span-3 p-6 border-b lg:border-b-0 lg:border-r border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent">
              <p className="text-xs tracking-[0.2em] text-accent uppercase mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-accent"></span>
                View
              </p>
              <div className="space-y-1">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-4 py-3.5 text-sm font-medium transition-all duration-300 flex items-center gap-3 relative overflow-hidden group ${
                        activeTab === tab.id 
                          ? 'bg-accent text-black' 
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <IconComponent size={16} className={activeTab === tab.id ? 'text-black' : 'text-accent'} />
                      {tab.label}
                      {activeTab === tab.id && (
                        <motion.div 
                          layoutId="activeTab"
                          className="absolute inset-0 bg-accent -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-xs tracking-[0.2em] text-accent uppercase mb-5 flex items-center gap-2">
                  <span className="w-4 h-px bg-accent"></span>
                  Role
                </p>
                <div className="space-y-5">
                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="group cursor-default"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={14} className="text-accent" />
                      <p className="text-lg font-bold text-white group-hover:text-accent transition-colors">CTO</p>
                    </div>
                    <p className="text-accent/80 text-sm pl-5">Tech Strategy & Architecture</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="group cursor-default"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles size={14} className="text-accent" />
                      <p className="text-lg font-bold text-white group-hover:text-accent transition-colors">Co-Founder</p>
                    </div>
                    <p className="text-accent/80 text-sm pl-5">Product Vision & Growth</p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9 p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {activeTab === 'engineering' ? (
                  <motion.div
                    key="engineering"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Code size={16} className="text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Internal Ecosystem</h3>
                    </div>
                    <p className="text-white/70 text-lg mb-8 max-w-xl leading-relaxed">
                      Designed and built core platforms powering the entire operation.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {products.map((product, idx) => {
                        const IconComponent = product.icon;
                        return (
                          <div 
                            key={idx}
                            onMouseMove={(e) => handleProductHover(e, idx)}
                            onMouseLeave={handleProductLeave}
                            className={`relative p-6 bg-gradient-to-br ${product.color} border border-white/10 hover:border-accent/50 transition-all duration-300 group cursor-default overflow-hidden`}
                            style={{ transformStyle: 'preserve-3d' }}
                          >
                            {/* Gradient glow on hover */}
                            <motion.div 
                              className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            
                            {/* Icon */}
                            <div className="relative z-10 mb-4">
                              <div className="w-10 h-10 rounded-lg bg-white/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors duration-300">
                                <IconComponent 
                                  size={20} 
                                  className="text-white/70 group-hover:text-accent transition-colors duration-300" 
                                />
                              </div>
                            </div>
                            
                            <h4 className="relative z-10 text-white text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                              {product.name}
                            </h4>
                            <p className="relative z-10 text-white/60 group-hover:text-white/80 transition-colors duration-300">
                              {product.desc}
                            </p>
                            
                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Tech hint */}
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-white/40 text-sm">
                      <span className="w-2 h-2 rounded-full bg-accent/50 animate-pulse" />
                      All systems built with Python, TypeScript & modern infrastructure
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="impact"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <TrendingUp size={16} className="text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Tangible Impact</h3>
                    </div>
                    <p className="text-white/70 text-lg mb-8 max-w-xl leading-relaxed">
                      Helped over 100 engineers transform their careers.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-5 mb-10">
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 relative overflow-hidden group"
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-colors duration-500" />
                        <div className="relative">
                          <div className="text-5xl font-bold text-accent mb-1 tabular-nums">205</div>
                          <div className="text-white/80 uppercase tracking-widest text-sm">Graduates</div>
                        </div>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 relative overflow-hidden group"
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-colors duration-500" />
                        <div className="relative">
                          <div className="text-5xl font-bold text-accent mb-1 tabular-nums">235</div>
                          <div className="text-white/80 uppercase tracking-widest text-sm">Offers Received</div>
                        </div>
                      </motion.div>
                    </div>

                    <p className="text-xs tracking-[0.2em] text-accent uppercase mb-4 flex items-center gap-2">
                      <span className="w-4 h-px bg-accent"></span>
                      Top Placements
                    </p>
                    <div className="space-y-0 bg-white/[0.02] border border-white/5 overflow-hidden">
                      {placements.map((p, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.03)' }}
                          className="flex items-center justify-between py-4 px-5 border-b border-white/5 last:border-b-0 cursor-default group"
                        >
                          <span className="text-white text-lg group-hover:text-accent transition-colors">{p.company}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-accent font-bold tabular-nums">{p.count}</span>
                            <span className="text-white/50 text-sm">hires</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Secondary Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group p-10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <ArrowUpRight 
              className="absolute top-10 right-10 text-white/20 group-hover:text-purple-400 group-hover:rotate-12 transition-all duration-300" 
              size={24} 
            />
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
              Supernatural
            </h3>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              Venture studio & game accelerator. Mentored indie teams and launched 3 titles.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs uppercase tracking-widest">Game Dev</span>
              <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs uppercase tracking-widest">Ventures</span>
            </div>
          </motion.a>

          <motion.a
            href="https://www.roblox.com/users/190090631/profile"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="group p-10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-red-500/50 transition-all relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <ArrowUpRight 
              className="absolute top-10 right-10 text-white/20 group-hover:text-red-400 group-hover:rotate-12 transition-all duration-300" 
              size={24} 
            />
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
              Roblox Games
            </h3>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              Self-taught horror game development. 30+ million plays accumulated.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 text-xs uppercase tracking-widest">Lua</span>
              <span className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent text-xs uppercase tracking-widest font-bold">30M+ Plays</span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
