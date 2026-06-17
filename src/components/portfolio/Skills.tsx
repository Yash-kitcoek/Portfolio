import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code2, Globe, Database, Wrench, Sparkles } from "lucide-react";

const groups = [
  { icon: Code2, title: "Programming Languages", items: ["C", "C++", "Java", "Python", "JavaScript"] },
  { icon: Globe, title: "Web Development", items: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "REST APIs", "MERN Stack"] },
  { icon: Database, title: "Databases", items: ["MongoDB", "MySQL"] },
  { icon: Wrench, title: "Tools & Technologies", items: ["Git", "GitHub", "VS Code", "Postman", "Figma"] },
  { icon: Sparkles, title: "Areas of Interest", items: ["Full Stack Development", "Software Engineering", "AI / ML", "DSA", "Competitive Programming"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tech Stack & Toolkit" subtitle="Tools and technologies I love working with.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 hover:shadow-glow transition-all group"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center group-hover:scale-110 transition-transform">
                <g.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="text-sm px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-foreground/90 hover:bg-gradient-primary hover:text-primary-foreground hover:border-transparent transition-all cursor-default">
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
