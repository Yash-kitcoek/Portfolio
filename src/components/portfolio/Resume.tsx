import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";
import { Section } from "./Section";

const RESUME_PATH = "/Yash_Gaikwad_Resume.pdf";

export function Resume() {
  return (
    <Section
      id="resume"
      index="06"
      eyebrow="Resume"
      title="Download My Resume"
      subtitle="Get a complete overview of my skills, projects, and education in one PDF."
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-8 sm:p-10 max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left"
      >
        <div className="w-16 h-16 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow shrink-0">
          <FileText className="w-7 h-7 text-primary-foreground" />
        </div>

        <div className="flex-1">
          <h3 className="font-display text-xl font-bold mb-1">Yash_Gaikwad_Resume.pdf</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Updated resume covering full-stack projects, technical skills, and education.
          </p>
        </div>

        <div className="flex gap-2 shrink-0">
          <a
            href={RESUME_PATH}
            download="Yash_Gaikwad_Resume.pdf"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-medium hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" /> Download
          </a>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noreferrer"
            aria-label="View resume in a new tab"
            className="inline-flex items-center gap-2 glass px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors"
          >
            <Eye className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
