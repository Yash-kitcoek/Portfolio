import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award } from "lucide-react";

const certs = [
  { title: "Full Stack Web Development", platform: "Apna College" },
  { title: "DSA in C++", platform: "Apna College" },
  { title: "Python Bootcamp Certificate", platform: "Code with Harry" },
];

export function Certifications() {
  return (
    <Section id="certifications" index="07" eyebrow="Certifications" title="Continuous Learning">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 flex gap-4 items-center hover:shadow-glow-accent transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center shrink-0 shadow-glow">
              <Award className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-semibold text-base leading-snug">{c.title}</h3>
              <p className="text-sm text-primary mt-0.5">{c.platform}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
