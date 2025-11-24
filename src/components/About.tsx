import { Shield, Code, Bug, Lock } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "Web Applications (OWASP Top 10), APIs, Internal & External Infrastructure, AD, Red Team exercises"
    },
    {
      icon: Code,
      title: "Automation & Scripting",
      description: "Python, Bash, VBA for security task automation and exploit development"
    },
    {
      icon: Bug,
      title: "Vulnerability Assessment",
      description: "Vulnerability analysis, risk assessment, and prioritization using industry-standard frameworks"
    },
    {
      icon: Lock,
      title: "Security Tooling",
      description: "Burp Suite, Metasploit, Nmap, Nessus, Qualys, Impacket, BloodHound, NetExec, ffuf"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">&gt;_</span> About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              OSCP-certified Penetration Tester with demonstrated offensive skills in securing web applications, APIs, and infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Professional Summary</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                OSCP-certified Penetration Tester with demonstrated offensive skills in securing web applications, APIs, and infrastructure. Proven ability to automate security tasks (Python, Bash) and communicate complex vulnerabilities to both technical and non-technical stakeholders.
              </p>
              <p>
                Extensive experience in penetration testing activities for Fortune 500 clients including banks and insurance companies. Specialized in Web Application Security (OWASP Top 10), API Testing, Infrastructure Assessment, and Active Directory environments.
              </p>
              <p>
                Active HackTheBox practitioner with 150+ pwned machines and completion of Dante & Offshore Pro Labs. Continuously expanding skillset through certifications and hands-on practice, currently pursuing Burp Suite Certified Practitioner (BSCP).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
