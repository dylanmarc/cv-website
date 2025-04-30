import { useState, useEffect } from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('header');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-gray-800 scroll-smooth bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <Header id="header" setActiveSection={setActiveSection} />
      <Skills id="skills" setActiveSection={setActiveSection} />
      <Experience id="experience" setActiveSection={setActiveSection} />
      <Projects id="projects" setActiveSection={setActiveSection} />
      <Contact id="contact" setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;