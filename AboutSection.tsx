import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { User, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const cards = [
    {
      icon: User,
      title: "Who I Am",
      description: "A passionate full-stack developer with 5+ years of experience creating digital solutions that make a difference.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Briefcase,
      title: "What I Do",
      description: "I specialize in React, Node.js, and modern web technologies to build scalable applications and engaging user experiences.",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: GraduationCap,
      title: "My Journey",
      description: "Computer Science graduate turned self-taught developer, constantly learning and adapting to new technologies and trends.",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Heart,
      title: "My Passion",
      description: "I love solving complex problems, mentoring junior developers, and contributing to open-source projects in my free time.",
      gradient: "from-red-500/20 to-orange-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get to know the person behind the code
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzU2NDk5Nzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-2xl">👋</span>
            </motion.div>
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 flex flex-col justify-center"
        >
          <h3 className="text-2xl mb-4">Hello! I'm John</h3>
          <p className="text-muted-foreground leading-relaxed">
            I'm a creative developer based in San Francisco, passionate about building 
            exceptional digital experiences. With a strong foundation in both frontend 
            and backend technologies, I enjoy bringing ideas to life through clean, 
            efficient code.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, you can find me exploring new hiking trails, 
            experimenting with photography, or contributing to open-source projects 
            that make the web a better place for everyone.
          </p>
          
          <div className="flex flex-wrap gap-2 pt-4">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
              <Badge key={tech} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {cards.map((card, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card className="p-6 h-full group hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden">
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="relative z-10">
                <motion.div
                  whileHow={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                >
                  <card.icon className="text-primary" size={24} />
                </motion.div>
                <h4 className="mb-3">{card.title}</h4>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {card.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}