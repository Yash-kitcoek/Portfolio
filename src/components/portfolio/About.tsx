import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code, Brain, Layers, Trophy } from "lucide-react";

const stats = [
  { icon: Code, label: "Projects, Solo-Built & Deployed", value: "3" },
  { icon: Brain, label: "AI/ML Specialization", value: "B.Tech" },
  { icon: Layers, label: "Primary Stack", value: "MERN" },
  { icon: Trophy, label: "Certifications", value: "3" },
];

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About Me" title="The story behind the code" subtitle="Builder. Independent shipper. Curious about ML.">
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass rounded-3xl p-8 md:p-10"
        >
          <p className="text-foreground/90 leading-relaxed mb-4">
            I'm <span className="text-gradient font-semibold">Yash Gaikwad</span>, a third-year B.Tech Computer Science student specialising in <span className="text-foreground font-medium">Artificial Intelligence & Machine Learning</span> at KIT College of Engineering, Kolhapur. I design, build, and deploy full-stack and AI-powered systems end-to-end — from database schema through production deployment.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My portfolio spans a property rental platform, AI-assisted campus tooling, multi-source knowledge retrieval, and automated video generation — three built solo and deployed on Vercel and Render, one led as the primary frontend contributor on a college team. I'm comfortable across the stack: REST API design, authentication, relational and NoSQL databases, and applied ML including speech-to-text, embeddings, and LLM-based retrieval.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not shipping, I'm sharpening DSA fundamentals or going deeper on RAG and applied ML. I'm currently looking for a software engineering internship where I can make a real, measurable impact.
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
