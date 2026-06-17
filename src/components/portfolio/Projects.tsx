import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Github, MapPin, Search } from "lucide-react";

const projects = [
  {
    title: "GoTrip",
    tag: "Property Rental Platform",
    description: "A full-stack property rental platform that allows users to list, search, and book rental properties with secure authentication and booking management.",
    tech: ["MongoDB", "Express.js", "Node.js", "JavaScript", "Mongoose", "CSS"],
    features: ["User auth & authorization", "RESTful APIs", "Booking system", "Image upload", "Location-based listings", "Deployed on Render"],
    icon: MapPin,
  },
  {
    title: "FindMate",
    tag: "Campus Lost & Found",
    description: "A web-based lost and found platform designed for students to report, search, and recover lost items within a campus environment.",
    tech: ["MongoDB", "Express.js", "Node.js", "Bootstrap", "JavaScript"],
    features: ["Role-based authentication", "Item tracking system", "Search & filtering", "Image uploads", "REST APIs", "Responsive UI"],
    icon: Search,
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Featured Work" subtitle="A few things I've built recently.">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative glass rounded-3xl p-7 overflow-hidden hover:-translate-y-2 transition-all duration-500"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-primary rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative">
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow">
                  <p.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">0{i + 1}</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-1">{p.title}</h3>
              <p className="text-sm text-primary mb-3">{p.tag}</p>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{p.description}</p>

              <div className="mb-5">
                <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Highlights</h4>
                <ul className="grid grid-cols-2 gap-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="text-xs text-foreground/80 flex items-start gap-1.5">
                      <span className="text-primary mt-0.5">▸</span>{f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.tech.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-muted-foreground">{t}</span>
                ))}
              </div>

              <div className="flex gap-2">
                <a href="#" className="inline-flex items-center gap-1.5 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:shadow-glow transition-all">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 glass px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
