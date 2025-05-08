import { motion } from 'framer-motion';
import DownArrowIcon from '../assets/icons/DownArrowIcon';
import ParticleBackground from '../assets/ParticleBackground';
import { useSectionObserver } from '../assets/hooks/useSectionObserver';
import { useEffect, useState } from 'react';

function Header({ id, setActiveSection }: { id: string; setActiveSection: (id: string) => void }) {
  const useResponsiveCircleConfig = () => {
    const [circleConfig, setCircleConfig] = useState([
      {
        color: { from: 'var(--color-primary)', to: 'var(--color-accent)' },
        startScale: 1.5,
        scale: 1.7,
        duration: 4,
        rotateDirection: 360,
        opacity: [0.2, 0.4, 0.2],
        borderRadius: ["50%", "40%", "60%", "50%"],
      },
      {
        color: { from: 'var(--color-secondary)', to: 'var(--color-muted)' },
        startScale: 1.5,
        scale: 1.7,
        duration: 6,
        rotateDirection: -360,
        opacity: [0.1, 0.3, 0.1],
        borderRadius: ["50%", "45%", "55%", "50%"],
      },
    ]);

    useEffect(() => {
      const updateCircleConfig = () => {
        const isSmallScreen = window.innerWidth < 768;
        setCircleConfig([
          {
            color: { from: 'var(--color-primary)', to: 'var(--color-accent)' },
            startScale: isSmallScreen ? 1 : 1.5,
            scale: isSmallScreen ? 1.2 : 1.7,
            duration: 4,
            rotateDirection: 360,
            opacity: [0.2, 0.4, 0.2],
            borderRadius: ["50%", "40%", "60%", "50%"],
          },
          {
            color: { from: 'var(--color-secondary)', to: 'var(--color-muted)' },
            startScale: isSmallScreen ? 1 : 1.5,
            scale: isSmallScreen ? 1.2 : 1.7,
            duration: 6,
            rotateDirection: -360,
            opacity: [0.1, 0.3, 0.1],
            borderRadius: ["50%", "45%", "55%", "50%"],
          },
        ]);
      };

      updateCircleConfig();
      window.addEventListener('resize', updateCircleConfig);
      return () => window.removeEventListener('resize', updateCircleConfig);
    }, []);

    return circleConfig;
  };

  const circleConfig = useResponsiveCircleConfig();

  

  const ref = useSectionObserver(id, setActiveSection);

  return (
    <header
      id={id}
      ref={ref}
      className="min-h-screen relative flex justify-center items-center h-screen overflow-hidden bg-bg text-text"
    >

      <motion.div
        className="absolute inset-0 flex justify-center items-center z-10"
        initial={{ scale: circleConfig[0].startScale, opacity: 0 }}
        animate={{ scale: [circleConfig[0].startScale, 1.2, 1], opacity: [0, 0.3, 0.6] }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {circleConfig.map((circle, index) => (
          <motion.div
            key={index}
            className={`absolute ${index === 0 ? "w-96 h-96" : "w-80 h-80"} rounded-full`}
            style={{
              background: `linear-gradient(to right, ${circle.color.from}, ${circle.color.to})`,
            }}
            animate={{
              scale: [circle.startScale, circle.scale, circle.startScale],
              rotate: [0, circle.rotateDirection, 0],
              opacity: circle.opacity,
              borderRadius: circle.borderRadius,
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              repeatType: index === 0 ? "reverse" : "mirror",
            }}
          />
        ))}
      </motion.div>
      {/* Header Content */}
      <div className="relative z-11 text-center px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-text"
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            >
            Hi, I'm <span className="text-heading">Dylan</span>{' '}
            <motion.span
              animate={{ rotate: [0, 25, 0, 25, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror', repeatDelay: 1 }}
              className="inline-block"
            >
              👋
            </motion.span>
            </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-text mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Full Stack Developer | UX/UI Specialist | Software Engineer
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
              href="#experience"
              className="inline-block px-6 py-3 bg-primary text-bg rounded-full font-semibold shadow-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center justify-center w-70 sm:w-auto"
              >
              <span className="mr-2">🌟</span> Explore My Journey
              </a>
              <a
              href="./Dylan Evans - Full Stack Developer.pdf"
              download="Dylan Evans - Full Stack Developer.pdf"
              className="inline-block px-6 py-3 bg-secondary text-bg rounded-full font-semibold shadow-lg hover:bg-secondary/90 transition-all hover:scale-105 flex items-center justify-center w-50 sm:w-auto"
              >
              <span className="mr-2">📄</span> Download CV
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <DownArrowIcon className="w-8 h-8 text-text animate-bounce" />
      </motion.div>
    </header>
  );
}

export default Header;
