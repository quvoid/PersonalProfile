import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import avatarDetails from '../assets/avatar.png';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Full Stack Developer";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 bg-slate-900">
            <div className="z-10 text-center px-4 space-y-8 max-w-3xl mx-auto">
                {/* Avatar */}
                <div className="relative group mx-auto w-48 h-48 mb-8">
                    <img
                        src={avatarDetails}
                        alt="Profile"
                        className="relative w-48 h-48 rounded-full object-cover border-4 border-slate-700 shadow-xl"
                    />
                </div>

                {/* Content */}
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100">
                        Hi, I'm <span className="text-blue-500">Omkar</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 font-light h-8">
                        {text}
                        <span className="animate-blink text-blue-500">|</span>
                    </p>

                    <div className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto space-y-4">
                        <p>
                            I am an aspiring Web Developer with a Bachelor’s degree in Computer Science and Engineering (B.Tech CSE) from Parul University, Gujarat. I am currently based in Mumbai.
                        </p>
                        <p>
                            I am a continuous learner who is always eager to explore new technologies and improve my skills. I am particularly interested in backend-focused roles and am currently learning and strengthening my expertise in Java backend development.
                        </p>
                        <p>
                            Java is my strongest programming language, and I enjoy building scalable and reliable backend systems using it. Additionally, I hold a one-year diploma in Neural Networks and Deep Learning, which has provided me with a strong foundation in Machine Learning concepts and fundamentals.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-6 pt-4">
                        <SocialLink href="#" icon={<Github size={24} />} label="GitHub" />
                        <SocialLink href="#" icon={<Linkedin size={24} />} label="LinkedIn" />
                        <SocialLink href="mailto:omkar@example.com" icon={<Mail size={24} />} label="Email" />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 animate-bounce text-slate-500">
                <ChevronDown size={32} />
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, label }) => (
    <a
        href={href}
        className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-blue-400 transition-all duration-300 border border-slate-700"
        aria-label={label}
    >
        {icon}
    </a>
);

export default Hero;
