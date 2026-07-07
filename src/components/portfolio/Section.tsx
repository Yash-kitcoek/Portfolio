import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({ id, eyebrow, title, subtitle, children }: { id: string; eyebrow: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="py-16 sm:py-20 md:py-24 relative scroll-mt-20">
      <div className="container mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-mono">{eyebrow}</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            {title.split(" ").map((w, i) => i === title.split(" ").length - 1 ? <span key={i} className="text-gradient">{w}</span> : <span key={i}>{w} </span>)}
          </h2>
          {subtitle && <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2">{subtitle}</p>}
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-primary" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
