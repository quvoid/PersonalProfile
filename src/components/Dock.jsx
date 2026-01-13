import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, FolderGit2, Briefcase, Mail, User } from 'lucide-react';

const Dock = () => {
    const mouseX = useMotionValue(null);

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(null)}
                className="flex h-16 items-end gap-4 rounded-2xl bg-slate-900/10 dark:bg-slate-50/10 px-4 pb-3 border border-slate-200/20 dark:border-slate-700/20 backdrop-blur-md shadow-2xl"
            >
                <DockIcon mouseX={mouseX} icon={<Home size={28} />} label="Home" href="#" />
                <DockIcon mouseX={mouseX} icon={<User size={28} />} label="Experience" href="#experience" />
                <DockIcon mouseX={mouseX} icon={<FolderGit2 size={28} />} label="Projects" href="#projects" />
                <DockIcon mouseX={mouseX} icon={<Mail size={28} />} label="Contact" href="mailto:omkarrakshe2808@gmail.com" />
            </motion.div>
        </div>
    );
};

const DockIcon = ({ mouseX, icon, label, href }) => {
    const ref = useRef(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.a
            href={href}
            ref={ref}
            style={{ width }}
            className="aspect-square w-10 flex items-center justify-center rounded-xl bg-white/20 dark:bg-slate-800/20 hover:bg-white/40 dark:hover:bg-slate-700/40 border border-white/10 dark:border-slate-600/10 backdrop-blur-sm text-slate-700 dark:text-slate-200 transition-colors"
            aria-label={label}
        >
            <div className="w-full h-full flex items-center justify-center">
                {icon}
            </div>
        </motion.a>
    );
};

export default Dock;
