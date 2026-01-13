import React from 'react';
import TiltCard from './TiltCard';
import { Code2, Database, Cpu, Layout, Globe, Server } from 'lucide-react';

const skills = [
    { name: 'Java', icon: <Server size={20} />, color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20' },
    { name: 'Machine Learning Fundamentals', icon: <Cpu size={20} />, color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
    { name: 'React', icon: <Code2 size={20} />, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
    { name: 'MongoDB', icon: <Database size={20} />, color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20' },
    { name: 'SQL', icon: <Database size={20} />, color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
    { name: 'JavaScript', icon: <Code2 size={20} />, color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20' },
    { name: 'HTML', icon: <Globe size={20} />, color: 'text-orange-600', bg: 'bg-orange-600/10', border: 'border-orange-600/20' },
    { name: 'CSS', icon: <Layout size={20} />, color: 'text-blue-600', bg: 'bg-blue-600/10', border: 'border-blue-600/20' },
];

const TechStack = () => {
    return (
        <TiltCard className="h-full min-h-[180px]">
            <div className="bg-white/10 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/20 dark:border-slate-700/30 rounded-3xl p-6 h-full flex flex-col justify-center overflow-hidden relative group">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />

                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 z-10 flex items-center gap-2">
                    <Cpu className="text-blue-500" size={24} />
                    Technical Arsenal
                </h3>

                {/* Marquee Container */}
                <div className="relative flex overflow-x-hidden group-hover:pause-animation">
                    <div className="animate-marquee flex gap-4 whitespace-nowrap">
                        {[...skills, ...skills, ...skills].map((skill, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-2 px-4 py-3 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${skill.bg} ${skill.border}`}
                            >
                                <span className={skill.color}>{skill.icon}</span>
                                <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Shadow Gradients for fade effect */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/10 dark:from-slate-900/40 to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white/10 dark:from-slate-900/40 to-transparent z-10"></div>
                </div>
            </div>
        </TiltCard>
    );
};

export default TechStack;
