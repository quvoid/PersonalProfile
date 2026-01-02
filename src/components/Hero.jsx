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
        <section className="relative min-h-screen flex items-center justify-center py-20 bg-slate-900 overflow-hidden">
            <div className="z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
                {/* Avatar - Left Side */}
                <div className="flex-shrink-0 order-1 md:order-1">
                    <div className="relative group w-64 h-64 md:w-96 md:h-96">
                        <img
                            src={avatarDetails}
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover border-4 border-slate-700 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Content - Right Side */}
                <div className="flex-1 space-y-8 text-center md:text-left max-w-2xl order-2 md:order-2">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100 mb-4">
                            Hi, I'm <span className="text-blue-500">Omkar</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-slate-400 font-light flex items-center justify-center md:justify-start gap-2 h-10">
                            {text}
                            <span className="animate-blink text-blue-500">|</span>
                        </p>
                    </div>

                    <div className="text-base md:text-lg text-slate-300 leading-relaxed space-y-4">
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
                    <div className="flex items-center justify-center md:justify-start gap-6 pt-2">
                        <SocialLink href="https://github.com/quvoid" icon={<Github size={28} />} label="GitHub" />
                        <SocialLink href="https://www.linkedin.com/in/omkar-rakshe-957ab5324" icon={<Linkedin size={28} />} label="LinkedIn" />
                        <SocialLink href="mailto:omkarrakshe2808@gmail.com" icon={<Mail size={28} />} label="Email" />
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
