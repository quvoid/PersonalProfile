import React from 'react';
import TiltCard from './TiltCard';
import { Code2, Database, Cpu, Layout, Globe, Server, Terminal, Layers, Box } from 'lucide-react';

const skills = [
    { name: 'Java', icon: <Server size={18} />, color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20' },
    { name: 'Machine Learning', icon: <Cpu size={18} />, color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
    { name: 'React', icon: <Code2 size={18} />, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
    { name: 'MongoDB', icon: <Database size={18} />, color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20' },
    { name: 'SQL', icon: <Database size={18} />, color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
    { name: 'JavaScript', icon: <Code2 size={18} />, color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
    { name: 'HTML', icon: <Globe size={18} />, color: 'text-orange-600', bg: 'bg-orange-600/10', border: 'border-orange-600/20' },
    { name: 'CSS', icon: <Layout size={18} />, color: 'text-blue-600', bg: 'bg-blue-600/10', border: 'border-blue-600/20' },
    { name: 'Next.js', icon: <Layers size={18} />, color: 'text-slate-800 dark:text-white', bg: 'bg-slate-500/10', border: 'border-slate-500/20' },
    { name: 'Git', icon: <Terminal size={18} />, color: 'text-orange-600', bg: 'bg-orange-600/10', border: 'border-orange-600/20' },
];

const TechStack = () => {
    return (
        <TiltCard className="h-full min-h-[180px]">
            <div className="glass rounded-3xl p-8 h-full flex flex-col justify-center overflow-hidden relative group border border-white/20 dark:border-slate-700/50">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-50" />

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 z-10 gap-4">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                            <Cpu className="text-blue-500" size={20} />
                        </div>
                        Technical Arsenal
                    </h3>
                    <div className="text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
                        {skills.length} Skills & Counting
                    </div>
                </div>

                {/* Marquee Container */}
                <div className="relative flex overflow-x-hidden group-hover:pause-animation mask-linear-fade">
                    <div className="animate-marquee flex gap-4 whitespace-nowrap py-2">
                        {[...skills, ...skills, ...skills].map((skill, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-default shadow-sm ${skill.bg} ${skill.border}`}
                            >
                                <span className={skill.color}>{skill.icon}</span>
                                <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm tracking-wide">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Left/Right Fade Gradients */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-[#0f172a] to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-[#0f172a] to-transparent z-10"></div>
                </div>
            </div>
        </TiltCard>
    );
};

export default TechStack;
