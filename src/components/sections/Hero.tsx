import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ChevronDown, FileText } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Glow orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm md:text-base mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          >
            <span className="text-foreground">Shivanshu</span>
            <br />
            <span className="text-gradient">Srivastava</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8"
          >
            Software Developer passionate about building AI-powered applications,
            real-time systems, and crafting seamless web experiences that solve
            real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="https://github.com/2shivanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-3 bg-secondary rounded-lg border border-border hover-glow transition-all"
            >
              <Github className="w-5 h-5 text-primary" />
              <span className="text-foreground group-hover:text-primary transition-colors">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shivan21"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-3 bg-secondary rounded-lg border border-border hover-glow transition-all"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span className="text-foreground group-hover:text-primary transition-colors">LinkedIn</span>
            </a>
            <a
              href="mailto:shivanshu1120@gmail.com"
              className="group flex items-center gap-2 px-5 py-3 bg-secondary rounded-lg border border-border hover-glow transition-all"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-foreground group-hover:text-primary transition-colors">Email</span>
            </a>
            <a
              href="tel:+919555810154"
              className="group flex items-center gap-2 px-5 py-3 bg-secondary rounded-lg border border-border hover-glow transition-all"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-foreground group-hover:text-primary transition-colors">+91-9555810154</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg border border-primary hover:bg-primary/90 transition-all"
              download
            >
              <FileText className="w-5 h-5" />
              <span className="transition-colors">Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;