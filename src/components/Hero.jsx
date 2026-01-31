import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Check, Copy } from 'lucide-react';
import avatarDetails from '../assets/a1.jpeg';

// Reusable Magnetic Button Component
const MagneticButton = ({ children, className = "", onClick, href }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const center = { x: left + width / 2, y: top + height / 2 };
        const distance = { x: clientX - center.x, y: clientY - center.y };

        x.set(distance.x * 0.35);
        y.set(distance.y * 0.35);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const content = (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className={`relative flex items-center justify-center ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );

    if (href) {
        return <a href={href} target="_blank" rel="noreferrer">{content}</a>;
    }

    return content;
};

// Toast Notification Component
const Toast = ({ message, isVisible, onClose }) => (
    <AnimatePresence>
        {isVisible && (
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-slate-900/90 dark:bg-white/90 text-white dark:text-slate-900 backdrop-blur-md shadow-lg flex items-center gap-3 font-medium text-sm"
            >
                <div className="bg-green-500 rounded-full p-1">
                    <Check size={12} className="text-white" />
                </div>
                {message}
            </motion.div>
        )}
    </AnimatePresence>
);

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Full Stack Developer";
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const handleCopyEmail = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText("omkarrakshe2808@gmail.com");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <section className="relative h-full flex items-center justify-center py-10 px-6 overflow-hidden transition-colors duration-300">
            <Toast message="Email copied to clipboard!" isVisible={showToast} />

            <div className="z-10 w-full max-w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                {/* Avatar - Left Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 order-1 md:order-1"
                >
                    <div className="relative group w-64 h-64 md:w-96 md:h-96">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-50 blur-xl transition-opacity duration-500" />

                        <img
                            src={avatarDetails}
                            alt="Profile"
                            className="relative w-full h-full rounded-full object-cover border-4 border-slate-200 dark:border-slate-700 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </motion.div>

                {/* Content - Right Side */}
                <div className="flex-1 text-center md:text-left z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-2"
                    >
                        <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></span>
                        Available for hire
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-slate-900 dark:text-white"
                    >
                        Hi, I'm <span className="text-gradient">Omkar</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-6 flex items-center justify-center md:justify-start gap-2 h-8"
                    >
                        <span>{text}</span>
                        <span className="w-0.5 h-6 bg-slate-400 animate-blink">|</span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-8"
                    >
                        Building scalable backend systems and pixel-perfect web experiences.
                        Specialized in <span className="text-slate-900 dark:text-slate-200 font-semibold">Java</span>,
                        <span className="text-slate-900 dark:text-slate-200 font-semibold"> React</span>, and
                        <span className="text-slate-900 dark:text-slate-200 font-semibold"> Machine Learning</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center justify-center md:justify-start gap-4"
                    >
                        <MagneticButton href="https://github.com/Start-sys" className="p-3 rounded-full bg-slate-100/50 hover:bg-slate-200/50 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 text-slate-700 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 transition-colors">
                            <Github size={20} />
                        </MagneticButton>

                        <MagneticButton href="https://linkedin.com/in/omkar-rakshe" className="p-3 rounded-full bg-slate-100/50 hover:bg-slate-200/50 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 text-slate-700 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 transition-colors">
                            <Linkedin size={20} />
                        </MagneticButton>

                        <div className="relative group">
                            <MagneticButton onClick={handleCopyEmail} className="p-3 rounded-full bg-slate-100/50 hover:bg-slate-200/50 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 text-slate-700 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 transition-colors cursor-pointer">
                                <Mail size={20} />
                            </MagneticButton>
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-slate-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                Copy Email
                            </span>
                        </div>

                        <MagneticButton className="ml-4">
                            <a href="#projects" className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-medium transition-colors shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 flex items-center gap-2">
                                View Work
                            </a>
                        </MagneticButton>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 text-slate-400 dark:text-slate-500"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;

