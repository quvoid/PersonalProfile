import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const CinematicBackground = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    // Parallax transforms for different layers
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 150]);

    // Smooth opacity fading
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.4, 0.2]);

    return (
        <div ref={ref} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Base gradient background - Updated to Deep Space / Aurora theme */}
            <div className="absolute inset-0 bg-slate-50/50 dark:bg-[#030712] transition-colors duration-700" />

            {/* Cinematic Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 dark:via-blue-900/10 to-emerald-500/5 dark:to-emerald-900/10" />

            {/* Floating Orb 1 - Top Left - Main Accent */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] bg-blue-400/20 dark:bg-blue-600/10 mix-blend-multiply dark:mix-blend-screen"
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

            {/* Floating Orb 2 - Middle Right - Secondary Tone */}
            <motion.div
                style={{ y: y2, opacity }}
                className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] rounded-full blur-[120px] bg-purple-300/20 dark:bg-purple-600/10 mix-blend-multiply dark:mix-blend-screen"
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
                className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full blur-[130px] bg-indigo-300/20 dark:bg-indigo-900/10 mix-blend-multiply dark:mix-blend-screen"
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
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />
        </div>
    );
};

export default CinematicBackground;
