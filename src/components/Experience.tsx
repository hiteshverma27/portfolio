import { Briefcase, Code, Terminal, TestTube } from 'lucide-react';

const Experience = () => {
  const projects = [
    {
      title: "Core Trading Infrastructure API",
      icon: <Code size={24} color="var(--accent-color)" />,
      metrics: ["10k+ req/sec", "5M+ users", "<7ms latency"],
      desc: "Developed highly scalable microservices using Node.js, Express, and Redis for a flagship investment platform. Overhauled data pipelines to handle real-time trading data, significantly reducing latency and server costs."
    },
    {
      title: "Automated Payment Processing & CI/CD",
      icon: <TestTube size={24} color="var(--accent-color)" />,
      metrics: ["99.99% uptime", "77% faster processing"],
      desc: "Engineered robust payment processing pipelines integrating third-party APIs using Node.js and PostgreSQL. Slashed transaction times and integrated comprehensive E2E testing (Jest, Supertest) into CI/CD workflows."
    },
    {
      title: "BluePrints - Internal Developer Platform",
      icon: <Terminal size={24} color="var(--accent-color)" />,
      metrics: ["100+ devs adopted", "Init time <10 mins"],
      desc: "Architected a full-stack accelerator utilizing Node.js, GraphQL, React, and TypeScript. Drove backend engineering consistency, reducing new repository initialization time from 2 weeks to under 10 minutes."
    }
  ];

  return (
    <section id="experience" className="section container">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="glass" style={{ padding: 'clamp(1.5rem, 4vw, 3rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(100,108,255,0.1) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}></div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: 'var(--radius-lg)' }}>
            <Briefcase size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: 600 }}>Software Engineer</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>The Vanguard Group (Vendor: TCS) • 2022 - Present</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((proj, idx) => (
            <div key={idx} style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="experience-card-inner">
                <div style={{ marginTop: '0.25rem', display: 'flex', flexShrink: 0 }}>{proj.icon}</div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{proj.title}</h4>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    {proj.metrics.map((metric, i) => (
                      <span key={i} className="badge">{metric}</span>
                    ))}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{proj.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
