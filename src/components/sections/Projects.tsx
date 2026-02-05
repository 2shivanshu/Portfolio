import { motion } from "framer-motion";
import { ExternalLink, Code2, Plane, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "BillionaireCode",
    description:
      "AI-powered code editor with intelligent code completion, real-time syntax suggestions, and smart debugging assistance to boost developer productivity.",
    tech: ["React", "TypeScript", "AI/ML", "Monaco Editor", "Node.js"],
    highlights: [
      "AI-driven code autocompletion",
      "Real-time error detection & fixes",
      "Multi-language support with smart snippets",
    ],
    icon: Code2,
    gradient: "from-cyan-500/20 to-teal-500/20",
    link: null, // Not on the hub
  },
  {
    title: "Tourism Management System",
    description:
      "Comprehensive travel platform for managing bookings, itineraries, and tourist destinations with seamless user experience and admin controls.",
    tech: ["Java", "Spring Boot", "MySQL", "REST API", "Thymeleaf"],
    highlights: [
      "End-to-end booking management",
      "Dynamic itinerary planning",
      "Admin dashboard for destination control",
    ],
    icon: Plane,
    gradient: "from-violet-500/20 to-purple-500/20",
    link: "https://tourism-management-system-wirt.onrender.com",
  },
  {
    title: "SupplySense AI",
    description:
      "Intelligent supply chain analytics platform leveraging AI to optimize inventory levels, predict demand patterns, and streamline logistics operations.",
    tech: ["Python", "TensorFlow", "React", "PostgreSQL", "FastAPI"],
    highlights: [
      "AI-powered demand forecasting",
      "Real-time inventory optimization",
      "Predictive logistics analytics",
    ],
    icon: BarChart3,
    gradient: "from-orange-500/20 to-amber-500/20",
    link: "https://supplysense-ai.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary">#</span> Projects
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Featured projects that showcase my skills in full-stack development,
            real-time systems, and algorithm design.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover-glow"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-8 md:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary rounded-xl border border-border group-hover:border-primary/30 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-secondary text-primary border border-primary/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;