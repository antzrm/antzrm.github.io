import { Briefcase, GraduationCap } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Penetration Tester",
      company: "Ernst & Young (EY)",
      period: "November 2020 - June 2021",
      description: "Conducted penetration testing activities (Web, API, Infrastructure) for Fortune 500 clients including banks and insurance companies. Managed vulnerability scans using Qualys, Nessus, and Acunetix. Proactively identified and assessed vulnerabilities, collaborating with client teams to prioritize fixes. Participated in Vulnerability Management team for high & critical vulnerability monitoring."
    },
    {
      title: "Cyber Security Consultant",
      company: "AKKA Technologies",
      period: "July 2019 - April 2020",
      description: "Conducted pentests on internal web applications and APIs. Delivered security awareness training to business managers about cybersecurity concepts and best practices. Launched awareness campaigns regarding security good practices. Received AKKADEMY Training Award (Geneva)."
    },
    {
      title: "SAP Consultant",
      company: "Deloitte",
      period: "January 2019 - June 2019",
      description: "Programming in ABAP R/3. Application Management Services (AMS) in SAP with modules FI, SD, MM and VIM. Resolution of incidents via tickets."
    },
    {
      title: "Resources Management",
      company: "Endesa Distribución",
      period: "December 2017 - December 2018",
      description: "Automated repetitive manual tasks including payments and stock control using Python, VBA, and VBScript. Improved operational efficiency through custom automation solutions."
    }
  ];

  const education = [
    {
      degree: "Master of Cybersecurity & AI",
      institution: "Evolve Academy",
      period: "2026",
      details: "Advanced studies in cybersecurity practices integrated with artificial intelligence"
    },
    {
      degree: "Master of Cyber Security",
      institution: "Camilo José Cela University",
      period: "2020",
      details: "Specialized training in cybersecurity methodologies and practices"
    },
    {
      degree: "Master of Productivity and Personal Development",
      institution: "University of Alcalá",
      period: "2018",
      details: "Focus on efficiency optimization and professional development"
    },
    {
      degree: "Bachelor of Industrial Electronics and Automation Engineering",
      institution: "University of Córdoba",
      period: "2017",
      details: "Engineering foundation in electronics, automation, and control systems"
    }
  ];

  return (
    <section id="resume" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">&gt;_</span> Experience
            </h2>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Work History</h3>
            </div>
            
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div 
                  key={index}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full before:shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                >
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
                    <div className="flex flex-wrap items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-1">{job.title}</h4>
                        <p className="text-primary font-mono">{job.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono bg-muted px-3 py-1 rounded">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
                >
                  <div className="flex flex-wrap items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h4>
                      <p className="text-primary font-mono">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono bg-muted px-3 py-1 rounded">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
