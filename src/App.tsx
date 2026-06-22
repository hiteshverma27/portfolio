import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <div className="bg-gradient-blob blob-1"></div>
      <div className="bg-gradient-blob blob-2"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
