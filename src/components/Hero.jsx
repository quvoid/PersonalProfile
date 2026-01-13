import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import avatarDetails from '../assets/a1.jpeg';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Full Stack Developer";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-full flex items-center justify-center py-10 px-6 overflow-hidden transition-colors duration-300">
            <div className="z-10 w-full max-w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                {/* Avatar - Left Side */}
                <div className="flex-shrink-0 order-1 md:order-1">
                    <div className="relative group w-64 h-64 md:w-96 md:h-96">
                        <img
                            src={avatarDetails}
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover border-4 border-slate-200 dark:border-slate-700 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Content - Right Side */}
                <div className="flex-1 text-center md:text-left z-10">
                    <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-2">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                        Available for hire
                    </h2>

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-slate-900 dark:text-white">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Omkar</span>
                    </h1>

                    <div className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-6 flex items-center justify-center md:justify-start gap-2 h-8">
                        <span>Full Stack Developer</span>
                        <span className="w-0.5 h-6 bg-slate-400 animate-blink">|</span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
                        Building scalable backend systems and pixel-perfect web experiences.
                        Specialized in <span className="text-slate-900 dark:text-slate-200 font-semibold">Java</span>,
                        <span className="text-slate-900 dark:text-slate-200 font-semibold"> React</span>, and
                        <span className="text-slate-900 dark:text-slate-200 font-semibold"> Machine Learning</span>.
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <SocialLink href="https://github.com/Start-sys" icon={<Github size={20} />} label="GitHub" />
                        <SocialLink href="https://linkedin.com/in/omkar-rakshe" icon={<Linkedin size={20} />} label="LinkedIn" />
                        <SocialLink href="mailto:omkarrakshe2808@gmail.com" icon={<Mail size={20} />} label="Email" />

                        <a href="#projects" className="ml-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors shadow-lg shadow-blue-500/20">
                            View Work
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 animate-bounce text-slate-400 dark:text-slate-500">
                <ChevronDown size={32} />
            </div>
        </section>
    );
};

// Magnetic Button Component
const SocialLink = ({ href, icon, label }) => {
    const ref = React.useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const center = { x: left + width / 2, y: top + height / 2 };

        const distance = { x: clientX - center.x, y: clientY - center.y };

        // Magnet strength
        setPosition({ x: distance.x * 0.3, y: distance.y * 0.3 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <a
            ref={ref}
            href={href}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            className="p-3 rounded-full bg-slate-100/50 hover:bg-slate-200/50 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 text-slate-700 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors duration-200 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
            aria-label={label}
        >
            {icon}
        </a>
    );
};

export default Hero;
