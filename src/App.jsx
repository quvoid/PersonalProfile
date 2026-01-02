import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-slate-100 font-sans bg-slate-900 selection:bg-blue-500/30">
      <Hero />
      <Timeline />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
