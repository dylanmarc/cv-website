import { motion } from 'framer-motion';
import { useSectionObserver } from '../assets/hooks/useSectionObserver';
import flatappImage from '../assets/images/projects/flat-app.png';

const projects = [
  {
    title: "Flat Management App",
    description: "Web app for managing shared flats, including tracking expenses and chores.",
    technologies: ["TypeScript", "React", "Node.js", "Firebase"],
    image: flatappImage,
    link: "#"
  },
  {
    title: "Task Management App",
    description: "Kanban-style task board with drag-and-drop functionality and team collaboration.",
    technologies: ["React", "Firebase", "Material UI"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather visualization with forecasts and historical data.",
    technologies: ["JavaScript", "Chart.js", "Weather API"],
    image: "https://images.unsplash.com/photo-1561484930-9749e3b4f57a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "#"
  }
];

function Projects({ id, setActiveSection }: { id: string, setActiveSection: (id: string) => void }) {
    const ref = useSectionObserver(id, setActiveSection);
  
  return (
    <section 
      id={id} 
      ref={ref}
      className="py-20 bg-bg relative"
    >
      <motion.div
        className="container mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        onViewportEnter={() => setActiveSection(id)}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text mb-4">
            Project <span className="text-primary">Highlights</span>
          </h2>
          <p className="text-xl text-text max-w-2xl mx-auto">
            Some of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-muted/40 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-muted/20"
            >
              <div className="h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text mb-2">{project.title}</h3>
                <p className="text-text/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <a 
                  href={project.link} 
                  className="inline-block px-4 py-2 bg-primary text-bg rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  View Project
                </a> */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;