import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, FolderGit2, Briefcase, Mail } from 'lucide-react';

const Dock = () => {
    return (
        <motion.div
            drag
            dragMomentum={false}
            initial={{ x: "-50%" }}
            className="fixed bottom-6 left-1/2 z-50 px-4 cursor-grab active:cursor-grabbing"
        >
            <div
                className="flex h-12 items-center gap-3 rounded-2xl glass px-3 shadow-2xl"
            >
                <DockIcon icon={<Home size={20} />} label="Home" href="#" />
                <DockIcon icon={<Briefcase size={20} />} label="Experience" href="#experience" />
                <DockIcon icon={<FolderGit2 size={20} />} label="Projects" href="#projects" />
                <DockIcon icon={<Mail size={20} />} label="Contact" href="mailto:omkarrakshe2808@gmail.com" />
            </div>
        </motion.div>
    );
};

const DockIcon = ({ icon, label, href }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative flex flex-col items-center">
            {/* Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, x: "-50%" }}
                        animate={{ opacity: 1, y: -40, x: "-50%" }}
                        exit={{ opacity: 0, y: 2, x: "-50%" }}
                        className="absolute left-1/2 -top-2 px-2 py-1 rounded-lg bg-slate-900/90 dark:bg-slate-100/90 backdrop-blur-md text-white dark:text-slate-900 text-[10px] font-semibold whitespace-nowrap border border-white/10 pointer-events-none z-50"
                    >
                        {label}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-slate-900/90 dark:border-t-slate-100/90" />
                    </motion.div>
                )}
            </AnimatePresence>

            <a
                href={href}
                ref={ref}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 hover:bg-blue-500/20 dark:hover:bg-blue-500/20 border border-white/20 dark:border-white/10 text-slate-600 dark:text-slate-300 transition-colors shadow-inner"
                aria-label={label}
            >
                {icon}
            </a>
        </div>
    );
};

export default Dock;

