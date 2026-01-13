import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';
import TiltCard from './TiltCard';

const experiences = [
    {
        id: 1,
        type: 'education',
        role: 'Diploma in Neural Networking & Deep Learning',
        company: 'Parul University',
        period: '2023 - 2024',
        description: 'Specialized diploma focusing on advanced neural network architectures, backpropagation algorithms, and practical deep learning applications. Achieved Grade: 7.75/10.',
        color: 'text-purple-500',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/20'
    },
    {
        id: 2,
        type: 'education',
        role: 'Bachelor of Technology',
        company: 'Parul University',
        period: '2022 - 2026',
        description: 'Currently pursuing B.Tech in Computer Science & Engineering. Focusing on full-stack development, algorithms, and system design. Current CGPA: 7.33/10.',
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20'
    },
    {
        id: 3,
        type: 'education',
        role: 'Higher Secondary (12th Science)',
        company: 'Kirti Doongurse College',
        period: '2020 - 2022',
        description: 'Completed Higher Secondary Education in Science stream. Built strong foundation in Mathematics and Physics. Percentage: 66.50%',
        color: 'text-indigo-500',
        bg: 'bg-indigo-500/10',
        border: 'border-indigo-500/20'
    },
    {
        id: 4,
        type: 'education',
        role: 'Secondary School (10th)',
        company: 'Vidya Bhawan',
        period: '2008 - 2022',
        description: 'Completed Secondary School Certificate (SSC) with distinction. Active participant in science exhibitions and coding clubs. Percentage: 87.6%',
        color: 'text-emerald-500',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20'
    },
];

const TimelineItem = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
        >
            {/* Center Line Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-[19px] md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-[#0f172a] bg-white dark:bg-slate-800 z-10 shrink-0 shadow-lg">
                <div className={`w-full h-full rounded-full flex items-center justify-center ${item.bg}`}>
                    {item.type === 'work' ? (
                        <Briefcase size={16} className={item.color} />
                    ) : (
                        <GraduationCap size={16} className={item.color} />
                    )}
                </div>
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-16 md:ml-0">
                <TiltCard className="rounded-2xl h-full">
                    <div className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-700/50 bg-white/60 dark:bg-slate-800/40 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300 h-full group-hover:border-blue-500/30">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {item.role}
                            </h3>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-500 dark:text-slate-400">
                                <Calendar size={12} />
                                {item.period}
                            </div>
                        </div>

                        {/* Company/Institution */}
                        <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                            <Award size={16} className="text-orange-500" />
                            {item.company}
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700/50 pt-3">
                            {item.description}
                        </p>
                    </div>
                </TiltCard>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    return (
        <section className="py-24 px-4 relative" id="experience">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-500 font-bold tracking-wider uppercase text-xs mb-3 flex items-center gap-2"
                    >
                        <span className="w-8 h-[2px] bg-blue-500 rounded-full"></span>
                        JOURNEY
                        <span className="w-8 h-[2px] bg-blue-500 rounded-full"></span>
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white"
                    >
                        Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Experience</span>
                    </motion.h2>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-[0.5px] bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent md:-translate-x-1/2 rounded-full" />

                    <div className="space-y-12">
                        {experiences.map((item, index) => (
                            <TimelineItem key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

