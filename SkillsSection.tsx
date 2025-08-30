import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "🔷" },
        { name: "Tailwind CSS", level: 88, icon: "🎨" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "Vue.js", level: 80, icon: "💚" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 92, icon: "🟢" },
        { name: "Python", level: 88, icon: "🐍" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "GraphQL", level: 78, icon: "🔗" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95, icon: "📝" },
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "AWS", level: 82, icon: "☁️" },
        { name: "Figma", level: 88, icon: "🎯" },
        { name: "Jest", level: 80, icon: "🧪" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const bounceVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl mb-4">Skills & Expertise</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div key={categoryIndex} variants={cardVariants}>
            <Card className="p-6 h-full hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={bounceVariants}
                    whileHover="hover"
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <motion.span
                          animate={{ 
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                          className="text-xl"
                        >
                          {skill.icon}
                        </motion.span>
                        <span className="group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + index * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <h4 className="text-xl mb-6">Also experienced with</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'Redux', 'Sass', 'Webpack', 'Vite', 'Express.js', 'FastAPI', 
            'Redis', 'Elasticsearch', 'Kubernetes', 'CI/CD', 'WebSockets', 'REST APIs'
          ].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Badge 
                variant="secondary" 
                className="px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}