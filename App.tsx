import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="skills">
          <SkillsSection />
        </div>
        
        <div id="projects">
          <ProjectsSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-muted-foreground">
            © 2025 John Developer. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}