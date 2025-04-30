import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  toggleTheme: () => void;
  theme: string;
}

function Navigation({ activeSection, scrollToSection, toggleTheme, theme }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = [
    { id: 'header', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md shadow-sm border-b border-muted/20">
      <div className="container mx-auto px-6 py-3 flex">
      {/* Mobile menu button */}
      <div className="md:hidden ml-auto">
        <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 rounded-md text-text hover:text-primary focus:outline-none"
        >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between w-full">
        <ul className="flex items-center space-x-8">
          {sections.map((section) => (
        <motion.li
          key={section.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative list-none"
        >
          <button
            onClick={() => scrollToSection(section.id)}
            className={`px-3 py-2 text-sm font-medium transition-colors ${
          activeSection === section.id
            ? 'text-primary'
            : 'text-text hover:text-primary'
            }`}
          >
            {section.label}
            {activeSection === section.id && (
          <motion.span
            layoutId="nav-underline"
            className="absolute left-0 top-full h-0.5 w-full bg-primary"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
            )}
          </button>
        </motion.li>
          ))}
        </ul>
        <div>
          <button
        onClick={toggleTheme}
        className={`relative inline-flex items-center h-8 rounded-full w-16 transition-colors focus:outline-none ${
          theme === 'dark' ? 'bg-primary' : 'bg-muted'
        }`}
        aria-label="Toggle theme"
          >
        <span className="sr-only">Toggle theme</span>
        <span
          className={`inline-block w-6 h-6 transform transition-transform rounded-full bg-white ${
            theme === 'dark' ? 'translate-x-8' : 'translate-x-1'
          }`}
        >
          {theme === 'dark' ? (
            <FiMoon className="w-5 h-5 m-0.5 text-primary" />
          ) : (
            <FiSun className="w-5 h-5 m-0.5 text-text" />
          )}
        </span>
          </button>
        </div>
      </div>

        {/* Mobile Dropdown Menu (right side) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 right-0 w-3/4 max-w-xs bg-bg border-l border-muted/20 shadow-md md:hidden h-[calc(100vh-4rem)] z-50"
            >
              <ul className="flex flex-col space-y-2 p-4">
                {sections.map((section) => (
                  <motion.li key={section.id} whileTap={{ scale: 0.95 }}>
                    <button
                      onClick={() => handleSectionClick(section.id)}
                      className={`w-full text-right px-4 py-2 rounded-md text-md font-medium transition-colors ${
                        activeSection === section.id
                          ? 'bg-primary/10 text-primary'
                          : 'text-text hover:bg-muted'
                      }`}
                    >
                      {section.label}
                    </button>
                  </motion.li>
                ))}

                {/* Dark Mode Toggle (mobile only) */}
                <div className="mt-1 px-3 ml-auto">
                  <button
                  onClick={toggleTheme}
                  className={`relative inline-flex items-center h-8 rounded-full w-16 transition-colors focus:outline-none ${
                    theme === 'dark' ? 'bg-primary' : 'bg-muted'
                  }`}
                  aria-label="Toggle theme"
                  >
                  <span className="sr-only">Toggle theme</span>
                  <span
                    className={`inline-block w-6 h-6 transform transition-transform rounded-full bg-white ${
                    theme === 'dark' ? 'translate-x-8' : 'translate-x-1'
                    }`}
                  >
                    {theme === 'dark' ? (
                    <FiMoon className="w-5 h-5 m-0.5 text-primary" />
                    ) : (
                    <FiSun className="w-5 h-5 m-0.5 text-text" />
                    )}
                  </span>
                  </button>
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navigation;
