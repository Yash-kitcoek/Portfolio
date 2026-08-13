import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "AI Web Development Intern",
    company: "InAmigos Foundation (IAF)",
    type: "Internship",
    period: "Aug 2026 — Present",
    duration: "1 mo",
    location: "Kolhapur, Maharashtra, India · Remote",
    bullets: [
      "Developed and maintained AI-powered web applications using modern web technologies.",
      "Worked on frontend and backend development to create responsive and user-friendly interfaces.",
      "Integrated AI/ML features into web applications to enhance user experience and automation.",
      "Collaborated with team members on project development, testing, and deployment.",
      "Participated in problem-solving, debugging, and performance optimization of web applications.",
      "Gained hands-on experience with the software development lifecycle, version control, and agile practices.",
    ],
    skills: ["JavaScript", "Node.js", "Express.js", "React.js", "MongoDB", "REST APIs"],
  },
];

export function Experience() {
  return (
    <Section id="experience" index="04" eyebrow="Experience" title="Where I've Worked">
      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-8"
          >
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-5 h-5 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
            <div className="md:text-right md:pr-8">
              <div className="inline-flex items-center gap-2 text-sm text-primary font-mono mb-2">
                <Calendar className="w-4 h-4" /> {exp.period}
                <span className="text-muted-foreground/60">· {exp.duration}</span>
              </div>
              <div className="text-muted-foreground text-sm flex md:justify-end items-center gap-2">
                <MapPin className="w-4 h-4" /> {exp.location}
              </div>
            </div>
            <div className="glass rounded-2xl p-6 md:ml-8 mt-4 md:mt-0">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center shrink-0">
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} · {exp.type}
                  </p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {exp.bullets.map((b) => (
                  <li key={b} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary shrink-0">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
