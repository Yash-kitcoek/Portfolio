import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code, Brain, Layers, Trophy } from "lucide-react";

const stats = [
  { icon: Code, label: "Full-Stack Projects Shipped", value: "3+" },
  { icon: Brain, label: "AIML Specialization", value: "B.Tech" },
  { icon: Layers, label: "Primary Stack", value: "MERN" },
  { icon: Trophy, label: "Certifications", value: "2" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="The story behind the code" subtitle="Developer. Learner. Builder.">
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass rounded-3xl p-8 md:p-10"
        >
          <p className="text-foreground/90 leading-relaxed mb-4">
            I'm <span className="text-gradient font-semibold">Yash Gaikwad</span>, a second-year B.Tech Computer Science student specialising in <span className="text-foreground font-medium">Artificial Intelligence & Machine Learning</span> at KITCOEK, Kolhapur. I build full-stack web apps with the MERN stack and am actively exploring how ML can be woven into real products.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My projects span property rental platforms, campus utility tools, and agency UIs — each one pushing me to write cleaner code, make smarter architecture decisions, and ship something that actually works end-to-end. I enjoy the intersection where <span className="text-foreground">software engineering meets intelligent systems</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not building, I'm sharpening my DSA skills, grinding through ML fundamentals, or contributing to open source. I'm currently looking for internship opportunities where I can make a real impact.
          </p>
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-5 hover:border-gradient transition-all hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center mb-3">
                <s.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-2xl font-display font-bold">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
