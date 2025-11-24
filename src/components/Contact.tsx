import { Mail, Github, Box, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">&gt;_</span> Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss security testing opportunities
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Email</h3>
                <Button
                  variant="link"
                  className="text-primary hover:text-primary/80 font-mono"
                  asChild
                >
                  <a href="mailto:your.email@example.com">your.email@example.com</a>
                </Button>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">GitHub</h3>
                <Button
                  variant="link"
                  className="text-primary hover:text-primary/80 font-mono"
                  asChild
                >
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    @yourusername
                  </a>
                </Button>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Box className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">HackTheBox</h3>
                <Button
                  variant="link"
                  className="text-primary hover:text-primary/80 font-mono"
                  asChild
                >
                  <a href="https://app.hackthebox.com/profile/yourusername" target="_blank" rel="noopener noreferrer">
                    @yourusername
                  </a>
                </Button>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">LinkedIn</h3>
                <Button
                  variant="link"
                  className="text-primary hover:text-primary/80 font-mono"
                  asChild
                >
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    @yourusername
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-12 p-6 bg-code-bg rounded-lg border border-primary/20">
              <p className="font-mono text-sm text-muted-foreground mb-2">
                <span className="text-terminal-green">$</span> echo "Available for freelance penetration testing"
              </p>
              <p className="font-mono text-sm text-primary">
                → Remote or on-site security assessments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
