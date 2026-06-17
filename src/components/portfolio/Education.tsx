import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Journey">
      <div className="max-w-3xl mx-auto relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
        {[1].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-8"
          >
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-5 h-5 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
            <div className="md:text-right md:pr-8">
              <div className="inline-flex items-center gap-2 text-sm text-primary font-mono mb-2">
                <Calendar className="w-4 h-4" /> 2024 — 2028
              </div>
              <div className="text-muted-foreground text-sm flex md:justify-end items-center gap-2">
                <MapPin className="w-4 h-4" /> Kolhapur, India
              </div>
            </div>
            <div className="glass rounded-2xl p-6 md:ml-8 mt-4 md:mt-0">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">B.Tech in Computer Science (AIML)</h3>
                  <p className="text-sm text-muted-foreground">Kolhapur Institute of Technology's College of Engineering</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Software Development", "AI / ML", "DSA", "Full Stack"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
