import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const roles = ['Engineer', 'Founder', 'Builder'];

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mounted, setMounted] = useState(false);
  const prevRoleRef = useRef(0);
  
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    const ctx = gsap.context(() => {
      // Initial state - hidden
      gsap.set([badgeRef.current, subtextRef.current, ctaRef.current, statusRef.current], {
        opacity: 0,
        y: 40,
      });
      
      // Staggered reveal animation
      const tl = gsap.timeline({ delay: 0.3 });
      
      // Badge animation with bounce
      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });
      
      // Subtext
      tl.to(subtextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      }, '-=0.4');
      
      // CTAs with stagger
      tl.to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
      }, '-=0.3');
      
      // Status bar
      tl.to(statusRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.2');
      
    }, sectionRef);

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => {
      clearInterval(interval);
      ctx.revert();
    };
  }, []);

  // Animate role text change with GSAP
  useEffect(() => {
    if (!headingRef.current || !mounted) return;
    
    // Only animate if the role actually changed (not on initial mount)
    if (prevRoleRef.current === currentRole) return;
    prevRoleRef.current = currentRole;
    
    const tl = gsap.timeline();
    
    // Animate out (upward with fade)
    tl.to(headingRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.25,
      ease: 'power2.in',
    });
    
    // Snap to bottom start position
    tl.set(headingRef.current, { y: 50 });
    
    // Animate in from below with spring
    tl.to(headingRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'back.out(1.2)',
    });
    
  }, [currentRole, mounted]);

  // Magnetic button effect
  const handleButtonMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleButtonMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col text-white overflow-hidden">

      {/* Main content */}
      <div className="flex-1 container mx-auto px-6 flex flex-col justify-center pt-24">
        
        <div className="max-w-6xl">
          
          {/* Profile badge */}
          <div 
            ref={badgeRef}
            className="inline-flex items-center gap-4 mb-12 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-accent/50 relative">
              <img 
                src="/eldar.png" 
                alt="Eldar Azamatov" 
                className="w-full h-full object-cover"
              />
              {/* Animated ring */}
              <div 
                className="absolute inset-0 rounded-full border-2 border-accent/50"
                style={{
                  animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                }}
              />
            </div>
            <div className="pr-2">
              <p className="text-sm font-medium text-white">Eldar Azamatov</p>
              <p className="text-xs text-accent">Bishkek, Kyrgyzstan</p>
            </div>
          </div>

          {/* Main headline */}
          <div className="mb-8 overflow-hidden py-4">
            <h1 
              ref={headingRef}
              className="text-[clamp(4rem,15vw,12rem)] font-bold leading-[1.1] tracking-tighter text-white"
            >
              {roles[currentRole]}
            </h1>
          </div>

          {/* Subtext */}
          <p 
            ref={subtextRef}
            className="text-xl md:text-2xl text-white max-w-2xl leading-relaxed mb-12"
          >
            Building high-performance systems and scalable products. Currently CTO at{' '}
            <a 
              href="https://outtalent.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline relative inline-block group"
            >
              Outtalent
              <span className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            .
          </p>

          {/* CTAs */}
          <div 
            ref={ctaRef}
            className="flex flex-wrap items-center gap-4"
          >
            <a 
              href="#highlights"
              onMouseMove={handleButtonMouseMove}
              onMouseLeave={handleButtonMouseLeave}
              className="group relative px-8 py-4 bg-white text-black font-semibold hover:bg-accent transition-colors duration-300 overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              {/* Shine effect */}
              <span 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />
            </a>
            <a 
              href="#contact"
              onMouseMove={handleButtonMouseMove}
              onMouseLeave={handleButtonMouseLeave}
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium border border-white/20 hover:bg-white hover:text-black transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              {/* Border glow on hover */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_20px_rgba(46,255,113,0.3)]" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div 
        ref={statusRef}
        className="py-8"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="relative w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
              <span className="relative block w-2 h-2 rounded-full bg-accent" />
            </span>
            <span className="text-sm text-white">Open for opportunities</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white">
            <span className="hover:text-accent transition-colors cursor-default">30M+ Plays</span>
            <span className="hover:text-accent transition-colors cursor-default">8+ Years</span>
            <span className="hover:text-accent transition-colors cursor-default">3 Companies</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
