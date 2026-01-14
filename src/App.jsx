import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import CinematicBackground from './components/CinematicBackground';
import BentoLayout from './components/BentoLayout';
import Dock from './components/Dock';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';
import { Sun, Moon } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState(() => {
    // Theme Persistence Strategy
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark'; // Default fallback
  });

  const [isLoading, setIsLoading] = useState(true);

  // Handle Theme Effects
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle Loading Simulation
  useEffect(() => {
    // Simulate loading assets or initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5s cinematic intro
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen font-sans text-slate-900 dark:text-slate-100 selection:bg-blue-500/30 overflow-x-hidden transition-colors duration-500">
          <CinematicBackground />

          <div className="relative z-10 animate-fade-in">
            <button
              onClick={toggleTheme}
              className="fixed top-4 right-4 z-[60] p-3 rounded-full bg-slate-100/10 dark:bg-slate-800/20 backdrop-blur-md text-slate-900 dark:text-slate-100 shadow-lg border border-white/10 hover:scale-110 transition-transform duration-300"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            <BentoLayout />

            <Footer />
            <Dock />
          </div>
        </div>
      )}
    </>
  );
}

export default App;


