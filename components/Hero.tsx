import React, { useState, useEffect } from 'react';

const roles = ['Engineer', 'Founder', 'Builder'];

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col text-white overflow-hidden">
      
      {/* Main content */}
      <div className="flex-1 container mx-auto px-6 flex flex-col justify-center pt-24">
        
        <div className="max-w-6xl">
          
          {/* Profile badge */}
          <div 
            className={`inline-flex items-center gap-4 mb-12 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-accent/50">
              <img 
                src="/eldar.png" 
                alt="Eldar Azamatov" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pr-2">
              <p className="text-sm font-medium text-white">Eldar Azamatov</p>
              <p className="text-xs text-accent">Bishkek, Kyrgyzstan</p>
            </div>
          </div>

          {/* Main headline */}
          <div className="mb-8">
            <h1 
              key={currentRole}
              className="text-[clamp(4rem,15vw,12rem)] font-bold leading-[0.85] tracking-tighter text-white"
            >
              {roles[currentRole]}
            </h1>
          </div>

          {/* Subtext */}
          <p 
            className={`text-xl md:text-2xl text-white max-w-2xl leading-relaxed mb-12 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Building high-performance systems and scalable products. Currently CTO at{' '}
            <a 
              href="https://outtalent.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Outtalent
            </a>
            .
          </p>

          {/* CTAs */}
          <div 
            className={`flex flex-wrap items-center gap-4 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <a 
              href="#highlights" 
              className="group px-8 py-4 bg-white text-black font-semibold hover:bg-accent transition-colors duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div 
        className={`py-8 transition-all duration-700 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-white">Open for opportunities</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white">
            <span>30M+ Plays</span>
            <span>8+ Years</span>
            <span>3 Companies</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
