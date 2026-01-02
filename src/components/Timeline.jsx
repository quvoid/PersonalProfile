import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
    {
        id: 1,
        type: 'education',
        role: 'Diploma in Neural networking and Deep Learning',
        company: 'Parul University',
        period: '2023 - 2024',
        description: 'Diploma in Neural networking and Deep Learning. Grade: 7.75/10',
    },
    {
        id: 2,
        type: 'education',
        role: 'Bachelor of Technology',
        company: 'Parul University',
        period: '2022 - 2026',
        description: 'Bachelors in Computer Science and Engineering. Grade: 7.33/10',
    },
    {
        id: 3,
        type: 'education',
        role: '12th',
        company: 'Kirti Doongurse College',
        period: '2020 - 2022',
        description: '12th in Science. Percentage: 66.50%',
    },
    {
        id: 4,
        type: 'education',
        role: '10th',
        company: 'Vidya Bhawan',
        period: '2008 - 2022',
        description: '10th in SSC board. Percentage: 87.6%',
    },
];

const Timeline = () => {
    return (
        <section className="py-20 px-4 relative bg-slate-900" id="experience">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-100">
                    Education & Experience
                </h2>

                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-700">
                    {experiences.map((item, index) => (
                        <div key={item.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${index % 2 === 0 ? '' : ''}`}>

                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-700 bg-slate-800 shadow-md z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                {item.type === 'work' ? <Briefcase size={18} className="text-blue-500" /> : <GraduationCap size={18} className="text-purple-500" />}
                            </div>

                            {/* Content Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-slate-700 bg-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                                    <h3 className="font-bold text-lg text-slate-100">{item.role}</h3>
                                    <span className="text-sm font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded">{item.period}</span>
                                </div>
                                <div className="text-blue-400 font-medium mb-2">{item.company}</div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
