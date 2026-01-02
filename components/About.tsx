import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Simplified tech categories
const techCategories = [
  {
    id: 'languages',
    label: 'Languages',
    techs: ['Python', 'TypeScript', 'JavaScript', 'C#', 'Lua', 'SQL'],
  },
  {
    id: 'backend',
    label: 'Backend',
    techs: ['Django', 'FastAPI', 'NestJS', 'PostgreSQL', 'Redis', 'Celery'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    techs: ['Vue.js', 'Next.js', 'React', 'Tailwind CSS'],
  },
  {
    id: 'gamedev',
    label: 'Game Dev',
    techs: ['Unity', 'Roblox Studio', 'Godot', 'Unreal Engine', 'Phaser'],
  },
  {
    id: 'devops',
    label: 'DevOps',
    techs: ['Docker', 'GitHub Actions', 'GCP', 'AWS', 'Linux'],
  },
  {
    id: 'web3',
    label: 'Web3',
    techs: ['TON', 'NFTs', 'Wallet Integration'],
  },
];

const About: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('languages');
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const stats = [
    { value: '8+', label: 'Years Building' },
    { value: '30M+', label: 'Game Plays' },
    { value: '3', label: 'Companies' },
    { value: '200+', label: 'Engineers Helped' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation for heading
      if (headingRef.current) {
        const words = headingRef.current.innerText.split(' ');
        headingRef.current.innerHTML = words
          .map(word => `<span class="inline-block overflow-hidden"><span class="word-reveal inline-block">${word}</span></span>`)
          .join(' ');
        
        gsap.set('.word-reveal', { y: '100%', opacity: 0 });
        
        gsap.to('.word-reveal', {
          y: '0%',
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // Stats card reveal animation (no counter animation - just show values)
      statCardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        gsap.from(card, {
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentTechs = techCategories.find(c => c.id === activeCategory)?.techs || [];

  // Magnetic effect for tech pills
  const handleTechHover = (e: React.MouseEvent<HTMLSpanElement>) => {
    const pill = e.currentTarget;
    const rect = pill.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(pill, {
      x: x * 0.2,
      y: y * 0.2,
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleTechLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  return (
    <section ref={sectionRef} id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-widest text-accent uppercase mb-8 overflow-hidden">
              <span className="inline-block animate-slideUp">About</span>
            </p>

            <h2 
              ref={headingRef}
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
            >
              I build systems that bridge technology and human potential.
            </h2>

            <div className="space-y-6 text-lg text-white leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                I'm a software engineer and entrepreneur from Kyrgyzstan. My journey began in game development, where I learned that performance isn't just about code, it's about user experience.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Scaling games to <span className="text-accent font-semibold relative inline-block group">
                  30 million plays
                  <span className="absolute -inset-1 bg-accent/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </span> taught me concurrency, distributed systems, and rapid iteration.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Now, as <span className="text-accent font-semibold relative inline-block group">
                  CTO of Outtalent
                  <span className="absolute -inset-1 bg-accent/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>, I build platforms that help engineers change their careers.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <div ref={statsRef} className="lg:pt-16">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  ref={el => statCardsRef.current[index] = el}
                  className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 group hover:border-accent/50 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="stat-value text-5xl font-bold text-accent mb-2 relative z-10">
                    {stat.value}
                  </div>
                  <div className="text-sm uppercase tracking-widest text-white relative z-10">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech stack - Interactive tabs */}
            <div className="mt-12">
              <p className="text-sm tracking-widest text-accent uppercase mb-6">Tech Stack</p>
              
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {techCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                      activeCategory === category.id
                        ? 'bg-accent text-black'
                        : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="relative z-10">{category.label}</span>
                    {activeCategory === category.id && (
                      <motion.div
                        layoutId="activeCategoryBg"
                        className="absolute inset-0 bg-accent -z-0"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tech pills */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="min-h-[120px] p-6 bg-white/[0.02] border border-white/10"
                >
                  <div className="flex flex-wrap gap-3">
                    {currentTechs.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        onMouseMove={handleTechHover}
                        onMouseLeave={handleTechLeave}
                        className="px-4 py-2 bg-white/5 border border-white/10 text-white text-sm hover:border-accent hover:text-accent transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* CSS for slide up animation */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;
