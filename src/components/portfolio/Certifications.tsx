import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award, Calendar } from "lucide-react";

const certs = [
  { title: "Full Stack Web Development", platform: "Apna College", duration: "Jun 2025 – Dec 2025" },
  { title: "DSA in C++", platform: "Apna College", duration: "Dec 2025 – Present" },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuous Learning">
      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 flex gap-5 items-center hover:shadow-glow-accent transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary grid place-items-center shrink-0 shadow-glow">
              <Award className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg">{c.title}</h3>
              <p className="text-sm text-primary">{c.platform}</p>
              <p className="text-xs text-muted-foreground mt-1 inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {c.duration}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
