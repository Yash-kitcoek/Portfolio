import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#approach", label: "Approach" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-primary origin-left z-[60]"
      />
      <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[min(94%,1180px)]">
        <nav className="glass-strong rounded-2xl px-4 sm:px-5 py-3 flex items-center justify-between gap-2">
          <a href="#home" className="flex items-center gap-2 shrink-0" aria-label="Back to top">
            <span className="font-mono text-xs sm:text-sm border border-primary/40 text-primary rounded-md px-2 py-1 tracking-widest bg-primary/5">
              YG
            </span>
            <span className="hidden sm:inline text-xs text-muted-foreground font-mono tracking-wide">
              // full-stack &amp; ml
            </span>
          </a>
          <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-2.5 xl:px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors whitespace-nowrap"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden lg:inline-flex bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:shadow-glow transition-shadow shrink-0"
          >
            Hire Me
          </a>
          <button
            className="lg:hidden text-foreground p-1.5 -mr-1.5"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden glass-strong mt-2 rounded-2xl p-3 flex flex-col gap-0.5 max-h-[70vh] overflow-y-auto"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1.5 bg-gradient-primary text-primary-foreground px-3 py-2.5 rounded-lg text-sm font-medium text-center"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </header>
    </>
  );
}
