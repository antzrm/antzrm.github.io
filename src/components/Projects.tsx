import { Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Homelab",
      description: "Self-host Docker container apps I use daily and run on a miniPC.",
      tags: ["Docker", "Self-host", "Automation"],
      github: "https://github.com/antzrm/Homelab",
    },
    {
      title: "My GitBook",
      description: "My personal bible for Pentesting, Red Teaming and other Cyber Security fields.",
      tags: ["GitBook", "Notes", "Hacking"],
      github: "https://antonioluc93.gitbook.io/hacking/",
    },
    {
      title: "Find comments",
      description: "Find comments on websites by providing URL / JSON file (e.g. ffuf output) or file with full URLs and paths. Useful on assessments to detect hardcoded sensitive data or info left",
      tags: ["Bash", "Enumeration", "Loot"],
      github: "https://github.com/antzrm/find_comments",
    },
    {
      title: "rpcenumauth",
      description: "RPC enumeration tool that works with null creds but also supports authentication (created by s4vitar https://github.com/s4vitar/rpcenum and slightly modified by me).",
      tags: ["Bash", "Enumeration", "RPC", "Windows"],
      github: "https://github.com/antzrm/rpcenumauth",
    },
    {
      title: "Blind SQLi",
      description: "Python scripts to automate the exploitation of blind SQL injection.",
      tags: ["Python", "Blind SQLi", "injection"],
      github: "https://github.com/antzrm/blind_SQLi.git",
    }
    ,
    {
      title: "Non-Hacking Scripts",
      description: "Tools/scripts not related to hacking/cybersecurity that I have created in my free time.",
      tags: ["Bash", "non-hacking", "misc"],
      github: "https://github.com/antzrm/Non-Hacking-Scripts",
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
