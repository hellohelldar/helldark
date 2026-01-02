import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Highlights: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'engineering' | 'impact'>('engineering');

  const products = [
    { name: 'LaunchPad', desc: 'Gamified learning platform' },
    { name: 'TrackTalent', desc: 'Job search navigation' },
    { name: 'InterviewWatch', desc: 'Interview intelligence' },
    { name: 'OffersDatabase', desc: 'Salary negotiation data' },
  ];

  const placements = [
    { company: 'Meta', count: 16 },
    { company: 'Google', count: 15 },
    { company: 'Uber', count: 15 },
    { company: 'Amazon', count: 12 },
  ];

  return (
    <section id="highlights" className="py-32 relative">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 mb-20"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-4 mb-4 sm:mb-0">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center p-1">
                <img src="/outtalent_logo.png" alt="Outtalent" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-white text-xl">Outtalent</span>
              <span className="px-3 py-1 text-xs font-semibold bg-accent/20 text-accent border border-accent/30">
                Y COMBINATOR
              </span>
            </div>
            <a 
              href="https://outtalent.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent hover:underline flex items-center gap-2"
            >
              outtalent.com <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid lg:grid-cols-12">
            {/* Sidebar */}
            <div className="lg:col-span-3 p-6 border-b lg:border-b-0 lg:border-r border-white/10">
              <p className="text-sm tracking-widest text-accent uppercase mb-6">View</p>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab('engineering')}
                  className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'engineering' 
                      ? 'bg-accent text-black' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Engineering
                </button>
                <button
                  onClick={() => setActiveTab('impact')}
                  className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'impact' 
                      ? 'bg-accent text-black' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Impact Data
                </button>
              </div>

              <div className="mt-12">
                <p className="text-sm tracking-widest text-accent uppercase mb-4">Role</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-bold text-white">CTO</p>
                    <p className="text-accent">Tech Strategy</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">Co-Founder</p>
                    <p className="text-accent">Product Vision</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9 p-8">
              <AnimatePresence mode="wait">
                {activeTab === 'engineering' ? (
                  <motion.div
                    key="engineering"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">Internal Ecosystem</h3>
                    <p className="text-white text-lg mb-8 max-w-xl">
                      Designed and built core platforms powering the entire operation.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {products.map((product, idx) => (
                        <div 
                          key={idx}
                          className="p-6 bg-black/30 border border-white/10 hover:border-accent/50 transition-colors group"
                        >
                          <h4 className="text-white text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-white">{product.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="impact"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">Tangible Impact</h3>
                    <p className="text-white text-lg mb-8 max-w-xl">
                      Helped over 100 engineers transform their careers.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-8 mb-12">
                      <div className="p-6 bg-black/30 border border-accent/30">
                        <div className="text-5xl font-bold text-accent mb-2">205</div>
                        <div className="text-white uppercase tracking-widest">Qualifying Offers</div>
                      </div>
                      <div className="p-6 bg-black/30 border border-accent/30">
                        <div className="text-5xl font-bold text-accent mb-2">100%</div>
                        <div className="text-white uppercase tracking-widest">Success Rate</div>
                      </div>
                    </div>

                    <p className="text-sm tracking-widest text-accent uppercase mb-4">Top Placements</p>
                    <div className="space-y-0">
                      {placements.map((p, idx) => (
                        <div key={idx} className="flex items-center justify-between py-4 border-b border-white/10">
                          <span className="text-white text-lg">{p.company}</span>
                          <span className="text-accent font-bold">{p.count} hires</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Secondary Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group p-10 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all relative"
          >
            <ArrowUpRight 
              className="absolute top-10 right-10 text-white/20 group-hover:text-accent transition-colors" 
              size={24} 
            />
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
              Supernatural
            </h3>
            <p className="text-white text-lg mb-6">
              Venture studio & game accelerator. Mentored indie teams and launched 3 titles.
            </p>
            <div className="flex gap-4">
              <span className="text-accent uppercase tracking-widest text-sm">Game Dev</span>
              <span className="text-accent uppercase tracking-widest text-sm">Ventures</span>
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
            className="group p-10 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all relative"
          >
            <ArrowUpRight 
              className="absolute top-10 right-10 text-white/20 group-hover:text-accent transition-colors" 
              size={24} 
            />
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
              Roblox Games
            </h3>
            <p className="text-white text-lg mb-6">
              Self-taught horror game development. 30+ million plays accumulated.
            </p>
            <div className="flex gap-4">
              <span className="text-accent uppercase tracking-widest text-sm">Lua</span>
              <span className="text-accent uppercase tracking-widest text-sm font-bold">30M+ Plays</span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
