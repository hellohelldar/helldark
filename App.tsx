import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Channels from './components/Channels';
import Experience from './components/Experience';
import WhatIDo from './components/WhatIDo';
import Highlights from './components/Highlights';
import Media from './components/Media';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';

const App: React.FC = () => {
  // Simple scroll progress indicator
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-bg text-slate-300 font-sans selection:bg-white selection:text-black">
      {/* Background - Fancy Black & White Grid */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-dark-bg">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>
        
        {/* Ambient white glows for depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[400px] bg-gradient-to-b from-white/5 to-transparent blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[128px] pointer-events-none opacity-20"></div>
      </div>

      {/* Progress Bar - White */}
      <div 
        className="fixed top-0 left-0 h-0.5 bg-white z-50 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Navbar />
      
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <About />
        <Channels />
        <Experience />
        <WhatIDo />
        <Highlights />
        <Media />
        <Philosophy />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 text-center text-slate-600 text-sm bg-black/50 backdrop-blur-sm border-t border-slate-900">
        <p>© {new Date().getFullYear()} Eldar Azamatov. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;