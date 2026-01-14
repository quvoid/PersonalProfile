import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Mail, Send, Copy, Check } from 'lucide-react';
import TiltCard from './TiltCard';

const Contact = () => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("omkarrakshe2808@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <TiltCard className="h-full">
            <div className="group relative h-full min-h-[300px] flex flex-col justify-between p-8 rounded-3xl overflow-hidden glass border border-white/20 dark:border-slate-700/50">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-semibold uppercase tracking-wider mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Get in Touch
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                        Let's work together.
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md">
                        Have a project in mind or just want to say hi? I'm always open to new opportunities and interesting conversations.
                    </p>
                </div>

                <div className="relative z-10 mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                        href="mailto:omkarrakshe2808@gmail.com"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold transition-transform duration-300 hover:scale-[1.02] shadow-lg shadow-slate-900/20"
                    >
                        <Send size={18} />
                        Say Hello
                    </a>

                    <button
                        onClick={handleCopy}
                        className="group/btn relative flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white dark:hover:bg-slate-800"
                    >
                        {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                        <span>{copied ? 'Copied!' : 'Copy Email'}</span>

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </button>
                </div>
            </div>
        </TiltCard>
    );
};

export default Contact;
