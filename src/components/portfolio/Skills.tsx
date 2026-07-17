import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code2, Globe, Database, Wrench, Sparkles, Cpu } from "lucide-react";

const groups = [
  { icon: Code2, title: "Languages", items: ["JavaScript", "TypeScript", "Python", "C++", "C", "SQL"] },
  { icon: Sparkles, title: "Frontend", items: ["React", "Next.js", "Vite", "EJS", "Tailwind CSS", "Bootstrap 5", "HTML5", "CSS3"] },
  { icon: Globe, title: "Backend", items: ["Node.js", "Express.js", "Flask", "FastAPI", "REST API Design", "MVC Architecture"] },
  { icon: Database, title: "Databases", items: ["MongoDB (Atlas)", "Mongoose", "Supabase (Postgres)", "SQLite"] },
  { icon: Wrench, title: "Auth / Cloud / DevOps", items: ["Passport.js", "Cloudinary", "Docker", "Git", "GitHub Actions (CI)", "Vercel", "Render", "Vitest", "ESLint", "Resend"] },
  { icon: Cpu, title: "Applied AI/ML", items: ["Whisper (Speech-to-Text)", "Ollama (LLM & Embeddings)", "Anthropic API", "RAG", "FFmpeg", "Tesseract OCR"] },
];

export function Skills() {
  return (
    <Section id="skills" index="04" eyebrow="Skills" title="Tech Stack & Toolkit" subtitle="Technologies I build with and concepts I'm deepening.">
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
              <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center group-hover:scale-110 transition-transform shrink-0">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-5 glass rounded-2xl p-5 flex flex-wrap items-center gap-3"
      >
        <span className="text-xs uppercase tracking-wider text-muted-foreground shrink-0">
          Also familiar with (coursework):
        </span>
        {["Java", "Data Structures & Algorithms", "OOP", "DBMS"].map((it) => (
          <span key={it} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground font-mono">
            {it}
          </span>
        ))}
      </motion.div>
    </Section>
  );
}
