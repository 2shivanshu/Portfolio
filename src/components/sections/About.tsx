import { motion } from "framer-motion";
import { User, Code, Database, Sparkles } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-24 relative bg-secondary/50">
            <div className="container px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <h2 className="font-display text-3xl md:text-4xl font-bold">
                                <span className="text-primary">#</span> About Me
                            </h2>

                            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                                <p className="leading-relaxed">
                                    I am a passionate <span className="text-foreground font-medium">Full Stack Developer</span> and <span className="text-foreground font-medium">AI Engineer</span> dedicated to building scalable, high-performance applications. With a deep understanding of modern web technologies and machine learning architectures, I bridge the gap between complex backend logic and intuitive frontend experiences.
                                </p>
                                <p className="leading-relaxed">
                                    My expertise lies in architecting real-time systems, optimizing database performance, and integrating intelligent AI solutions into practical software products. I thrive on solving challenging algorithmic problems and continuously pushing the boundaries of what's possible in web development.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Code className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="font-medium">Full Stack Development</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Sparkles className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="font-medium">AI & Machine Learning</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Database className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="font-medium">System Architecture</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <User className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="font-medium">User-Centric Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
