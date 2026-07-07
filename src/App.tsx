import { Toaster } from "./components/ui/sonner";
import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Education } from "./components/portfolio/Education";
import { Skills } from "./components/portfolio/Skills";
import { Projects } from "./components/portfolio/Projects";
import { Resume } from "./components/portfolio/Resume";
import { Certifications } from "./components/portfolio/Certifications";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";

export default function App() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Resume />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
