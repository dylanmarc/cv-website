import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSectionObserver } from '../assets/hooks/useSectionObserver';

import jsImage from '../assets/images/skills/JavaScript-logo.png';
import htmlImage from '../assets/images/skills/html.png';
import photoshopImage from '../assets/images/skills/Adobe_Photoshop_CC_icon.svg.png';
import cssImage from '../assets/images/skills/css.png';
import figmaImage from '../assets/images/skills/figma.png';
import gitImage from '../assets/images/skills/git.png';
import jqueryImage from '../assets/images/skills/jquery.png';
import nodeImage from '../assets/images/skills/nodejs.png';
import reactImage from '../assets/images/skills/reactjs.png';
import sqlImage from '../assets/images/skills/sql.png';
import typescriptImage from '../assets/images/skills/typescript.png';
import usertestingImage from '../assets/images/skills/usertesting.png';
import webapiImage from '../assets/images/skills/webapi.png';
import wireframingImage from '../assets/images/skills/wireframing.png';
import xsltImage from '../assets/images/skills/xslt.jpg';



interface Skill {
  name: string;
  level: number;
  description: string;
  color: string;
  bubblecolor?: string;
  image: string;
  position: { x: number; y: number };
}

function Skills({ id, setActiveSection }: { id: string; setActiveSection: (id: string) => void }) {
  const ref = useSectionObserver(id, setActiveSection);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  const skills: Skill[] = [
    {
      name: 'JavaScript',
      level: 100,
      color: '#f0db4f',
      bubblecolor: '#f0db4f',
      description: 'Proficient in modern JavaScript including ES6+ features, async/await, and functional programming patterns. Experienced with frameworks like React and Vue.',
      image: jsImage,
      position: { x: -80, y: -40 }
    },
    {
      name: 'HTML',
      level: 100,
      color: '#e34c26',
      bubblecolor: '#fff',
      description: 'Semantic markup and accessibility best practices. Experienced with HTML5 APIs and templating languages.',
      image: htmlImage,
      position: { x: 80, y: -40 }
    },
    {
      name: 'CSS',
      level: 90,
      color: '#2965f1',
      bubblecolor: '#2965f1',
      description: 'Responsive design, CSS3 features like Flexbox, Grid, animations and transitions. Experience with preprocessors like SASS.',
      image: cssImage,
      position: { x: 40, y: 20 }
    },
    {
      name: 'React',
      level: 90,
      color: '#61dafb',
      bubblecolor: '#000',
      description: 'Experienced with React hooks, context API, and state management. Familiar with Next.js and React performance optimization.',
      image: reactImage,
      position: { x: -40, y: 20 }
    },
    {
      name: 'TypeScript',
      level: 75,
      color: '#3178c6',
      bubblecolor: '#3178c6',
      description: 'Strong type system knowledge. Experience with type inference, generics, and integrating TS with React.',
      image: typescriptImage,
      position: { x: -60, y: 60 }
    },
    {
      name: 'Node.js',
      level: 70,
      color: '#68a063',
      bubblecolor: '#fff',
      description: 'Server-side JavaScript with Express. Experience building REST APIs and working with databases.',
      image: nodeImage,
      position: { x: 60, y: 60 }
    },
    {
      name: 'Git',
      level: 70,
      color: '#f14e32',
      bubblecolor: '#fff',
      description: 'Version control system. Experience with branching strategies, pull requests, and collaborative workflows.',
      image: gitImage,
      position: { x: 100, y: 20 }
    },
    {
      name: 'SQL',
      level: 70,
      color: '#00758f',
      bubblecolor: '#fff',
      description: 'Experience with relational databases, writing complex queries, and optimizing database performance.',
      image: sqlImage,
      position: { x: -100, y: 20 }
    },
    {
      name: 'jQuery',
      level: 60,
      color: '#0769ad',
      bubblecolor: '#fff',
      description: 'Simplified DOM manipulation and event handling. Experience with legacy projects using jQuery.',
      image: jqueryImage,
      position: { x: 120, y: -20 }
    },
    {
      name: 'XML/XSLT',
      level: 70,
      color: '#ff6600',
      bubblecolor: '#fff',
      description: 'Experience with XML data transformation and XSLT for styling and formatting.',
      image: xsltImage,
      position: { x: 0, y: 80 }
    },
    {
      name: 'WebAPIs',
      level: 70,
      color: '#fff',
      bubblecolor: '#fff',
      description: 'Experience with RESTful APIs, Fetch API, and integrating third-party APIs.',
      image: webapiImage,
      position: { x: 80, y: 80 }
    },
    {
      name: 'Figma',
      level: 80,
      color: '#03011c',
      bubblecolor: '#03011c',
      description: 'Proficient in prototyping, wireframing, and collaborative design workflows.',
      image: figmaImage,
      position: { x: -80, y: 80 }
    },
    {
      name: 'Adobe Photoshop',
      level: 75,
      color: '#001833',
      bubblecolor: '#001833',
      description: 'Experience with graphic design, photo editing, and creating UI assets.',
      image: photoshopImage,
      position: { x: 40, y: 100 }
    },
    {
      name: 'Wireframes',
      level: 70,
      color: '#31a8ff',
      bubblecolor: '#31a8ff',
      description: 'Experience in creating low-fidelity wireframes to visualize design concepts.',
      image: wireframingImage,
      position: { x: 60, y: -60 }
    },
    {
      name: 'User Testing',
      level: 70,
      color: '#4caf50',
      bubblecolor: '#fff',
      description: 'Conducting usability tests to gather feedback and improve user experience.',
      image: usertestingImage,
      position: { x: -60, y: -60 }
    }
  ];

  useEffect(() => {
    if (skills.length > 0 && !selectedSkill) {
      setSelectedSkill(skills[0]);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section id={id} ref={ref} className="py-20 bg-bg min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6">
      <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-text max-w-2xl mx-auto">
            Diverse skill set that includes front-end and back-end development, as well as design.
          </p>
        </div>

        <div className="relative h-[300px] md:h-[500px] w-full flex items-center justify-center">
          <OrganicHuddle
            skills={skills}
            selectedSkill={selectedSkill}
            onSelect={setSelectedSkill}
            windowSize={windowSize}
          />
        </div>

        {/* Skill Details Panel */}
        <div className="p-6 rounded-xl bg-muted/50 border border-muted/50 w-full md:w-1/2 mx-auto shadow-lg">
          {selectedSkill ? (
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 flex-shrink-0 rounded-full overflow-hidden" style={{ backgroundColor: selectedSkill.bubblecolor }}>
                <img
                  src={selectedSkill.image}
                  alt={selectedSkill.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-text mb-2">{selectedSkill.name}</h3>
                <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
                  <div className="w-full max-w-xs bg-muted/90 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full"
                      style={{
                        width: `${selectedSkill.level}%`,
                        backgroundColor: selectedSkill.color
                      }}
                    />
                  </div>
                  <span className="text-sm text-text whitespace-nowrap">{selectedSkill.level}%</span>
                </div>
                <p className="text-text">{selectedSkill.description}</p>
              </div>
            </div>
          ) : (
            <p className="text-text text-center">Select a skill to view details</p>
          )}
        </div>

        
      </div>
    </section>
  );
}

interface OrganicHuddleProps {
  skills: Skill[];
  selectedSkill: Skill | null;
  onSelect: (skill: Skill) => void;
  windowSize: { width: number; height: number };
}

function OrganicHuddle({
  skills,
  selectedSkill,
  onSelect,
  windowSize
}: OrganicHuddleProps) {
  const [time, setTime] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const positions = useRef<{ x: number; y: number; vx: number; vy: number }[]>(
    skills.map(skill => ({
      x: skill.position.x,
      y: skill.position.y,
      vx: Math.random() * 2 - 1,
      vy: Math.random() * 2 - 1
    }))
  );

  // Calculate bubble sizes based on window size
  const getBubbleSizes = () => {
    const isMobile = windowSize.width < 768;
    return {
      min: isMobile ? 20 : 30,
      max: isMobile ? 60 : 120
    };
  };

  const { min: BUBBLE_MIN_SIZE, max: BUBBLE_MAX_SIZE } = getBubbleSizes();

  useEffect(() => {
    let animId: number;
    const loop = () => {
      const dt = 1;

      for (let i = 0; i < positions.current.length; i++) {
        const pi = positions.current[i];
        const sizeI =
          BUBBLE_MIN_SIZE +
          (skills[i].level / 100) * (BUBBLE_MAX_SIZE - BUBBLE_MIN_SIZE);
        const isHoveredI = hoveredIndex === i;
        const isSelectedI = selectedSkill?.name === skills[i].name;
        const scaleI = isHoveredI ? HOVER_SCALE : (isSelectedI ? SELECTED_SCALE : 1);
        const radiusI = (sizeI * scaleI) / 2;

        // Pull to center
        const centerX = 0;
        const centerY = -40;
        const ax = (centerX - pi.x) * CENTER_PULL_STRENGTH;
        const ay = (centerY - pi.y) * CENTER_PULL_STRENGTH;
        pi.vx += ax * dt;
        pi.vy += ay * dt;

        // Collision resolution
        for (let j = i + 1; j < positions.current.length; j++) {
          const pj = positions.current[j];
          const sizeJ =
            BUBBLE_MIN_SIZE +
            (skills[j].level / 100) * (BUBBLE_MAX_SIZE - BUBBLE_MIN_SIZE);
          const isHoveredJ = hoveredIndex === j;
          const isSelectedJ = selectedSkill?.name === skills[j].name;
          const scaleJ = isHoveredJ ? HOVER_SCALE : (isSelectedJ ? SELECTED_SCALE : 1);
          const radiusJ = (sizeJ * scaleJ) / 2;

          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = radiusI + radiusJ + 4;

          if (dist < minDist && dist > 0) {
            const overlap = (minDist - dist) / 2;
            const ox = (dx / dist) * overlap * OVERLAP_MULTIPLIER;
            const oy = (dy / dist) * overlap * OVERLAP_MULTIPLIER;
            pi.x += ox;
            pi.y += oy;
            pj.x -= ox;
            pj.y -= oy;
          }
        }

        // Damping
        pi.vx *= VELOCITY_DAMPING;
        pi.vy *= VELOCITY_DAMPING;

        // Apply velocity
        pi.x += pi.vx * dt;
        pi.y += pi.vy * dt;
      }

      setTime(performance.now());
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [skills, hoveredIndex, selectedSkill, BUBBLE_MIN_SIZE, BUBBLE_MAX_SIZE]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {skills.map((skill, i) => {
        const levelNorm = skill.level / 100;
        const size =
          BUBBLE_MIN_SIZE + levelNorm * (BUBBLE_MAX_SIZE - BUBBLE_MIN_SIZE);
        const isHovered = hoveredIndex === i;
        const isSelected = selectedSkill?.name === skill.name;
        const damp = isHovered ? HOVER_DAMPING : 1;
        const p = positions.current[i];
        const wiggleX = Math.sin(time * WIGGLE_SPEED + i) * WIGGLE_AMPLITUDE * damp;
        const wiggleY = Math.cos(time * WIGGLE_SPEED + i) * WIGGLE_AMPLITUDE * damp;

        return (
          <motion.div
            key={skill.name}
            className={`absolute rounded-full cursor-pointer flex items-center justify-center shadow-md overflow-hidden ${
              isSelected ? 'border-4 border-accent' : 'border-2 border-muted'
            }`}
            style={{
              width: size,
              height: size,
              backgroundColor: skill.bubblecolor,
              zIndex: isHovered ? 10 : isSelected ? 5 : 1,
            }}
            animate={{
              x: p.x + wiggleX,
              y: p.y + wiggleY,
              scale: isHovered ? HOVER_SCALE : isSelected ? SELECTED_SCALE : 1,
              transition: {
                type: 'spring',
                stiffness: 80,
                damping: 12,
                mass: 0.5 + levelNorm,
              },
            }}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={() => onSelect(skill)}
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-3/4 h-3/4 object-contain pointer-events-none"
            />
          </motion.div>
        );
      })}
    </div>
  );
}

// Constants (keep these the same)
const CENTER_PULL_STRENGTH = 0.001;
const WIGGLE_AMPLITUDE = 1;
const WIGGLE_SPEED = 0.002;
const HOVER_DAMPING = 0.2;
const VELOCITY_DAMPING = 0.9;
const OVERLAP_MULTIPLIER = 1.5;
const HOVER_SCALE = 1.2;
const SELECTED_SCALE = 1.1;

export default Skills;