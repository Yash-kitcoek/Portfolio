import { motion } from "framer-motion";
import { Github, Linkedin, Code2, ArrowRight, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import avatar from "@/assets/avatar.jpg";

const titles = ["AIML Engineer", "Full Stack Developer", "MERN Developer", "Problem Solver"];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[idx];
    const speed = deleting ? 50 : 100;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1500);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => (i + 1) % titles.length);
        return;
      }
      setText(deleting ? current.substring(0, text.length - 1) : current.substring(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-accent/20 blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] sm:leading-[1.05] mb-4">
            Hi, I'm <span className="text-gradient">Yash Gaikwad</span>
          </h1>
          <div className="text-xl sm:text-2xl md:text-3xl font-display text-muted-foreground mb-6 h-9 sm:h-10">
            <span className="text-foreground">{text}</span>
            <span className="inline-block w-1 h-6 sm:h-7 bg-primary ml-1 animate-pulse align-middle" />
          </div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
            B.Tech AIML student building full-stack web applications and exploring machine learning — turning ideas into shipped products.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a href="#projects" className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:shadow-glow transition-all hover:-translate-y-0.5">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-colors">
              <Mail className="w-4 h-4" /> Contact Me
            </a>
            <a
              href="/Yash_Gaikwad_Resume.pdf"
              download="Yash_Gaikwad_Resume.pdf"
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-colors"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
          <div className="flex gap-3">
            {[
              { icon: Github, href: "https://github.com/Yash-kitcoek" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Code2, href: "https://leetcode.com" },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" className="glass w-11 h-11 grid place-items-center rounded-xl hover:bg-gradient-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5">
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-50 animate-glow-pulse" />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full p-1.5 bg-gradient-primary shadow-glow">
                <img
                  src={avatar}
                  alt="Yash Gaikwad"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-2 -right-2 glass-strong rounded-2xl px-4 py-2 text-sm font-mono"
              >
                {"<AI/>"}
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-2 -left-4 glass-strong rounded-2xl px-4 py-2 text-sm font-mono"
              >
                {"{ MERN }"}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
