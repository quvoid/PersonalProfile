import React, { useState, useEffect } from 'react';
import CinematicBackground from './components/CinematicBackground';
import BentoLayout from './components/BentoLayout';
import Dock from './components/Dock';
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
    <div className="min-h-screen font-sans text-slate-900 dark:text-slate-100 selection:bg-blue-500/30 overflow-x-hidden">
      <CinematicBackground />

      <div className="relative z-10">
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 z-[60] p-3 rounded-full bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-md text-slate-900 dark:text-slate-100 shadow-lg border border-white/10 hover:scale-110 transition-transform duration-300"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        <BentoLayout />

        <Dock />
      </div>
    </div>
  );
}

export default App;
