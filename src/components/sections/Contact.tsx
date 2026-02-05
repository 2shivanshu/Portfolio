import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">#</span> Get In Touch
          </h2>
          <p className="text-muted-foreground mb-12">
            I'm currently looking for opportunities and my inbox is always open.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-card p-8 rounded-2xl border border-border">
            <div className="grid gap-4">
              <a
                href="mailto:shivanshu1120@gmail.com"
                className="group flex items-center gap-4 p-4 bg-secondary rounded-xl border border-border hover-glow transition-all"
              >
                <div className="p-3 bg-background rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    shivanshu1120@gmail.com
                  </p>
                </div>
                <Send className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="tel:+919555810154"
                className="group flex items-center gap-4 p-4 bg-secondary rounded-xl border border-border hover-glow transition-all"
              >
                <div className="p-3 bg-background rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    +91-9555810154
                  </p>
                </div>
                <Send className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <a
                  href="https://github.com/2shivanshu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 p-4 bg-secondary rounded-xl border border-border hover-glow transition-all"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    GitHub
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/shivan21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 p-4 bg-secondary rounded-xl border border-border hover-glow transition-all"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;