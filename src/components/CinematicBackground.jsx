import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CinematicBackground = () => {
    const ref = useRef(null);
    const [timeOfDay, setTimeOfDay] = useState('night');

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    // Determine time of day
    useEffect(() => {
        const updateTimeOfDay = () => {
            const hour = new Date().getHours();
            if (hour >= 5 && hour < 12) setTimeOfDay('morning');
            else if (hour >= 12 && hour < 17) setTimeOfDay('afternoon');
            else if (hour >= 17 && hour < 21) setTimeOfDay('evening');
            else setTimeOfDay('night');
        };

        updateTimeOfDay();
        const interval = setInterval(updateTimeOfDay, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    // Time-based color palettes (Yellow/Gold Theme)
    const timeColors = {
        morning: {
            overlay: 'from-transparent via-yellow-200/10 dark:via-yellow-500/5 to-amber-200/10 dark:to-amber-500/5',
            orb1: 'bg-yellow-300/30 dark:bg-yellow-500/10',
            orb2: 'bg-amber-200/20 dark:bg-amber-500/10',
            orb3: 'bg-orange-100/20 dark:bg-orange-400/5',
        },
        afternoon: {
            overlay: 'from-transparent via-yellow-500/5 dark:via-yellow-600/10 to-orange-400/5 dark:to-orange-600/10',
            orb1: 'bg-yellow-400/20 dark:bg-yellow-500/10',
            orb2: 'bg-orange-300/20 dark:bg-orange-600/10',
            orb3: 'bg-amber-300/15 dark:bg-amber-600/5',
        },
        evening: {
            overlay: 'from-transparent via-amber-500/5 dark:via-amber-700/10 to-red-400/5 dark:to-red-900/10',
            orb1: 'bg-amber-500/20 dark:bg-amber-600/10',
            orb2: 'bg-orange-400/20 dark:bg-orange-700/10',
            orb3: 'bg-yellow-600/15 dark:bg-yellow-800/5',
        },
        night: {
            overlay: 'from-transparent via-yellow-900/5 dark:via-yellow-900/10 to-amber-900/5 dark:to-amber-950/10',
            orb1: 'bg-yellow-600/10 dark:bg-yellow-700/5',
            orb2: 'bg-amber-700/10 dark:bg-amber-800/5',
            orb3: 'bg-orange-800/5 dark:bg-orange-900/5',
        },
    };

    const currentPalette = timeColors[timeOfDay];

    // Parallax transforms for different layers
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 150]);

    // Smooth opacity fading
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.4, 0.2]);

    return (
        <div ref={ref} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Base gradient background */}
            <div className="absolute inset-0 bg-slate-100 dark:bg-[#030712] transition-colors duration-700" />

            {/* Time-aware Overlay Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-b transition-all duration-[2000ms] ${currentPalette.overlay}`} />

            {/* Floating Orb 1 - Top Left - Main Accent */}
            <motion.div
                style={{ y: y1, opacity }}
                className={`absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen transition-colors duration-[2000ms] ${currentPalette.orb1}`}
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Floating Orb 2 - Bottom Right - Secondary */}
            <motion.div
                style={{ y: y2, opacity }}
                className={`absolute -bottom-[15%] -right-[15%] w-[55vw] h-[55vw] rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen transition-colors duration-[2000ms] ${currentPalette.orb2}`}
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, -40, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            {/* Floating Orb 3 - Bottom Left - Subtle Depth */}
            <motion.div
                style={{ y: y3, opacity }}
                className={`absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full blur-[130px] mix-blend-multiply dark:mix-blend-screen transition-colors duration-[2000ms] ${currentPalette.orb3}`}
                animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, 10, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
            />

            {/* Noise Texture for Film Grain Effect */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay pointer-events-none">
                <svg width="100%" height="100%">
                    <filter id="noise">
                        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>
            </div>
        </div>
    );
};

export default CinematicBackground;
