import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full py-8 text-center relative z-10 px-4">
            <div className="flex flex-col items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <p className="flex items-center justify-center gap-1.5">
                    Designed & Built with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by <span className="font-semibold text-slate-700 dark:text-slate-300">Omkar</span>
                </p>
                <p className="text-xs opacity-70">
                    &copy; {new Date().getFullYear()} • All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
