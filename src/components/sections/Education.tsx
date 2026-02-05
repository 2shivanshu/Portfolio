import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    period: "Aug 2023 - Present",
    grade: "CGPA: 7.0",
    current: true,
  },
  {
    institution: "Indirapuram Public School",
    degree: "Intermediate (12th Grade)",
    period: "Apr 2021 - Mar 2023",
    grade: "73%",
    current: false,
  },
  {
    institution: "Indirapuram Public School",
    degree: "Matriculation (10th Grade)",
    period: "Apr 2019 - Mar 2021",
    grade: "82%",
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary">#</span> Education
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            My academic journey and qualifications.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-card border-2 border-primary glow z-10" />

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card p-6 rounded-xl border border-border hover-glow">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="font-display font-semibold text-foreground">
                            {edu.institution}
                          </h3>
                          {edu.current && (
                            <span className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-2">{edu.degree}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="text-muted-foreground">{edu.period}</span>
                          <span className="text-primary font-medium">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;