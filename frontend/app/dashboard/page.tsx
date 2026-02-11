'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function Dashboard() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 4);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Scrollable Dashboard Content */}
            <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-8 relative bg-[#0b0c15]">
                {/* Hero Section */}
                <section className="@container">
                    <div className="relative overflow-hidden rounded-2xl bg-[#2E2360] border border-[#4B70F5]/30 shadow-[0_0_15px_-3px_rgba(75,112,245,0.5)] p-6 lg:p-8 flex flex-col md:flex-row items-center gap-8">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3DC2EC] via-[#402E7A] to-transparent pointer-events-none"></div>
                        <div className="relative z-10 flex-1 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4B70F5]/20 border border-[#4B70F5]/40 text-[#3DC2EC] text-xs font-bold uppercase tracking-wider">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DC2EC] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3DC2EC]"></span>
                                </span>
                                Current Objective
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                Resume your training on{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3DC2EC] to-[#4B70F5]">
                                    JWT Security
                                </span>
                            </h1>
                            <p className="text-gray-300 max-w-xl">
                                You've completed 45% of the Advanced Web Attacks path. Your next module focuses on
                                cracking weak signing keys.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <Link href="/learning-paths">
                                    <button className="flex items-center gap-2 bg-[#4C3BCF] hover:bg-[#4C3BCF]/90 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-[#4C3BCF]/50">
                                        <span>Resume Learning</span>
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                </Link>
                                <button className="flex items-center gap-2 bg-[#1e163d] hover:bg-[#251b4d] text-white border border-[#4B70F5]/30 px-6 py-3 rounded-xl font-bold transition-all">
                                    <span>View Syllabus</span>
                                </button>
                            </div>
                        </div>
                        <div className="relative z-10 w-full md:w-1/3 aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#141022] to-transparent opacity-60 z-10"></div>
                            <div
                                className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-PeE-XgUicq5LDsGIwNAiGapjlN8SY9fj8ghZLL4aP6iloCw4KIzGl6aZArvuZKVN0BQNAHykveuhdqZzF670Sn50YTa_m0XRE4L_qjY6BsHE_sPlC72BNDu2f5zyX5POKdv6o1pnHLJiYr9ez87caqtyl3be5b3gFi7tvOspfqJGuPmzHaHHZQPmiCnw3WeawisIuwVl14Zqyib-c4kmi6qeFTc1g0osvTaotuVxHX3V9q0zC1exXWlQCNzOFL9QoAYNF3e5Nmgj")',
                                }}
                            ></div>
                            <div className="absolute bottom-4 left-4 z-20">
                                <p className="text-white font-bold text-lg">Module 4: JWT Attacks</p>
                                <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2 max-w-[120px]">
                                    <div className="bg-[#3DC2EC] h-1.5 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
                                <span className="text-xs text-white font-mono">15m left</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Overview Row */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-[#2E2360]/50 border border-[#4B70F5]/20 p-4 rounded-xl flex items-center justify-between hover:bg-[#2E2360] transition-colors cursor-default">
                        <div>
                            <p className="text-gray-400 text-sm font-medium">Global Rank</p>
                            <p className="text-2xl font-bold text-white mt-1">#4,291</p>
                        </div>
                        <div className="size-10 rounded-full bg-[#4B70F5]/20 flex items-center justify-center text-[#4B70F5]">
                            <span className="material-symbols-outlined">trophy</span>
                        </div>
                    </div>
                    <div className="bg-[#2E2360]/50 border border-[#4B70F5]/20 p-4 rounded-xl flex items-center justify-between hover:bg-[#2E2360] transition-colors cursor-default">
                        <div>
                            <p className="text-gray-400 text-sm font-medium">Total Points</p>
                            <p className="text-2xl font-bold text-white mt-1">12,450</p>
                        </div>
                        <div className="size-10 rounded-full bg-[#3DC2EC]/20 flex items-center justify-center text-[#3DC2EC]">
                            <span className="material-symbols-outlined">bolt</span>
                        </div>
                    </div>
                    <div className="bg-[#2E2360]/50 border border-[#4B70F5]/20 p-4 rounded-xl flex items-center justify-between hover:bg-[#2E2360] transition-colors cursor-default">
                        <div>
                            <p className="text-gray-400 text-sm font-medium">Modules Completed</p>
                            <p className="text-2xl font-bold text-white mt-1">1</p>
                        </div>
                        <div className="size-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                            <span className="material-symbols-outlined">check_circle</span>
                        </div>
                    </div>
                    <div className="bg-[#2E2360]/50 border border-[#4B70F5]/20 p-4 rounded-xl flex items-center justify-between hover:bg-[#2E2360] transition-colors cursor-default">
                        <div>
                            <p className="text-gray-400 text-sm font-medium">Day Streak</p>
                            <p className="text-2xl font-bold text-white mt-1">8 Days</p>
                        </div>
                        <div className="size-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                            <span className="material-symbols-outlined">local_fire_department</span>
                        </div>
                    </div>
                </section>

                {/* Learning Paths Grid */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-white tracking-tight">Learning Paths</h2>
                        <Link
                            href="/learning-paths"
                            className="text-sm text-[#4B70F5] hover:text-white transition-colors font-medium"
                        >
                            View All Paths
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1: Basic Auth */}
                        <div className="group relative bg-[#2E2360] rounded-2xl p-6 border border-[#4B70F5]/20 hover:border-[#4B70F5]/60 hover:shadow-[0_0_25px_-5px_rgba(75,112,245,0.7)] transition-all duration-300 transform hover:-translate-y-1">
                            <div className="absolute top-4 right-4">
                                <span className="inline-block px-2 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded uppercase">
                                    Beginner
                                </span>
                            </div>
                            <div className="size-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-4 shadow-lg">
                                <span className="material-symbols-outlined text-white">key</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Basic Authentication</h3>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                Understand the fundamentals of HTTP Basic Auth, base64 encoding, and common
                                vulnerabilities.
                            </p>
                            <div className="space-y-3">
                                <div className="flex justify-between text-xs text-gray-400 font-medium">
                                    <span>Progress</span>
                                    <span>100%</span>
                                </div>
                                <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                                    <div className="bg-green-500 h-full rounded-full w-full"></div>
                                </div>
                                <button className="w-full mt-4 py-2 rounded-lg bg-[#4B70F5]/10 text-[#4B70F5] font-bold text-sm group-hover:bg-[#4B70F5] group-hover:text-white transition-colors flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-lg">check</span>
                                    Completed
                                </button>
                            </div>
                        </div>

                        {/* Card 2: Bearer Tokens */}
                        <div className="group relative bg-[#2E2360] rounded-2xl p-6 border border-[#4B70F5]/20 hover:border-[#4B70F5]/60 hover:shadow-[0_0_25px_-5px_rgba(75,112,245,0.7)] transition-all duration-300 transform hover:-translate-y-1">
                            <div className="absolute top-4 right-4">
                                <span className="inline-block px-2 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-bold rounded uppercase">
                                    Intermediate
                                </span>
                            </div>
                            <div className="size-12 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center mb-4 shadow-lg">
                                <span className="material-symbols-outlined text-white">token</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Bearer Tokens</h3>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                Deep dive into OAuth2 implementation, token leakage, and secure storage mechanisms.
                            </p>
                            <div className="space-y-3">
                                <div className="flex justify-between text-xs text-gray-400 font-medium">
                                    <span>Progress</span>
                                    <span>45%</span>
                                </div>
                                <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                                    <div className="bg-[#3DC2EC] h-full rounded-full w-[45%] shadow-[0_0_10px_rgba(61,194,236,0.5)]"></div>
                                </div>
                                <Link href="/learning-paths">
                                    <button className="w-full mt-4 py-2 rounded-lg bg-[#4B70F5]/10 text-[#4B70F5] font-bold text-sm group-hover:bg-[#4B70F5] group-hover:text-white transition-colors">
                                        Continue
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Card 3: JWT Security */}
                        <div className="group relative bg-[#2E2360] rounded-2xl p-6 border border-[#4B70F5]/20 hover:border-[#4B70F5]/60 hover:shadow-[0_0_25px_-5px_rgba(75,112,245,0.7)] transition-all duration-300 transform hover:-translate-y-1 ring-1 ring-[#4B70F5]/40 shadow-[0_0_15px_-3px_rgba(75,112,245,0.5)]">
                            <div className="absolute top-4 right-4">
                                <span className="inline-block px-2 py-1 bg-red-500/10 text-red-400 text-xs font-bold rounded uppercase">
                                    Advanced
                                </span>
                            </div>
                            <div className="size-12 rounded-xl bg-gradient-to-br from-[#4C3BCF] to-purple-800 flex items-center justify-center mb-4 shadow-lg animate-pulse">
                                <span className="material-symbols-outlined text-white">lock_reset</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">JWT Attacks</h3>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                Master JSON Web Tokens. Learn about 'none' alg attacks, key confusion, and cracking
                                signatures.
                            </p>
                            <div className="space-y-3">
                                <div className="flex justify-between text-xs text-gray-400 font-medium">
                                    <span>Progress</span>
                                    <span>15%</span>
                                </div>
                                <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                                    <div className="bg-[#4C3BCF] h-full rounded-full w-[15%]"></div>
                                </div>
                                <Link href="/learning-paths">
                                    <button className="w-full mt-4 py-2 rounded-lg bg-[#4C3BCF] text-white font-bold text-sm shadow-lg shadow-[#4C3BCF]/30 group-hover:bg-[#4C3BCF]/90 transition-all">
                                        Start Lab
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Activity Heatmap */}
                <section className="pb-10">
                    <div className="bg-[#1e163d] rounded-2xl border border-[#4B70F5]/20 p-6 lg:p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-white">Hacking Activity</h3>
                                <p className="text-sm text-gray-400">1,204 contributions in the last year</p>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <span>Less</span>
                                <div className="size-3 rounded-sm bg-[#2E2360]"></div>
                                <div className="size-3 rounded-sm bg-[#2c4e8a]"></div>
                                <div className="size-3 rounded-sm bg-[#2879b9]"></div>
                                <div className="size-3 rounded-sm bg-[#3DC2EC]"></div>
                                <span>More</span>
                            </div>
                        </div>
                        <div className="w-full overflow-x-auto">
                            <div className="min-w-[700px]">
                                <div className="grid grid-cols-52 grid-rows-7 gap-1" id="heatmap"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-4 text-xs text-gray-500 font-mono pt-4 border-t border-[#4B70F5]/10">
                            <span>Learn how we calculate activity</span>
                            <div className="flex gap-4">
                                <span>Longest streak: 14 days</span>
                                <span>Current streak: 8 days</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Heatmap Script */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            if (typeof window !== 'undefined') {
              const grid = document.getElementById('heatmap');
              if (grid && grid.children.length === 0) {
                for(let i=0; i<364; i++) {
                  const div = document.createElement('div');
                  div.className = 'aspect-square rounded-sm transition-colors hover:ring-1 hover:ring-white/50 cursor-pointer';
                  const rand = Math.random();
                  if (rand > 0.9) div.classList.add('bg-[#3DC2EC]');
                  else if (rand > 0.8) div.classList.add('bg-[#2879b9]');
                  else if (rand > 0.7) div.classList.add('bg-[#2c4e8a]');
                  else div.classList.add('bg-[#2E2360]');
                  div.title = 'Activity on Day ' + (i+1);
                  grid.appendChild(div);
                }
              }
            }
          `,
                }}
            />
        </>
    );
}
