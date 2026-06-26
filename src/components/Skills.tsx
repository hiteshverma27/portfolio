const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & APIs",
      skills: ["Node.js", "Express", "NestJS", "TypeScript", "GraphQL", "REST"]
    },
    {
      title: "Frontend Frameworks",
      skills: ["React", "Next.js", "Redux", "TailwindCSS"]
    },
    {
      title: "Database & Cloud",
      skills: ["MongoDB", "PostgreSQL", "Redis", "AWS (EC2, S3)", "Docker"]
    },
    {
      title: "Testing & DevOps",
      skills: ["Jest", "Supertest", "GitHub Actions", "CI/CD", "Splunk"]
    },
    {
      title: "Architecture & Tools",
      skills: ["Microservices", "System Design", "OAuth", "JWT", "Git"]
    }
  ];

  return (
    <section id="skills" className="section container">
      <h2 className="section-title">Technical Expertise</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              {category.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {category.skills.map((skill, i) => (
                <div key={i} style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid var(--border-color)', 
                  padding: '0.5rem 1rem', 
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(100, 108, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(100, 108, 255, 0.3)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
