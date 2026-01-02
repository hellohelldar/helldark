import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseLight: React.FC = () => {
  const lightRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const light = lightRef.current;
    const glow = glowRef.current;
    const trails = trailRefs.current;

    if (!light || !glow) return;

    // Initial position off-screen
    gsap.set([light, glow, ...trails], { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Main light - follows immediately with spring physics
      gsap.to(light, {
        x: clientX,
        y: clientY,
        duration: 0.15,
        ease: 'power2.out',
      });

      // Outer glow - follows with delay for organic feel
      gsap.to(glow, {
        x: clientX,
        y: clientY,
        duration: 0.4,
        ease: 'power3.out',
      });

      // Trailing particles with staggered delay
      trails.forEach((trail, index) => {
        gsap.to(trail, {
          x: clientX,
          y: clientY,
          duration: 0.6 + index * 0.15,
          ease: 'power3.out',
        });
      });
    };

    const handleMouseEnter = () => {
      gsap.to([light, glow, ...trails], {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.05,
      });
    };

    const handleMouseLeave = () => {
      gsap.to([light, glow, ...trails], {
        opacity: 0,
        scale: 0.5,
        duration: 0.4,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    // Pulse animation for the main light
    gsap.to(light, {
      scale: 1.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Slow rotation for glow
    gsap.to(glow, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const addTrailRef = (el: HTMLDivElement | null) => {
    if (el && !trailRefs.current.includes(el)) {
      trailRefs.current.push(el);
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Trailing particles */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          ref={addTrailRef}
          className="absolute opacity-0"
          style={{
            width: `${80 - i * 20}px`,
            height: `${80 - i * 20}px`,
            background: `radial-gradient(circle, rgba(46, 255, 113, ${0.03 - i * 0.008}) 0%, transparent 70%)`,
            filter: 'blur(10px)',
          }}
        />
      ))}

      {/* Outer glow - Large ambient light */}
      <div
        ref={glowRef}
        className="absolute opacity-0"
        style={{
          width: '600px',
          height: '600px',
          background: `
            radial-gradient(circle, 
              rgba(46, 255, 113, 0.08) 0%, 
              rgba(46, 255, 113, 0.04) 25%,
              rgba(46, 255, 113, 0.01) 50%,
              transparent 70%
            )
          `,
          filter: 'blur(40px)',
        }}
      />

      {/* Main light core */}
      <div
        ref={lightRef}
        className="absolute opacity-0"
        style={{
          width: '200px',
          height: '200px',
          background: `
            radial-gradient(circle, 
              rgba(46, 255, 113, 0.15) 0%, 
              rgba(46, 255, 113, 0.08) 30%,
              rgba(46, 255, 113, 0.02) 60%,
              transparent 80%
            )
          `,
          filter: 'blur(20px)',
        }}
      />
    </div>
  );
};

export default MouseLight;

