import { Briefcase, Code, Terminal, TestTube } from 'lucide-react';

const Experience = () => {
  const projects = [
    {
      title: "Investor Profile - Personal Investor Technology",
      icon: <Code size={24} color="var(--accent-color)" />,
      metrics: ["53% less drop-offs", "5M+ users", "<7min incident response"],
      desc: "Developed highly performant, accessible (WCAG AA) UI using functional React for a flagship investment platform. Overhauled multi-step onboarding flows by analyzing Splunk telemetry. Integrated Yodlee with React Suspense and Error Boundaries to significantly reduce page load times."
    },
    {
      title: "Automated Testing Framework & CI/CD",
      icon: <TestTube size={24} color="var(--accent-color)" />,
      metrics: ["85% test coverage", "77% faster testing"],
      desc: "Engineered a comprehensive testing framework (Cypress, Jest, JUnit) for critical workflows. Slashed end-to-end regression testing time from 1.5 hours to 20 minutes by integrating tests into CI/CD pipelines."
    },
    {
      title: "BluePrints - Internal Developer Platform",
      icon: <Terminal size={24} color="var(--accent-color)" />,
      metrics: ["100+ devs adopted", "Init time <10 mins"],
      desc: "Architected a reusable front-end design system and full-stack accelerator with React and TypeScript. Drove engineering consistency, reducing new repository initialization time from 2 weeks to under 10 minutes."
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
