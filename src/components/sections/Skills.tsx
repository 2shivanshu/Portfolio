import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "JavaScript", "C", "PHP", "Java"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Flask", "FastAPI", "Bootstrap", "HTML/CSS"],
  },
  {
    title: "Tools & Databases",
    skills: ["MySQL", "MongoDB", "Git", "WebRTC", "Express.js"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem-Solving", "Team Player", "Project Management", "Adaptability"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary">#</span> Skills
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border hover-glow"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-muted-foreground rounded-md border border-border hover:border-primary/50 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;