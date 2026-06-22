import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileOpen]);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={isScrolled ? 'glass-nav' : ''} style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        padding: isScrolled ? '1rem 0' : '1.5rem 0',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', textDecoration: 'none', letterSpacing: '-0.5px', zIndex: 51 }}>
            Hitesh<span style={{ color: 'var(--accent-color)' }}>.</span>
          </a>

          {/* Desktop Nav */}
          <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div style={{ width: '1px', height: '20px', background: 'var(--border-color)' }}></div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <a href="https://github.com/hiteshverma27" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/hiteshverma27/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle"
            style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', zIndex: 51, padding: '0.5rem' }}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="mobile-overlay"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(10, 10, 12, 0.98)',
          zIndex: 49,
          display: isMobileOpen ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.5rem'
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileOpen(false)}
            style={{
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontSize: '1.75rem',
              fontWeight: 600,
            }}
          >
            {link.name}
          </a>
        ))}
        <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
          <a href="https://github.com/hiteshverma27" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/hiteshverma27/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
