import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    date: "Sep 2025",
    description: "Comprehensive introduction to front-end development fundamentals.",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google | Coursera",
    date: "Sep 2025",
    description: "Foundational expertise in cybersecurity principles, risk management, and security frameworks.",
  },
  {
    title: "SQL and Relational Databases 101",
    issuer: "IBM | CognitiveClass.ai",
    date: "Jul 2025",
    description: "Practical expertise in designing, querying, and managing relational databases with SQL.",
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata",
    issuer: "Onwingspan",
    date: "Jul 2025",
    description: "Solid foundations in automata, formal grammars, and core computational theory principles.",
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "IBM | Coursera",
    date: "Sep 2024",
    description: "Core understanding of computer hardware and operating systems architecture.",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google | Coursera",
    date: "Sep 2024",
    description: "Practical networking skills including protocols, IP addressing, and troubleshooting.",
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
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-card p-6 rounded-xl border border-border hover-glow cursor-pointer"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;