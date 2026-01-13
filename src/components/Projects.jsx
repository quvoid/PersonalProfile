import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import sekilasImage from '../assets/sekilas.png';
import eazyStickersImage from '../assets/eazystickers.png';

const projects = [
    {
        id: 1,
        title: 'Sekilas',
        description: 'Sekilas Glance is a modern trending news aggregator designed to combat information overload using Trending Keywords.',
        tags: ['Next.js', 'React19', 'CSS', 'MongoDB', 'Web-Scraping'],
        link: 'https://glanctrends.vercel.app/',
        github: 'https://github.com/quvoid/GlanceTrends',
        image: sekilasImage
    },
    {
        id: 2,
        title: 'E-commerce Website',
        description: 'E-commerce website built with React and CSS.',
        tags: ['React', 'CSS', 'Javascript'],
        link: '#',
        github: 'https://github.com/quvoid/EazyStickers',
        image: eazyStickersImage
    },
    {
        id: 3,
        title: 'Student Performance Predictor',
        description: 'A full-stack Machine Learning web application designed to predict student performance based on academic and behavioral metrics.',
        tags: ['HTML', 'Tailwind CSS', 'Flask', 'Python', 'Machine Learning'],
        link: '#',
        github: 'https://github.com/quvoid/Student_Performance_Predictor',
        image: null
    }
];

import TiltCard from './TiltCard';

const ProjectCard = ({ project }) => (
    <TiltCard className="h-full">
        <div className="group relative h-full rounded-3xl bg-white/50 dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-700/30 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] hover:border-blue-500/30 flex flex-col">

            {/* Image Section with Overlay */}
            <div className="relative h-64 w-full overflow-hidden shrink-0">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-slate-900/60 dark:to-slate-900/90" />

                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                ) : (
                    <div className="w-full h-full bg-slate-100 dark:bg-slate-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors" />
                        {/* Abstract Pattern */}
                        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                            style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Code className="text-slate-300 dark:text-slate-700/50" size={48} />
                        </div>
                    </div>
                )}

                {/* Floating Badge (Glass) */}
                <div className="absolute top-4 right-4 z-20 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    <div className="px-3 py-1 rounded-full bg-white/10 dark:bg-slate-900/60 backdrop-blur-md border border-white/20 text-xs font-medium text-white shadow-lg">
                        {project.tags[0]}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative p-6 flex-1 flex flex-col bg-white/40 dark:bg-transparent backdrop-blur-md border-t border-white/50 dark:border-slate-700/50 transition-colors group-hover:bg-white/60 dark:group-hover:bg-slate-900/40">

                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-2">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors p-2 hover:bg-slate-200/50 dark:hover:bg-white/10 rounded-full">
                                <Github size={18} />
                            </a>
                        )}
                        {project.link !== '#' && (
                            <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-full">
                                <ExternalLink size={18} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                            <span key={tag} className={`text-xs font-medium px-2 py-1 rounded-md border ${i === 0 ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' : 'bg-slate-100/50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border-slate-200/50 dark:border-slate-700/50'
                                }`}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </TiltCard>
);

const Projects = () => {
    return (
        <section className="py-20 px-4 relative transition-colors duration-300" id="projects">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-16">
                    <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-2">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-400">
                        Featured Projects
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
