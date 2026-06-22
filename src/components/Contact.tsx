import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section container" style={{ paddingBottom: '8rem' }}>
      <div className="glass" style={{ padding: 'clamp(2rem, 5vw, 4rem) 2rem', textAlign: 'center', background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(100,108,255,0.05) 100%)' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '1rem' }}>Let's build something amazing</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a href="mailto:hitesh.v.work@gmail.com" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem', marginBottom: '4rem' }}>
          <Mail size={20} /> Say Hello
        </a>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', color: 'var(--text-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={18} /> Pune, India
          </div>
          <a href="mailto:hitesh.v.work@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}>
            <Mail size={18} /> hitesh.v.work@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/hiteshverma27/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}>
            <FaLinkedin size={18} /> LinkedIn
          </a>
          <a href="https://github.com/hiteshverma27" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}>
            <FaGithub size={18} /> GitHub
          </a>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>Designed & Built by Hitesh Verma</p>
      </div>
    </section>
  );
};

export default Contact;
