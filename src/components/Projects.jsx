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

const ProjectCard = ({ project }) => (
    <div className="group relative rounded-xl bg-slate-800 border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        {/* Project Image or Abstract Placeholder */}
        <div className="h-48 w-full overflow-hidden relative border-b border-slate-700">
            {project.image ? (
                <>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                </>
            ) : (
                <div className="h-full w-full bg-slate-700/50 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 group-hover:opacity-100 transition-opacity" />
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #cbd5e1 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                    <div className="absolute bottom-4 left-4 p-2 bg-slate-900/90 rounded-lg shadow-sm backdrop-blur-sm border border-slate-700">
                        <Code className="text-blue-500" size={24} />
                    </div>
                </div>
            )}
        </div>

        <div className="p-6">
            <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-4 mt-auto">
                <a href={project.link} className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                </a>
                <a href={project.github} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-200 transition-colors">
                    <Github size={16} /> Source
                </a>
            </div>
        </div>
    </div>
);

const Projects = () => {
    return (
        <section className="py-20 px-4 relative bg-slate-900" id="projects">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-100">
                    Featured Projects
                </h2>

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
