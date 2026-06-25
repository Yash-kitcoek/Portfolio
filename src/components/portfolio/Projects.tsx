import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Github, MapPin, Search, Zap } from "lucide-react";

const featured = {
  title: "DigitalHeroes",
  tag: "Internship Task — Agency Landing Page",
  description:
    "A modern, fully responsive agency landing page built as part of an internship assignment. Demonstrates clean UI design principles — structured layout, consistent typography, smooth scroll behaviour, and a polished hero section — all crafted from scratch without any CSS framework. Focused on semantic HTML and well-organised vanilla CSS to deliver a professional, cross-browser-compatible product.",
  tech: ["HTML5", "CSS3", "JavaScript"],
  features: [
    "Semantic HTML structure",
    "Responsive mobile-first layout",
    "Custom CSS animations",
    "Smooth scroll behaviour",
    "Hero & services sections",
    "Cross-browser compatible",
  ],
  icon: Zap,
  demo: "https://digital-heroes-task-one.vercel.app/",
  github: "https://github.com/Yash-kitcoek/DigitalHeroes-Task",
};

const projects = [
  {
    title: "GoTrip",
    tag: "Full-Stack Property Rental Platform",
    description:
      "A full-stack property rental platform where users can list, browse, and book properties. Built with the MERN stack featuring complete CRUD operations, session-based authentication via Passport.js, cloud image uploads through Cloudinary, and interactive map-based listings powered by Mapbox.",
    tech: ["MongoDB", "Express.js", "Node.js", "JavaScript", "Mongoose", "Cloudinary", "Mapbox", "CSS"],
    features: [
      "Session-based auth (Passport.js)",
      "Full CRUD for listings",
      "Cloudinary image uploads",
      "Mapbox location display",
      "Review & rating system",
      "Deployed on Vercel",
    ],
    icon: MapPin,
    demo: "https://go-trip-gamma.vercel.app/listings",
    github: "https://github.com/Yash-kitcoek/GoTrip",
  },
  {
    title: "FindMate",
    tag: "Campus Lost & Found Portal",
    description:
      "A role-based web portal enabling students to report lost items and search for found ones across campus. Built on the MVC pattern with Node.js and MongoDB, featuring separate admin and student dashboards, image upload support, and keyword-based search and filtering.",
    tech: ["MongoDB", "Express.js", "Node.js", "Bootstrap", "JavaScript", "Mongoose"],
    features: [
      "Role-based auth (Admin / Student)",
      "MVC architecture",
      "Item reporting & tracking",
      "Keyword search & filter",
      "Image upload support",
      "Responsive Bootstrap UI",
    ],
    icon: Search,
    demo: "https://findmate.onrender.com/",
    github: "https://github.com/Yash-kitcoek/FindMate",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured Work"
      subtitle="Things I've designed, built, and shipped."
    >
      {/* ── Featured project — full-width card ── */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative glass rounded-3xl p-7 md:p-10 overflow-hidden hover:-translate-y-1 transition-all duration-500 mb-8"
      >
        {/* glow on hover */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700" />

        {/* Featured badge */}
        <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 bg-gradient-primary text-primary-foreground text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full shadow-glow">
          <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
          Featured
        </div>

        <div className="relative md:grid md:grid-cols-2 md:gap-12 md:items-start">
          {/* Left — info */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow shrink-0">
                <featured.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold leading-tight">{featured.title}</h3>
                <p className="text-sm text-primary mt-0.5">{featured.tag}</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {featured.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-7">
              {featured.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <a
                href={featured.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-medium hover:shadow-glow transition-all"
              >
                <ExternalLink className="w-4 h-4" /> Visit Deployment
              </a>
              <a
                href={featured.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 glass px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>

          {/* Right — highlights */}
          <div className="mt-8 md:mt-0">
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Highlights
            </h4>
            <ul className="grid grid-cols-2 gap-3">
              {featured.features.map((f) => (
                <li
                  key={f}
                  className="glass rounded-xl px-4 py-3 text-xs text-foreground/85 flex items-start gap-2"
                >
                  <span className="text-primary mt-0.5 shrink-0">▸</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.article>

      {/* ── Other projects — 2-col grid ── */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group relative glass rounded-3xl p-7 overflow-hidden hover:-translate-y-2 transition-all duration-500"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-primary rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

            <div className="relative">
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow">
                  <p.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">
                  0{i + 1}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold mb-1">{p.title}</h3>
              <p className="text-sm text-primary mb-3">{p.tag}</p>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{p.description}</p>

              <div className="mb-5">
                <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Highlights
                </h4>
                <ul className="grid grid-cols-2 gap-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="text-xs text-foreground/80 flex items-start gap-1.5">
                      <span className="text-primary mt-0.5">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:shadow-glow transition-all"
                >
                  <ExternalLink className="w-4 h-4" /> Visit Deployment
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 glass px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
                >
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
