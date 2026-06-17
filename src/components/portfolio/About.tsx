import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code, Brain, Layers, Trophy } from "lucide-react";

const stats = [
  { icon: Code, label: "Full Stack Projects", value: "2+" },
  { icon: Brain, label: "AIML Specialization", value: "B.Tech" },
  { icon: Layers, label: "Stack Focus", value: "MERN" },
  { icon: Trophy, label: "Always", value: "Learning" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="The story behind the code" subtitle="Get to know the developer, learner, and problem-solver.">
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass rounded-3xl p-8 md:p-10"
        >
          <p className="text-foreground/90 leading-relaxed mb-4">
            My name is <span className="text-gradient font-semibold">Yash Gaikwad</span>, a second-year B.Tech Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning (AIML). I am highly interested in technology — especially Web Development and Software Development — and enjoy building projects that sharpen my practical skills and problem-solving abilities.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I am passionate about learning new technologies and continuously exploring different areas of tech including programming, AI/ML, and full-stack development. My goal is to become a skilled <span className="text-foreground">Software Engineer</span> capable of building impactful and innovative solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I strongly believe in continuous learning, self-improvement, and gaining real-world development experience through projects and hands-on practice.
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
