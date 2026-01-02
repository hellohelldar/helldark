import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Pre-computed particle positions to avoid re-renders
const particles = Array.from({ length: 12 }, (_, i) => ({
  left: (i * 17 + 5) % 100,
  top: (i * 23 + 10) % 100,
  duration: 6 + (i % 4) * 2,
  delay: i * 0.4,
}));

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const rolesRef = useRef<(HTMLDivElement | null)[]>([]);

  const roles = [
    {
      company: "Outtalent",
      period: "2023 — Present",
      role: "CTO & Co-Founder",
      description: "Leading engineering for a YC-backed career accelerator helping engineers get jobs at FAANG.",
      current: true
    },
    {
      company: "Portal College",
      period: "2024 — Present",
      role: "Teacher",
      description: "Teaching software engineering to the next generation of developers."
    },
    {
      company: "Supernatural",
      period: "2023 — 2024",
      role: "Founder",
      description: "Built a venture studio and game accelerator focused on horror and strategy games."
    },
    {
      company: "Noctum Games",
      period: "2020 — 2023",
      role: "Founder",
      description: "Created horror games with 30M+ plays and 1M+ monthly active users."
    },
    {
      company: "Connect4pro",
      period: "2020 — 2023",
      role: "Software Engineer",
      description: "Built information portal for entrepreneurs. Accepted into Accelerate Prosperity."
    },
    {
      company: "Mancho",
      period: "2021 — 2022",
      role: "Product Manager Intern",
      description: "Briefly explored junior product management before returning to software engineering and game development."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each role card
      rolesRef.current.forEach((role) => {
        if (!role) return;
        
        gsap.from(role, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: role,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Hover effect for role cards
  const handleRoleHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create spotlight effect
    gsap.to(card, {
      '--spotlight-x': `${x}px`,
      '--spotlight-y': `${y}px`,
      duration: 0.3,
      ease: 'power2.out',
    } as gsap.TweenVars);
  };

  return (
    <section ref={sectionRef} id="experience" className="py-32 relative overflow-hidden">
      {/* Subtle background particles */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/15"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animation: `float ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div>
            <p className="text-sm tracking-widest text-accent uppercase mb-4 overflow-hidden">
              <motion.span 
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                Experience
              </motion.span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block"
              >
                Journey
              </motion.span>
            </h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-accent font-mono"
          >
            2020 — 2025
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          <div className="space-y-0">
            {roles.map((role, index) => (
              <div
                key={index}
                ref={el => rolesRef.current[index] = el}
                onMouseMove={handleRoleHover}
                className={`group relative py-8 border-b border-white/10 transition-all duration-300 ${
                  role.current ? 'bg-accent/5 border-accent/20' : ''
                }`}
                style={{
                  background: role.current 
                    ? 'rgba(46, 255, 113, 0.05)' 
                    : 'radial-gradient(circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(46, 255, 113, 0.03) 0%, transparent 50%)',
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                  {/* Period */}
                  <div className="md:w-[180px] flex-shrink-0">
                    <p className="period-text text-accent font-mono">
                      {role.period}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3 group-hover:text-accent transition-colors duration-300">
                      {role.company}
                      {role.current && (
                        <span className="relative w-2 h-2">
                          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
                          <span className="relative block w-2 h-2 rounded-full bg-accent" />
                        </span>
                      )}
                    </h3>
                    <p className="text-accent mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      {role.role}
                    </p>
                    <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                      {role.description}
                    </p>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border border-transparent group-hover:border-accent/20 transition-colors duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Float animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-20px) scale(1.5); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
