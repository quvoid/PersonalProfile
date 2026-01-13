import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Home, FolderGit2, Briefcase, Mail } from 'lucide-react';

const Dock = () => {
    const mouseX = useMotionValue(null);

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4">
            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(null)}
                className="flex h-16 items-end gap-4 rounded-2xl bg-white/10 dark:bg-slate-900/40 px-4 pb-3 border border-white/20 dark:border-slate-700/30 backdrop-blur-xl shadow-2xl"
            >
                <DockIcon mouseX={mouseX} icon={<Home size={24} />} label="Home" href="#" />
                <DockIcon mouseX={mouseX} icon={<Briefcase size={24} />} label="Experience" href="#experience" />
                <DockIcon mouseX={mouseX} icon={<FolderGit2 size={24} />} label="Projects" href="#projects" />
                <DockIcon mouseX={mouseX} icon={<Mail size={24} />} label="Contact" href="mailto:omkarrakshe2808@gmail.com" />
            </motion.div>
        </div>
    );
};

const DockIcon = ({ mouseX, icon, label, href }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <div className="relative flex flex-col items-center">
            {/* Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, x: "-50%" }}
                        animate={{ opacity: 1, y: -50, x: "-50%" }}
                        exit={{ opacity: 0, y: 2, x: "-50%" }}
                        className="absolute left-1/2 -top-2 px-3 py-1 rounded-lg bg-slate-900/90 dark:bg-slate-100/90 backdrop-blur-md text-white dark:text-slate-900 text-xs font-semibold whitespace-nowrap border border-white/10 pointer-events-none z-50"
                    >
                        {label}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-slate-900/90 dark:border-t-slate-100/90" />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.a
                href={href}
                ref={ref}
                style={{ width }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="aspect-square w-10 flex items-center justify-center rounded-xl bg-slate-200/50 dark:bg-slate-800/50 hover:bg-blue-500/20 dark:hover:bg-blue-500/20 border border-white/20 dark:border-white/10 text-slate-600 dark:text-slate-300 transition-colors shadow-inner"
                aria-label={label}
            >
                <motion.div
                    className="flex items-center justify-center w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {icon}
                </motion.div>
            </motion.a>

            {/* Active/Indicator Dot - Optional default state */}
            {/* <div className="absolute -bottom-2 w-1 h-1 bg-slate-400 rounded-full" /> */}
        </div>
    );
};

export default Dock;

