import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Build Generative AI Apps and Solutions with No-Code Tools",
    issuer: "Infosys",
    date: "2024",
    description: "Professional certification awarded by Infosys.",
    link: "/INFOSYS1.pdf",
  },
  {
    title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    issuer: "Infosys",
    date: "2024",
    description: "Professional certification awarded by Infosys.",
    link: "/INFOSYS2.pdf",
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "Infosys",
    date: "2024",
    description: "Professional certification awarded by Infosys.",
    link: "/INFOSYS.pdf",
  },
  {
    title: "Responsive Design",
    issuer: "FreeCodeCamp",
    date: "2024",
    description: "Professional certification awarded by FreeCodeCamp.",
    link: "/FreeCodeCamp.Certificate.pdf",
  },
  {
    title: "Master Generative AI & Generative AI Tools (ChatGPT & More)",
    issuer: "Infosys",
    date: "2024",
    description: "Professional certification awarded by Infosys.",
    link: "/Infosys Certificate AI.pdf",
  },
  {
    title: "C++ Programming: OOPs and DSA",
    issuer: "Infosys",
    date: "2024",
    description: "Professional certification awarded by Infosys.",
    link: "/cppdsa.pdf",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary">#</span> Certifications
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Professional certifications demonstrating continuous learning and skill development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.title}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-card p-6 rounded-xl border border-border hover-glow cursor-pointer h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-display font-semibold text-foreground mb-1 line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-sm text-primary mb-3">{cert.issuer}</p>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {cert.description}
                </p>

                <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
                  {cert.date}
                </span>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;