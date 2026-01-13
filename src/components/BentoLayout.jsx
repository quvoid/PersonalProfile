import React from 'react';
import TiltCard from './TiltCard';
import Hero from './Hero';
import Projects from './Projects';
import Timeline from './Timeline';
import TechStack from './TechStack';
import GithubGraph from './GithubGraph';
import { MapPin, Cpu, Music } from 'lucide-react';

const BentoLayout = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 pb-48 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

            {/* HERO CELL - 2x2 */}
            <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative border border-slate-200/20 dark:border-slate-700/30 bg-white/5 dark:bg-slate-900/20 backdrop-blur-sm">
                <Hero />
            </div>

            {/* LOCATION CELL - 1x1 */}
            <TiltCard className="md:col-span-1 md:row-span-1 h-full min-h-[200px]">
                <div className="bg-white/10 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/20 dark:border-slate-700/30 rounded-3xl p-6 h-full flex flex-col justify-between overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10" />
                    <div className="flex justify-between items-start z-10">
                        <span className="text-sm font-medium text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">Location</span>
                        <MapPin className="text-emerald-500" />
                    </div>
                    <div className="z-10 mt-4">
                        <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">Mumbai</div>
                        <div className="text-slate-500 dark:text-slate-400">India (IST)</div>
                    </div>
                    <svg className="absolute bottom-0 right-0 w-full h-32 opacity-20" viewBox="0 0 200 100">
                        <path d="M0,50 Q50,0 100,50 T200,50" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </div>
            </TiltCard>

            {/* STATUS CELL - 1x1 */}
            <TiltCard className="md:col-span-1 md:row-span-1 h-full min-h-[200px]">
                <div className="bg-white/10 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/20 dark:border-slate-700/30 rounded-3xl p-6 h-full flex flex-col justify-between overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10" />
                    <div className="flex justify-between items-start z-10">
                        <span className="text-sm font-medium text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full">Status</span>
                        <Cpu className="text-orange-500" />
                    </div>
                    <div className="z-10 mt-4">
                        <div className="text-xl font-bold text-slate-800 dark:text-slate-100">Java Backend</div>
                        <div className="text-slate-500 dark:text-slate-400 text-sm mt-1">Building Systems</div>
                        <div className="mt-3 flex gap-2 items-center">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs text-slate-400">Open to work</span>
                        </div>
                    </div>
                </div>
            </TiltCard>

            {/* TECH STACK SECTION - 3 cols wide */}
            <div className="md:col-span-3 md:row-span-1 h-full min-h-[160px]">
                <TechStack />
            </div>



            {/* GITHUB CONTRIBUTIONS CELL - 3 cols wide */}
            <TiltCard className="md:col-span-3 md:row-span-1 h-full min-h-[300px]">
                <div className="bg-white/10 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/20 dark:border-slate-700/30 rounded-3xl p-6 h-full flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/5 dark:bg-white/5" />

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 z-10 gap-4 md:gap-0">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-900 dark:bg-white rounded-lg">
                                <span className="text-white dark:text-slate-900 font-bold text-xl">Gh</span>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-baseline gap-2">
                                    1,240 <span className="text-sm font-normal text-slate-500 dark:text-slate-400">contributions in 2024</span>
                                </div>
                                <div className="text-xs text-slate-400">Jan 1st - Dec 31st</div>
                            </div>
                        </div>
                        <a href="https://github.com/Start-sys" target="_blank" rel="noreferrer" className="text-xs text-blue-500 hover:text-blue-400 font-medium px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 transition-colors">
                            @Start-sys
                        </a>
                    </div>

                    {/* Full Year Graph */}
                    <div className="flex-1 w-full z-10 min-h-[140px]">
                        <GithubGraph />
                    </div>
                </div>
            </TiltCard>

            {/* PROJECTS SECTION (Full Width) */}
            <div className="md:col-span-3 mt-8">
                <Projects />
            </div>

            {/* EXPERIENCE SECTION (Full Width) */}
            <div className="md:col-span-3">
                <Timeline />
            </div>

        </div>
    );
};

export default BentoLayout;
