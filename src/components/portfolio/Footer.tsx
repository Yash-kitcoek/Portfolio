import { Github, Linkedin, Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-center">
        <div>
          <div className="font-display font-bold text-lg">
            <span className="text-gradient">Yash</span>.dev
          </div>
          <p className="text-sm text-muted-foreground mt-2">Crafting the web, one commit at a time.</p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center text-sm">
          {["About", "Skills", "Projects", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors">{l}</a>
          ))}
        </div>
        <div className="flex gap-2 md:justify-end">
          {[Github, Linkedin, Code2].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 grid place-items-center rounded-xl bg-white/5 border border-white/10 hover:bg-gradient-primary hover:border-transparent transition-all">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Yash Gaikwad. Built with <Heart className="w-3 h-3 inline text-primary" /> using React & Tailwind CSS.
      </div>
    </footer>
  );
}
