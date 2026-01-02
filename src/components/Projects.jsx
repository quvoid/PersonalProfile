import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive generic analytics dashboard with real-time data visualization and order management.',
        tags: ['React', 'Tailwind', 'Chart.js'],
        link: '#',
        github: '#'
    },
    {
        id: 2,
        title: 'Social Media App',
        description: 'Full-featured social platform with real-time messaging, post sharing, and user interactions.',
        tags: ['Next.js', 'Prisma', 'PostgreSQL'],
        link: '#',
        github: '#'
    },
    {
        id: 3,
        title: 'AI Image Generator',
        description: 'Web application that leverages OpenAI API to generate images based on textual prompts.',
        tags: ['React', 'OpenAI', 'Node.js'],
        link: '#',
        github: '#'
    }
];

const ProjectCard = ({ project }) => (
    <div className="group relative rounded-xl bg-slate-800 border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        {/* Abstract Thumbnail Placeholder */}
        <div className="h-48 bg-slate-700/50 w-full overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 group-hover:opacity-100 transition-opacity" />
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #cbd5e1 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            <div className="absolute bottom-4 left-4 p-2 bg-slate-900/90 rounded-lg shadow-sm backdrop-blur-sm border border-slate-700">
                <Code className="text-blue-500" size={24} />
            </div>
        </div>

        <div className="p-6">
            <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-900/30 rounded-full border border-blue-800">
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
