import { Award, Shield, CheckCircle2 } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "Offensive Security Certified Professional (OSCP)",
      issuer: "Offensive Security",
      date: "October 2024",
      icon: Shield,
      link: "https://www.credential.net/78f20e4b-1c25-490b-b34d-bdd50b0b1a4e"
    },
    {
      name: "Mobile Penetration Testing of Android Applications",
      issuer: "Professional Course",
      date: "March 2025",
      icon: CheckCircle2,
    },
    {
      name: "Burp Suite Certified Practitioner (BSCP)",
      issuer: "PortSwigger",
      date: "In Progress",
      icon: Award,
      link: "https://portswigger.net/web-security/certification"
    },
    {
      name: "Hack4u: Web Hacking",
      issuer: "Hack4u",
      date: "September 2025",
      id: "ID: 6167-2232-2965-1562",
      icon: Shield,
      link: "https://hack4u.io/check-certificate/"
    }
  ];

  const awards = [
    {
      title: "HackTheBox",
      description: "150+ compromised machines, Pro Labs Dante & Offshore completed",
      year: "Ongoing"
    },
    {
      title: "AKKADEMY Training Award",
      description: "Recognized for the best innovative project after one-month training program in Geneva",
      year: "2019"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">&gt;_</span> Certifications & Achievements
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                <Shield className="w-6 h-6 text-primary" />
                Professional Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <cert.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{cert.name}</h4>
                        <p className="text-sm text-primary font-mono mb-1">{cert.issuer}</p>
                        <p className="text-sm text-primary font-mono mb-1">{cert.id}</p>
                        <p className="text-xs text-muted-foreground">{cert.date}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                <Award className="w-6 h-6 text-primary" />
                Achievements
              </h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{award.title}</h4>
                      <span className="text-sm text-muted-foreground font-mono bg-muted px-3 py-1 rounded flex-shrink-0">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
