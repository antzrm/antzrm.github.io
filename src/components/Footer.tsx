import { Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-mono text-foreground">pentester.portfolio</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground font-mono">
                © {currentYear} All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground font-mono mt-1">
                Built with React + Vite + Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
