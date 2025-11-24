import { Terminal } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Penetration Tester</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            <span className="text-foreground">Security Through</span>
            <br />
            <span className="text-primary drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              Offensive Testing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            Professional penetration tester specializing in web applications, network security, and vulnerability assessment.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
