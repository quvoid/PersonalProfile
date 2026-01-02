import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white dark:bg-slate-900 dark:text-slate-100 selection:bg-blue-500/30 transition-colors duration-300">
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      <Hero />
      <Timeline />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
