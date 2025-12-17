import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Building2, MapPin, Sparkles, Rocket, Gamepad2, Code2, GraduationCap, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const roles = [
    {
      company: "Outtalent",
      location: "Remote / Global",
      period: "Feb 2023 - Present",
      description: "Career accelerator backed by YC, Founders Fund, and Sequoia. Helping engineers land global jobs.",
      positions: [
        { title: "CTO", date: "Feb 2025 - Present", type: "Full-time" },
        { title: "Software Engineer", date: "Feb 2023 - Feb 2025", type: "Full-time" }
      ],
      icon: null,
      logo: "/outtalent_logo.png",
      highlight: true
    },
    {
      company: "Portal College",
      location: "Central Asia",
      period: "Sep 2024 - Present",
      description: "Teaching and mentoring the next generation of engineers in Central Asia.",
      positions: [
        { title: "Teacher", date: "Sep 2024 - Present", type: "Part-time" }
      ],
      icon: GraduationCap,
      highlight: false
    },
    {
      company: "Supernatural",
      location: "Central Asia",
      period: "Sep 2023 - May 2024",
      description: "Venture studio & game accelerator. Nurtured indie teams in horror/strategy genres.",
      positions: [
        { title: "Founder", date: "Sep 2023 - May 2024", type: "Self-employed" }
      ],
      icon: Sparkles,
      highlight: false
    },
    {
      company: "Noctum Games",
      location: "Remote",
      period: "Jan 2020 - Sep 2023",
      description: "Indie game studio. Created horror games with 30M+ plays & 1M+ MAU.",
      positions: [
        { title: "Founder", date: "Jan 2020 - Sep 2023", type: "Self-employed" }
      ],
      icon: Gamepad2,
      highlight: false
    },
    {
      company: "Connect4pro",
      location: "Remote",
      period: "Sep 2020 - Jan 2023",
      description: "Investment portal for startups. Product ownership & full-stack development.",
      positions: [
        { title: "Software Engineer", date: "Sep 2020 - Jan 2023", type: "Full-time" }
      ],
      icon: Code2,
      highlight: false
    },
    {
      company: "Mancho",
      location: "Hybrid",
      period: "Nov 2021 - Feb 2022",
      description: "Product management internship before focusing on engineering.",
      positions: [
        { title: "Product Manager Intern", date: "Nov 2021 - Feb 2022", type: "Internship" }
      ],
      icon: TrendingUp,
      highlight: false
    }
  ];

  // Handle scroll to update active index
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = 380; // card width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, roles.length - 1));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [roles.length]);

  // Scroll to specific card
  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const cardWidth = 380;
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  // Drag to scroll functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const startX = e.pageX - container.offsetLeft;
    const scrollLeft = container.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.pageX - container.offsetLeft;
      const walk = (startX - x) * 1.5;
      container.scrollLeft = scrollLeft + walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const getTypeBadgeStyle = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-white/10 text-white border-white/20';
      case 'Self-employed':
        return 'bg-slate-800/80 text-slate-300 border-slate-700';
      case 'Part-time':
        return 'bg-slate-900 text-slate-400 border-slate-800';
      case 'Internship':
        return 'bg-slate-900/50 text-slate-500 border-slate-800/50';
      default:
        return 'bg-slate-900 text-slate-400 border-slate-800';
    }
  };

  return (
    <section id="experience" className="py-24 bg-dark-bg relative overflow-hidden border-t border-slate-900/50">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/[0.015] blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-end justify-between">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xs font-mono text-slate-600 tracking-widest uppercase mb-3 block"
              >
                Experience
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Journey</h2>
              <p className="text-slate-400 text-lg max-w-xl">
                From indie game developer to CTO — building products that matter.
              </p>
            </div>
            
            {/* Progress Indicator */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                {roles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToCard(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === activeIndex 
                        ? 'w-8 h-2 bg-white' 
                        : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-mono text-slate-600">
                {String(activeIndex + 1).padStart(2, '0')}/{String(roles.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Track */}
          <div className="absolute top-[28px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          
          {/* Scrollable Content */}
          <div 
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            className={`relative w-full overflow-x-auto pb-8 hide-scrollbar ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{ 
              scrollBehavior: isDragging ? 'auto' : 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <div className="flex gap-6 min-w-max pl-2 pr-[calc(100vw-400px)]">
              {roles.map((role, index) => {
                const Icon = role.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px -50px 0px 0px" }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    className="relative w-[350px] pt-14 flex-shrink-0"
                  >
                    {/* Timeline Node */}
                    <div className="absolute top-[22px] left-8 flex items-center gap-3">
                      <motion.div 
                        className={`w-3.5 h-3.5 rounded-full border-2 z-10 transition-all duration-300 ${
                          role.highlight 
                            ? 'bg-white border-white shadow-[0_0_20px_rgba(255,255,255,0.6)]' 
                            : 'bg-dark-bg border-slate-600 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                        }`}
                        whileHover={{ scale: 1.3 }}
                      />
                      <span className="text-[10px] font-mono text-slate-600 whitespace-nowrap">
                        {role.period.split(' - ')[0]}
                      </span>
                    </div>

                    {/* Card */}
                    <motion.div 
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className={`relative bg-gradient-to-b from-[#0c0c0c] to-[#080808] border rounded-2xl overflow-hidden h-full flex flex-col group transition-all duration-300 ${
                        role.highlight 
                          ? 'border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.08)]' 
                          : 'border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      {/* Card Header */}
                      <div className="p-6 pb-4">
                        <div className="flex items-start justify-between mb-5">
                          {role.logo ? (
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-300 ${
                              role.highlight 
                                ? 'bg-white' 
                                : 'bg-slate-900 border border-slate-800 group-hover:border-slate-700 group-hover:bg-slate-800'
                            }`}>
                              <img 
                                src={role.logo} 
                                alt={`${role.company} logo`}
                                className="w-7 h-7 object-contain"
                              />
                            </div>
                          ) : (
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                              role.highlight 
                                ? 'bg-white text-black' 
                                : 'bg-slate-900 text-slate-400 border border-slate-800 group-hover:border-slate-700 group-hover:text-white group-hover:bg-slate-800'
                            }`}>
                              {Icon && <Icon size={22} />}
                            </div>
                          )}
                          {role.highlight && (
                            <span className="text-[10px] font-medium tracking-wider uppercase px-2 py-1 bg-white text-black rounded-full">
                              Current
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-white transition-colors">
                          {role.company}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                          <MapPin size={13} className="flex-shrink-0" />
                          <span>{role.location}</span>
                          <span className="text-slate-700">·</span>
                          <span className="text-slate-600 font-mono text-xs">{role.period}</span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="mx-6 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

                      {/* Positions */}
                      <div className="p-6 pt-4 space-y-3 flex-grow">
                        {role.positions.map((pos, pIndex) => (
                          <div 
                            key={pIndex} 
                            className={`flex items-center justify-between ${
                              pIndex > 0 ? 'pt-3 border-t border-slate-800/50' : ''
                            }`}
                          >
                            <div>
                              <div className="text-base font-medium text-slate-200">
                                {pos.title}
                              </div>
                              <div className="text-xs text-slate-500 mt-0.5">
                                {pos.date}
                              </div>
                            </div>
                            <span className={`text-[10px] font-medium px-2 py-1 rounded-full border ${getTypeBadgeStyle(pos.type)}`}>
                              {pos.type}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Description Footer */}
                      <div className="px-6 pb-6">
                        <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                          {role.description}
                        </p>
                      </div>

                      {/* Bottom Gradient Line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300 ${
                        role.highlight 
                          ? 'bg-gradient-to-r from-transparent via-white/50 to-transparent' 
                          : 'bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-0 group-hover:opacity-100'
                      }`} />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Progress */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-6">
          {roles.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex 
                  ? 'w-6 h-1.5 bg-white' 
                  : 'w-1.5 h-1.5 bg-slate-700'
              }`}
            />
          ))}
        </div>

        {/* Keyboard hint */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-700 text-xs mt-8 hidden md:block"
        >
          Drag to explore · Click dots to navigate
        </motion.p>
      </div>
    </section>
  );
};

export default Experience;
