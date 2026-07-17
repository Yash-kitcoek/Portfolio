import { Github, Linkedin, Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="container mx-auto px-5 sm:px-6 py-10 grid gap-8 md:grid-cols-3 items-center text-center md:text-left">
        <div>
          <div className="font-mono text-sm inline-flex items-center gap-2 border border-primary/30 text-primary rounded-md px-2.5 py-1 tracking-widest bg-primary/5">
            YG
          </div>
          <p className="text-sm text-muted-foreground mt-3">Designing, building, and shipping — one commit at a time.</p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center text-sm">
          {["About", "Skills", "Projects", "Approach", "Resume", "Certifications", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors">{l}</a>
          ))}
        </div>
        <div className="flex gap-2 justify-center md:justify-end">
          {[
            { icon: Github, href: "https://github.com/Yash-kitcoek" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/yash-gaikwad-76412231a/" },
            { icon: Code2, href: "https://leetcode.com/u/Yash__12345/" },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 hover:bg-gradient-primary hover:border-transparent transition-all">
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-muted-foreground px-5">
        © {new Date().getFullYear()} Yash Gaikwad. Built with <Heart className="w-3 h-3 inline text-primary" /> using React &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
