import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Channels from './components/Channels';
import Experience from './components/Experience';
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
      {/* Background - Pure Black with Deep Green Lighting */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-dark-bg">
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

        {/* Sophisticated Green Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-green-500/10 to-transparent blur-[150px] rounded-full opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-gradient-to-tl from-green-500/10 to-transparent blur-[120px] rounded-full opacity-30"></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 blur-[200px] rounded-full opacity-20"></div>

        {/* Thin minimalist grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(46,255,113,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(46,255,113,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
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
        <Highlights />
        <Media />
        <Philosophy />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 text-center text-white/40 text-sm bg-black/50 backdrop-blur-sm border-t border-white/5">
        <p>Eldar Azamatov · Made with React and a lot of love ❤️</p>
      </footer>
    </div>
  );
};

export default App;