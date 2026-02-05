import { motion } from "framer-motion";
import { User, Code, Database, Sparkles } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-8">
                            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">About Me</span>
                            </h2>

                            <div className="relative p-8 rounded-[2rem] bg-secondary/30 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden group hover:shadow-glow transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative space-y-6 text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        I am a passionate <span className="text-foreground font-semibold">Full Stack Developer</span> and <span className="text-foreground font-semibold">AI Engineer</span> dedicated to building scalable, high-performance applications. With a deep understanding of modern web technologies and machine learning architectures, I bridge the gap between complex backend logic and intuitive frontend experiences.
                                    </p>
                                    <p>
                                        My expertise lies in architecting real-time systems, optimizing database performance, and integrating intelligent AI solutions into practical software products. I thrive on solving challenging algorithmic problems and continuously pushing the boundaries of what's possible in web development.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                                {[
                                    { icon: Code, label: "Full Stack Development", color: "text-blue-400", bg: "bg-blue-400/10" },
                                    { icon: Sparkles, label: "AI & Machine Learning", color: "text-purple-400", bg: "bg-purple-400/10" },
                                    { icon: Database, label: "System Architecture", color: "text-emerald-400", bg: "bg-emerald-400/10" },
                                    { icon: User, label: "User-Centric Design", color: "text-pink-400", bg: "bg-pink-400/10" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="flex items-center gap-4 p-5 rounded-2xl bg-secondary/40 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5"
                                    >
                                        <div className={`p-3 rounded-xl ${item.bg}`}>
                                            <item.icon className={`w-6 h-6 ${item.color}`} />
                                        </div>
                                        <span className="font-medium text-foreground">{item.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
