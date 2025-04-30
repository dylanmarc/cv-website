import { motion } from 'framer-motion';
import { useSectionObserver } from '../assets/hooks/useSectionObserver';

function Skills({ id, setActiveSection }: { id: string, setActiveSection: (id: string) => void }) {
  const ref = useSectionObserver(id, setActiveSection);

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 85 }
      ],
      bgColor: 'bg-secondary'
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 70 }
      ],
      bgColor: 'bg-primary'
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'CI/CD', level: 75 },
        { name: 'Jest', level: 80 }
      ],
      bgColor: 'bg-accent'
    }
  ];

  return (
    <section
      id={id}
      ref={ref}
      className="py-20 bg-bg relative z-100"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setActiveSection(id)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-text mb-4">
            My <span className="text-primary">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-text max-w-2xl mx-auto">
            Technologies I'm proficient in and areas where I excel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-bg rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-muted/20"
            >
              <div className={`bg-gradient-to-r ${category.bgColor} py-4 px-6`}>
                <h3 className="text-xl font-bold text-text">{category.category}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-text group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-muted">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted/20 rounded-full h-2.5">
                        <motion.div
                          className={`h-2.5 rounded-full ${category.bgColor}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.05 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Skills
