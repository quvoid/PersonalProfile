import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Layers } from 'lucide-react';
import TiltCard from './TiltCard';
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
        description: 'Modern E-commerce platform featuring a responsive design, cart management, and seamless product browsing experience.',
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

const ProjectCard = ({ project }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="h-full"
    >
        <TiltCard className="h-full">
            <div className="group relative h-full rounded-3xl overflow-hidden glass hover:shadow-2xl transition-all duration-500 flex flex-col border border-white/20 dark:border-slate-700/50">

                {/* Image Section with Overlay */}
                <div className="relative h-64 w-full overflow-hidden shrink-0">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80" />

                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                        />
                    ) : (
                        <div className="w-full h-full bg-slate-100 dark:bg-slate-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                            <div className="absolute inset-0 opacity-[0.05]"
                                style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Code className="text-slate-300 dark:text-slate-600" size={64} />
                            </div>
                        </div>
                    )}

                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4 z-20">
                        <div className="px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white shadow-lg">
                            {project.tags[0]}
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="relative p-6 flex-1 flex flex-col transition-colors group-hover:bg-white/5 dark:group-hover:bg-white/5">

                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all">
                            {project.title}
                        </h3>
                        <div className="flex gap-2">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noreferrer"
                                    className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-900 rounded-full border border-transparent hover:border-slate-700"
                                    title="View Source Code">
                                    <Github size={18} />
                                </a>
                            )}
                            {project.link !== '#' && (
                                <a href={project.link} target="_blank" rel="noreferrer"
                                    className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-blue-600 rounded-full border border-transparent hover:border-blue-500"
                                    title="Visit Live Site">
                                    <ExternalLink size={18} />
                                </a>
                            )}
                        </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {project.description}
                    </p>

                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 4).map((tag, i) => (
                                <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-blue-500/30 hover:bg-blue-500/5 transition-colors">
                                    {tag}
                                </span>
                            ))}
                            {project.tags.length > 4 && (
                                <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/50 text-slate-500 border border-transparent">
                                    +{project.tags.length - 4}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </TiltCard>
    </motion.div>
);

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    // Extract unique tags and add 'All'
    const uniqueTags = ['All', ...new Set(projects.flatMap(p => p.tags))].slice(0, 6); // Limit to 6 top tags for cleanliness

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.tags.includes(activeFilter));

    return (
        <section className="py-24 px-4 relative" id="projects">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-semibold mb-4 border border-blue-500/20"
                    >
                        <Layers size={14} />
                        <span>PORTFOLIO</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6"
                    >
                        Featured <span className="text-gradient">Projects</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg"
                    >
                        A showcase of my technical journey, featuring full-stack applications, machine learning models, and open-source contributions.
                    </motion.p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {uniqueTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setActiveFilter(tag)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === tag
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                                    : 'bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:scale-105 border border-transparent hover:border-slate-300 dark:hover:border-slate-600'
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

