import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
      <div className="container animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ marginBottom: '2rem' }}>
          <span className="badge">Available for new opportunities</span>
        </div>

        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-1px' }}>
          Crafting exceptional <br />
          <span style={{
            background: 'linear-gradient(135deg, #646cff 0%, #a0a0ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>digital experiences</span>
        </h1>

        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
          Hi, I'm <strong style={{ color: 'var(--text-primary)' }}>Hitesh</strong>. A Frontend React Software Engineer with 4+ years of high-impact experience architecting secure, accessible, and performant enterprise financial platforms.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#experience" className="btn btn-primary">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="/Hitesh_Verma_resu.pdf" download className="btn btn-secondary">
            Download Resume <Download size={18} />
          </a>
        </div>

        <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', borderTop: '1px solid var(--border-color)', paddingTop: '3rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>4+</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Years Experience</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>5M+</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Users Reached</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>100+</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Devs using my tools</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
