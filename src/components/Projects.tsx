import { Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Web Application Security Scanner",
      description: "Custom-built automated scanner for detecting OWASP Top 10 vulnerabilities in web applications. Features include SQL injection detection, XSS payload generation, and CSRF token analysis.",
      tags: ["Python", "Security", "Automation"],
      github: "#",
      demo: "#"
    },
    {
      title: "Network Reconnaissance Framework",
      description: "Comprehensive network enumeration tool combining multiple techniques for information gathering. Includes subdomain discovery, port scanning, and service fingerprinting capabilities.",
      tags: ["Go", "Networking", "OSINT"],
      github: "#",
      demo: "#"
    },
    {
      title: "Exploit Development Lab",
      description: "Collection of custom exploits and proof-of-concepts developed during security research. Includes buffer overflow exploits, privilege escalation techniques, and memory corruption exploits.",
      tags: ["C", "Assembly", "Exploitation"],
      github: "#",
      demo: "#"
    },
    {
      title: "API Security Testing Suite",
      description: "Specialized toolkit for REST API security testing. Features authentication bypass techniques, rate limiting tests, and automated fuzzing for API endpoints.",
      tags: ["Python", "API", "Security"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">&gt;_</span> Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Security tools and research work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] group"
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
