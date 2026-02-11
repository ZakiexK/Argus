'use client';

import Link from 'next/link';

export default function LearningPaths() {
    const modules = [
        {
            title: 'Basic Authentication',
            description:
                'Master the fundamentals of HTTP Basic Auth, understanding encoding vs encryption, and common security pitfalls.',
            icon: 'lock',
            gradient: 'from-[#4B70F5]/20 to-[#1E1E2E]',
            iconBg: 'bg-[#4B70F5]',
            status: 'completed',
            progress: 100,
            topics: [
                { name: 'Encoding vs Encryption', completed: true },
                { name: 'Header Analysis', completed: true },
                { name: 'Brute Force Attacks', completed: true },
            ],
            href: '/learning-paths/basic-auth',
        },
        {
            title: 'Bearer Token',
            description:
                'Dive deep into token-based authentication. Learn about OAuth 2.0 flows, scopes, and token leakage vulnerabilities.',
            icon: 'key',
            gradient: 'from-[#4B70F5]/20 to-[#1E1E2E]',
            iconBg: 'bg-[#2a2a40]',
            status: 'in-progress',
            progress: 45,
            topics: [
                { name: 'OAuth 2.0 Basics', completed: true },
                { name: 'Scope Management', completed: false },
                { name: 'Token Revocation', completed: false },
            ],
            href: '#',
        },
        {
            title: 'JSON Web Tokens (JWT)',
            description:
                'Analyze the structure of JWTs, learn about signature verification, and exploit weak signing algorithms.',
            icon: 'token',
            gradient: 'from-[#4B70F5] to-indigo-900',
            iconBg: 'bg-white/10 backdrop-blur-md border border-white/20',
            status: 'new',
            progress: 0,
            topics: [
                { name: 'Structure (Header/Payload)', completed: false },
                { name: "'None' Algorithm Attack", completed: false },
                { name: 'Key Confusion', completed: false },
            ],
            href: '#',
        },
    ];

    return (
        <>
            {/* Content Scroll Area */}
            <main className="flex-1 overflow-y-auto p-8 bg-[#0b0c15]">
                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-[#1E1E2E] border border-white/5 rounded-xl p-6 flex items-center justify-between relative overflow-hidden group">
                        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#4C3BCF]/10 to-transparent pointer-events-none"></div>
                        <div>
                            <p className="text-slate-400 text-sm font-medium mb-1">Total Progress</p>
                            <h3 className="text-3xl font-bold text-white">48%</h3>
                        </div>
                        <div className="h-12 w-12 rounded-lg bg-[#4C3BCF]/20 flex items-center justify-center text-[#4C3BCF]">
                            <span className="material-symbols-outlined">donut_large</span>
                        </div>
                    </div>
                    <div className="bg-[#1E1E2E] border border-white/5 rounded-xl p-6 flex items-center justify-between relative overflow-hidden group">
                        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#3DC2EC]/10 to-transparent pointer-events-none"></div>
                        <div>
                            <p className="text-slate-400 text-sm font-medium mb-1">Completed Labs</p>
                            <h3 className="text-3xl font-bold text-white">
                                1<span className="text-slate-500 text-lg font-normal">/3</span>
                            </h3>
                        </div>
                        <div className="h-12 w-12 rounded-lg bg-[#3DC2EC]/20 flex items-center justify-center text-[#3DC2EC]">
                            <span className="material-symbols-outlined">check_circle</span>
                        </div>
                    </div>
                    <div className="bg-[#1E1E2E] border border-white/5 rounded-xl p-6 flex items-center justify-between relative overflow-hidden group">
                        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-purple-500/10 to-transparent pointer-events-none"></div>
                        <div>
                            <p className="text-slate-400 text-sm font-medium mb-1">Current Streak</p>
                            <h3 className="text-3xl font-bold text-white">
                                8 <span className="text-sm font-normal text-slate-400">Days</span>
                            </h3>
                        </div>
                        <div className="h-12 w-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                            <span className="material-symbols-outlined">local_fire_department</span>
                        </div>
                    </div>
                </div>

                {/* Modules Grid */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">Core Modules</h3>
                        <div className="flex gap-2">
                            <button className="p-1 rounded hover:bg-white/10 text-white transition-colors">
                                <span className="material-symbols-outlined">grid_view</span>
                            </button>
                            <button className="p-1 rounded hover:bg-white/10 text-slate-500 transition-colors">
                                <span className="material-symbols-outlined">list</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {modules.map((module) => (
                            <div
                                key={module.title}
                                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#1E1E2E] border border-white/5 hover:border-[#4B70F5]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(75,112,245,0.2)]"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3DC2EC] to-[#4B70F5]"></div>

                                {/* Header Image/Icon Area */}
                                <div className={`h-32 bg-gradient-to-br ${module.gradient} relative p-6 flex items-start justify-between`}>
                                    {module.status === 'new' && (
                                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                                    )}
                                    <div className={`p-3 ${module.iconBg} rounded-xl shadow-lg z-10`}>
                                        <span className="material-symbols-outlined text-white text-3xl">{module.icon}</span>
                                    </div>
                                    <div
                                        className={`px-3 py-1 rounded-full ${module.status === 'completed'
                                            ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                                            : module.status === 'in-progress'
                                                ? 'bg-[#3DC2EC]/10 border border-[#3DC2EC]/30 text-[#3DC2EC]'
                                                : 'bg-black/30 backdrop-blur border border-white/10 text-white'
                                            } text-xs font-bold uppercase tracking-wider z-10`}
                                    >
                                        {module.status === 'completed' ? 'Completed' : module.status === 'in-progress' ? 'In Progress' : 'New'}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">{module.description}</p>

                                    {/* Topics List */}
                                    <div className="mb-6 space-y-3">
                                        {module.topics.map((topic) => (
                                            <div key={topic.name} className="flex items-center gap-3 text-sm text-slate-300">
                                                <span
                                                    className={`material-symbols-outlined text-sm ${topic.completed ? 'text-[#3DC2EC]' : 'text-slate-600'
                                                        }`}
                                                >
                                                    {topic.completed ? 'check_circle' : 'radio_button_unchecked'}
                                                </span>
                                                <span>{topic.name}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto">
                                        <div className="flex justify-between text-xs font-medium text-slate-400 mb-2">
                                            <span>Progress</span>
                                            <span className="text-white">{module.progress}%</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-1.5 mb-6">
                                            <div
                                                className={`h-1.5 rounded-full ${module.progress === 100
                                                    ? 'bg-green-500'
                                                    : module.progress > 0
                                                        ? 'bg-[#3DC2EC] shadow-[0_0_10px_rgba(61,194,236,0.5)]'
                                                        : 'bg-slate-700'
                                                    }`}
                                                style={{ width: `${module.progress}%` }}
                                            ></div>
                                        </div>

                                        {module.status === 'completed' ? (
                                            <Link href={module.href}>
                                                <button className="w-full py-3 rounded-lg bg-[#282839] text-white font-medium hover:bg-white/10 border border-white/5 transition-colors flex items-center justify-center gap-2">
                                                    <span className="material-symbols-outlined text-sm">replay</span>
                                                    Review Module
                                                </button>
                                            </Link>
                                        ) : module.status === 'in-progress' ? (
                                            <Link href={module.href}>
                                                <button className="w-full py-3 rounded-lg bg-[#4C3BCF] text-white font-medium hover:bg-[#4C3BCF]/90 shadow-lg shadow-[#4C3BCF]/25 transition-all flex items-center justify-center gap-2">
                                                    Continue Learning
                                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                </button>
                                            </Link>
                                        ) : (
                                            <button className="w-full py-3 rounded-lg bg-[#4C3BCF] text-white font-medium hover:bg-[#4C3BCF]/90 shadow-lg shadow-[#4C3BCF]/25 transition-all flex items-center justify-center gap-2">
                                                Start Learning
                                                <span className="material-symbols-outlined text-sm">play_arrow</span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 pt-8 border-t border-white/5 text-center text-slate-500 text-sm pb-8">
                    <p>© 2024 Argus Security Platform. All rights reserved.</p>
                </div>
            </main>
        </>
    );
}
