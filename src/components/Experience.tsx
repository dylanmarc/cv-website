import { motion, AnimatePresence } from 'framer-motion';
import { JSX, useState } from 'react';
import { FaBriefcase, FaCode, FaUsers } from 'react-icons/fa';
import { useSectionObserver } from '../assets/hooks/useSectionObserver';

interface Experience {
  year: string;
  title: string;
  company: string;
  details: string[];
  skills: string[];
  icon: JSX.Element;
}

const experienceData: Experience[] = [
  { 
    year: '2025 - Present', 
    title: 'Software Developer (Contract)', 
    company: 'Juvare', 
    details: [
      'Implementing first standalone incident and emergency management system.'
    ],
    skills: ['Incident Management', 'Emergency Systems', 'SaaS'],
    icon: <FaCode className="text-xl" />
  },
  { 
    year: '2023 - 2024', 
    title: 'Technical Project Manager', 
    company: 'Juvare', 
    details: [
      'Managed client communications, defined needs, translated them into technical specifications, and ensured timely, satisfactory delivery.'
    ],
    skills: ['Project Management', 'Client Communication', 'Technical Specifications'],
    icon: <FaBriefcase className="text-xl" />
  },
  { 
    year: '2020 - 2024', 
    title: 'Software Developer', 
    company: 'Juvare', 
    details: [
      'Worked with clients to gather requirements and deliver full-stack solutions.',
      'Managed communication, developed in agile/waterfall, and customized emergency management systems.'
    ],
    skills: ['Full-Stack Development', 'Agile', 'Waterfall', 'Emergency Management Systems'],
    icon: <FaCode className="text-xl" />
  },
  { 
    year: '2020 - 2024', 
    title: 'Website Designer and Developer (Freelance)', 
    company: 'Part-time Freelance Work', 
    details: [
      'Helped clients build and revamp websites, managing timelines and guiding them on SEO, marketing, and CMS maintenance.'
    ],
    skills: ['Web Design', 'SEO', 'CMS', 'Marketing'],
    icon: <FaUsers className="text-xl" />
  }
];

export default function Experience({ id, setActiveSection }: { id: string, setActiveSection: (id: string) => void }) {
    const ref = useSectionObserver(id, setActiveSection);
  

  const [expandedSections, setExpandedSections] = useState<boolean[]>(Array(experienceData.length).fill(true));

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <section 
      id={id}
      ref={ref}
      className="py-20 bg-bg"
      onMouseEnter={() => setActiveSection(id)}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-text"
        >
          My <span className="text-primary">Professional Journey</span>
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 pl-12">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot and year */}
                <div className="absolute -left-12 top-0 flex items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 rounded-full bg-primary flex items-center justify-center cursor-pointer ${
                      expandedSections[index] ? 'ring-4 ring-secondary' : ''
                    }`}
                    onClick={() => toggleSection(index)}
                  >
                    {exp.icon}
                  </motion.div>
                  <span className="ml-3 text-sm font-medium text-text">{exp.year}</span>
                </div>

                {/* Job title and company (always visible) */}
                <div className="mb-2 ml-4 pt-8">
                  <h3 className="text-lg font-bold text-text">{exp.title}</h3>
                  <p className="text-primary">{exp.company}</p>
                </div>

                {/* Expandable content */}
                <AnimatePresence>
                  {expandedSections[index] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-muted rounded-lg shadow">
                        <ul className="space-y-2 mb-4">
                          {exp.details.map((detail, i) => (
                            <li key={i} className="flex">
                              <span className="text-secondary mr-2">•</span>
                              <span className="text-text/90">{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-accent text-dark rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}