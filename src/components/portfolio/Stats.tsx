import { motion } from "framer-motion";
import { Boxes, Code2, Rocket, Users } from "lucide-react";

const stats = [
  { icon: Boxes, value: "4", label: "Projects Shipped" },
  { icon: Code2, value: "~13K", label: "Lines of Code" },
  { icon: Rocket, value: "3", label: "Solo Deployments" },
  { icon: Users, value: "1", label: "Team Project Led (Frontend)" },
];

export function Stats() {
  return (
    <section className="relative py-10 sm:py-12">
      <div className="container mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl px-6 sm:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-primary grid place-items-center shadow-glow shrink-0">
                <s.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-gradient">{s.value}</div>
              <div className="text-[11px] sm:text-xs text-muted-foreground leading-tight max-w-[10rem]">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
