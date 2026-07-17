import { motion } from "framer-motion";
import { Section } from "./Section";
import { Blocks, GitBranch, Rocket } from "lucide-react";

const steps = [
  {
    icon: Blocks,
    tag: "SECTION A",
    title: "Design end-to-end",
    description:
      "Every project starts with the data model — schemas, relationships, and API contracts — before a single UI component gets built.",
  },
  {
    icon: GitBranch,
    tag: "SECTION B",
    title: "Own it solo, or lead the frontend",
    description:
      "Three projects built independently start to finish; on team work, taking the frontend end-to-end while integrating teammates' services cleanly.",
  },
  {
    icon: Rocket,
    tag: "SECTION C",
    title: "Ship to production",
    description:
      "Deployed with real users on Vercel and Render, backed by CI on GitHub Actions — not left as local-only demos.",
  },
];

export function Approach() {
  return (
    <Section
      id="approach"
      index="02"
      eyebrow="Approach"
      title="How I Build"
      subtitle="Three principles that show up in every project below."
    >
      <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 sm:p-7 relative overflow-hidden"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent">
              {s.tag}
            </span>
            <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center mt-4 mb-4 shadow-glow">
              <s.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
