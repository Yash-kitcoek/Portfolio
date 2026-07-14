import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Github, MapPin, Search, Brain, Video } from "lucide-react";

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
      "Deployed on Render",
    ],
    icon: MapPin,
    demo: "https://go-trip-gamma.vercel.app/listings",
    github: "https://github.com/Yash-kitcoek/GoTrip",
  },
  {
    title: "FindMate",
    tag: "AI-Powered Campus Lost & Found Platform",
    description:
      "A role-based web portal enabling students to report lost items and search for found ones across campus. Built on the MVC pattern with Node.js and MongoDB, featuring an AI matching engine, separate admin and student dashboards, image upload support, and keyword-based search and filtering.",
    tech: ["MongoDB", "Express.js", "Node.js", "Flask", "TF-IDF", "Bootstrap", "Mongoose"],
    features: [
      "Role-based auth (Admin / Student)",
      "AI matching engine (TF-IDF)",
      "Admin review dashboard",
      "Keyword search & filter",
      "Image upload support",
      "Responsive Bootstrap UI",
    ],
    icon: Search,
    demo: "https://findmate.onrender.com/",
    github: "https://github.com/Yash-kitcoek/FindMate",
  },
  {
    title: "KnowledgeOS",
    tag: "AI-Powered Multi-Source Knowledge Assistant",
    description:
      "A modular Retrieval-Augmented Generation system that turns videos, audio, and documents into a searchable knowledge base. Handles the full pipeline from speech-to-text transcription to embedding generation and semantic retrieval, then feeds context-aware prompts to a local open-source LLM for citation-backed answers.",
    tech: ["Python", "FastAPI", "Whisper", "Sentence Transformers", "FAISS / ChromaDB", "Ollama (Llama 3)"],
    features: [
      "Video-to-transcript pipeline (MP3 → JSON)",
      "Whisper-based speech-to-text",
      "Chunking & embedding generation",
      "Vector similarity search",
      "Context-aware prompt construction",
      "Local LLM inference via Ollama",
    ],
    icon: Brain,
    github: "https://github.com/Yash-kitcoek/KnowledgeOS-AI-Powered-Multi-Source-Knowledge-Assistant",
  },
  {
    title: "VidSnapAI",
    tag: "AI-Powered TikTok Reel Generator",
    description:
      "A Flask-based application that turns image uploads into vertical social-media reels, generating an AI voiceover with ElevenLabs and rendering the final video with FFmpeg. Includes a background worker for asynchronous rendering, job-status tracking, and a Dockerized deployment with CI test coverage.",
    tech: ["Flask", "Python", "FFmpeg", "ElevenLabs API", "SQLite", "Docker", "GitHub Actions"],
    features: [
      "Image-to-reel voiceover generation",
      "FFmpeg vertical video rendering",
      "Background worker for async jobs",
      "SQLite job status tracking",
      "Dockerized web + worker deployment",
      "CI pipeline with route tests",
    ],
    icon: Video,
    github: "https://github.com/Yash-kitcoek/-VidSnapAI---An-AI-Powered-TikTok-Reel-Generator",
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
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group relative glass rounded-3xl p-6 sm:p-8 overflow-hidden hover:-translate-y-1.5 transition-all duration-500 flex flex-col"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-primary rounded-full blur-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none" />

            <div className="relative flex flex-col flex-1">
              <div className="flex items-start justify-between mb-5">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow shrink-0">
                  <p.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider pt-1">
                  0{i + 1}
                </span>
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
