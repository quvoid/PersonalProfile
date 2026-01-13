import React, { useEffect, useState } from 'react';

const GithubGraph = () => {
    const [contributionData, setContributionData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch last year's contributions for 'quvoid'
                const response = await fetch('https://github-contributions-api.jogruber.de/v4/quvoid?y=last');
                if (!response.ok) throw new Error('Failed to fetch data');
                const data = await response.json();
                setContributionData(data.contributions || []);
            } catch (err) {
                console.error("Error fetching github data:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Helper to get color based on contribution count (mimicking GitHub's levels)
    const getColor = (count) => {
        if (count === 0) return 'bg-slate-200/50 dark:bg-slate-800/50 border-transparent';
        if (count <= 3) return 'bg-emerald-900/40 dark:bg-emerald-900/40 border-emerald-900/30';
        if (count <= 6) return 'bg-emerald-700/60 dark:bg-emerald-700/60 border-emerald-700/50';
        if (count <= 10) return 'bg-emerald-500/80 dark:bg-emerald-500/80 border-emerald-500/60';
        return 'bg-emerald-400 dark:bg-emerald-400 border-emerald-300';
    };

    if (loading) {
        return (
            <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm animate-pulse">
                Loading contributions...
            </div>
        );
    }

    if (error || contributionData.length === 0) {
        // Fallback mock grid if fetch fails
        return (
            <div className="w-full h-full flex flex-col justify-center">
                <div className="text-center text-xs text-red-400 mb-2">Failed to load real data. Showing offline mode.</div>
                {/* Reusing the mock logic briefly or just a simple placeholder */}
                <div className="flex gap-[3px] flex-1 w-full justify-between opacity-50">
                    {Array.from({ length: 53 }).map((_, i) => (
                        <div key={i} className="flex flex-col gap-[3px] flex-1">
                            {Array.from({ length: 7 }).map((_, j) => (
                                <div key={j} className="w-full aspect-square rounded-[2px] bg-slate-800/50" />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Prepare data for the 7x53 grid (approx)
    // The API returns a flat array of days. We need to group them by weeks.
    // GitHub weeks start on Sunday. The API data usually starts from a date.

    // We'll organize into columns (weeks). 
    const weeks = [];
    let currentWeek = [];

    contributionData.forEach((day, index) => {
        currentWeek.push(day);
        if (currentWeek.length === 7 || index === contributionData.length - 1) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
    });

    // Ensure we take the last 52-53 weeks to fit the UI
    const displayedWeeks = weeks.slice(-53);

    return (
        <div className="w-full h-full flex flex-col justify-center overflow-hidden">
            {/* Months Label Row (Simplified) */}
            <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 px-1 mb-2 font-mono">
                <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
            </div>

            <div className="flex gap-[3px] flex-1 w-full justify-between items-end">
                {displayedWeeks.map((week, wIndex) => (
                    <div key={wIndex} className="flex flex-col gap-[3px] flex-1">
                        {week.map((day, dIndex) => (
                            <div
                                key={dIndex}
                                className={`w-full aspect-square rounded-[2px] border-[0.5px] transition-all duration-300 hover:scale-125 hover:z-10 ${getColor(day.count)}`}
                                title={`${day.date}: ${day.count} contributions`}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 mt-3 text-[10px] text-slate-500 justify-end">
                <span>Less</span>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-sm bg-slate-200/50 dark:bg-slate-800/50" />
                    <div className="w-2 h-2 rounded-sm bg-emerald-900/40" />
                    <div className="w-2 h-2 rounded-sm bg-emerald-700/60" />
                    <div className="w-2 h-2 rounded-sm bg-emerald-500/80" />
                    <div className="w-2 h-2 rounded-sm bg-emerald-400" />
                </div>
                <span>More</span>
            </div>
        </div>
    );
};

export default GithubGraph;
