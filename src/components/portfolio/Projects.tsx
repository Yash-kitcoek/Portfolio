import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Github, MapPin, Search, BrainCircuit, Clapperboard } from "lucide-react";

const GITHUB_PROFILE = "https://github.com/Yash-kitcoek";

const projects = [
  {
    title: "GoTrip",
    tag: "Full-Stack Property Rental Platform",
    status: "Solo Project",
    description:
      "A full-stack rental platform spanning 5 database models and 20 REST endpoints — listings, reviews, bookings, and wishlists across 10 listing categories — with complete CRUD workflows.",
    tech: ["Node.js", "Express.js", "MongoDB Atlas", "EJS", "Bootstrap 5", "Passport.js", "Cloudinary"],
    features: [
      "5 models, 20 REST endpoints",
      "Passport.js auth + persistent sessions",
      "Dual-layer validation (Joi + Mongoose)",
      "Cloudinary multi-image upload",
      "Deployed on Vercel (serverless)",
      "MongoDB Atlas in production",
    ],
    icon: MapPin,
    demo: "https://portfolio-amber-three-uesf0vd1to.vercel.app/",
    github: "https://github.com/Yash-kitcoek/GoTrip",
  },
  {
    title: "FindMate",
    tag: "AI-Powered Campus Lost & Found Platform",
    status: "College Team Project",
    description:
      "A role-based portal for reporting and recovering lost campus items. Led the frontend — 25 EJS templates (~4,400 lines) — and integrated a Flask AI matching microservice built by the team.",
    tech: ["Node.js", "Express.js", "EJS", "Tailwind CSS", "Passport.js", "Cloudinary", "Flask"],
    features: [
      "Primary frontend contributor",
      "25 EJS templates (~4,400 lines)",
      "Passport.js auth + Cloudinary uploads",
      "AI matching: 6 weighted signals",
      "Admin review flows",
      "Deployed on Render",
    ],
    icon: Search,
    demo: "https://findmate.onrender.com/",
    github: "https://github.com/Yash-kitcoek/FindMate",
  },
  {
    title: "KnowledgeOS",
    tag: "AI-Powered Multi-Source Knowledge Assistant",
    status: "Solo Project",
    description:
      "A FastAPI ingestion service that turns documents, images, and audio/video into a searchable knowledge base, with a retrieval-augmented answering loop over transcript chunks.",
    tech: ["Python", "FastAPI", "Whisper", "Tesseract OCR", "Ollama (Llama 3)"],
    features: [
      "14 supported source file types",
      "OCR + Whisper transcription",
      "RAG loop via Ollama embeddings",
      "Cosine-similarity chunk retrieval",
      "Citations with timestamps",
      "Staged architecture roadmap",
    ],
    icon: BrainCircuit,
    demo: null,
    github: GITHUB_PROFILE,
  },
  {
    title: "VidSnapAI",
    tag: "AI-Powered TikTok Reel Generator",
    status: "Solo Project",
    description:
      "A Flask app that converts uploaded images into 1080×1920 vertical video reels, with AI voiceover generation and an async background rendering worker.",
    tech: ["Flask", "Python", "FFmpeg", "ElevenLabs API", "SQLite", "Docker"],
    features: [
      "25MB uploads, 4 image formats",
      "1080×1920 FFmpeg video output",
      "ElevenLabs AI voiceover (TTS)",
      "Async polling render worker",
      "Dockerized (docker-compose)",
      "GitHub Actions CI on every push",
    ],
    icon: Clapperboard,
    demo: null,
    github: GITHUB_PROFILE,
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      index="05"
      eyebrow="Projects"
      title="Featured Work"
      subtitle="Things I've designed, built, and shipped."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative glass rounded-3xl p-6 sm:p-8 overflow-hidden hover:-translate-y-1.5 transition-all duration-500 flex flex-col"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-primary rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none" />

            <div className="relative flex flex-col flex-1">
              <div className="flex items-start justify-between mb-5 gap-2">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow shrink-0">
                  <p.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">
                    FIG. 0{i + 1}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 whitespace-nowrap">
                    {p.status}
                  </span>
                </div>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold mb-1">{p.title}</h3>
              <p className="text-sm text-primary mb-3">{p.tag}</p>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{p.description}</p>

              <div className="mb-5">
                <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-2.5">
                  Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {p.features.map((f) => (
                    <li key={f} className="text-xs text-foreground/80 flex items-start gap-1.5">
                      <span className="text-primary mt-0.5 shrink-0">▸</span>
                      <span>{f}</span>
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

              <div className="flex flex-wrap gap-2 mt-auto pt-1">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:shadow-glow transition-all"
                  >
                    <ExternalLink className="w-4 h-4" /> Visit Deployment
                  </a>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 glass px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  <Github className="w-4 h-4" /> {p.demo ? "GitHub" : "View on GitHub"}
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
