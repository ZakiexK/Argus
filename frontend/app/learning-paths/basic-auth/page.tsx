'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function BasicAuthModule() {
    // Module data
    const lessons = [
        {
            id: 'introduction',
            order: 1,
            title: 'Introduction',
            description: 'What is HTTP Basic Auth',
            duration: '8 min',
            points: 50,
            badge: { icon: '🎓', name: 'Basic Beginner' },
            status: 'available', // available | in-progress | completed
            href: '/learning-paths/basic-auth/introduction',
        },
        {
            id: 'encoding-vs-encryption',
            order: 2,
            title: 'Encoding vs Encryption',
            description: 'Base64 is NOT encryption',
            duration: '12 min',
            points: 100,
            badge: { icon: '🔐', name: 'Encoder Expert' },
            status: 'available',
            href: '/learning-paths/basic-auth/encoding-vs-encryption',
        },
        {
            id: 'header-analysis',
            order: 3,
            title: 'Header Analysis',
            description: 'Attacker perspective',
            duration: '10 min',
            points: 100,
            badge: { icon: '🔍', name: 'Header Hunter' },
            status: 'available',
            href: '/learning-paths/basic-auth/header-analysis',
        },
        {
            id: 'attack-vectors',
            order: 4,
            title: 'Attack Vectors',
            description: 'Security pitfalls & brute force',
            duration: '15 min',
            points: 150,
            badge: { icon: '⚔️', name: 'Attack Analyst' },
            status: 'available',
            href: '/learning-paths/basic-auth/attack-vectors',
        },
        {
            id: 'defense-strategies',
            order: 5,
            title: 'Defense Strategies',
            description: 'Best practices & alternatives',
            duration: '12 min',
            points: 150,
            badge: { icon: '🛡️', name: 'Security Specialist' },
            status: 'available',
            href: '/learning-paths/basic-auth/defense-strategies',
        },
    ];

    const totalPoints = lessons.reduce((sum, lesson) => sum + lesson.points, 0);
    const earnedPoints = 0; // Will be dynamic later
    const completedLessons = lessons.filter((l) => l.status === 'completed').length;
    const progress = (completedLessons / lessons.length) * 100;

    return (
        <main className="flex-1 overflow-y-auto bg-[#0b0c15] p-6 md:p-8">
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <Link
                    href="/learning-paths"
                    className="inline-flex items-center gap-2 text-[#3DC2EC] hover:text-white transition-colors mb-6 text-sm font-medium"
                >
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    Back to Learning Paths
                </Link>

                {/* Module Header */}
                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wider mb-4">
                        Beginner Level
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
                        🔐 Basic Authentication
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
                        Master the fundamentals of HTTP Basic Auth, understand why Base64 encoding is not encryption,
                        and learn how to identify and prevent common security vulnerabilities.
                    </p>
                </div>

                {/* Progress Card */}
                <div className="bg-[#2E2360] rounded-xl border border-[#4B70F5]/20 p-6 mb-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-white font-bold text-lg">Your Progress</h2>
                                <span className="text-[#3DC2EC] font-bold text-lg">{Math.round(progress)}%</span>
                            </div>
                            <div className="w-full bg-[#1e163d] rounded-full h-3 overflow-hidden mb-3">
                                <div
                                    className="bg-gradient-to-r from-[#4C3BCF] to-[#3DC2EC] h-full rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(61,194,236,0.5)]"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                            <p className="text-sm text-gray-400">
                                {completedLessons} of {lessons.length} lessons completed
                            </p>
                        </div>

                        {/* Achievements Preview */}
                        <div className="bg-[#1e163d] rounded-lg p-4 min-w-[280px]">
                            <h3 className="text-white font-bold text-sm mb-2">Achievements</h3>
                            <div className="flex items-center gap-2 mb-2">
                                {lessons.map((lesson) => (
                                    <div
                                        key={lesson.id}
                                        className={`text-2xl ${lesson.status === 'completed' ? 'opacity-100' : 'opacity-30 grayscale'
                                            }`}
                                        title={lesson.badge.name}
                                    >
                                        {lesson.badge.icon}
                                    </div>
                                ))}
                                <div
                                    className="text-2xl opacity-30 grayscale"
                                    title="Basic Auth Master (Complete all lessons)"
                                >
                                    👑
                                </div>
                            </div>
                            <p className="text-xs text-gray-400">
                                {earnedPoints} / {totalPoints + 200} points earned
                            </p>
                        </div>
                    </div>
                </div>

                {/* Lessons List */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white mb-4">Course Lessons</h2>

                    {lessons.map((lesson) => (
                        <Link key={lesson.id} href={lesson.href}>
                            <div className="group bg-[#1e2029] rounded-xl border border-slate-800 hover:border-[#4B70F5]/50 transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(75,112,245,0.3)] p-6 cursor-pointer">
                                <div className="flex items-start gap-4">
                                    {/* Lesson Number Circle */}
                                    <div className="flex-shrink-0 size-12 rounded-full bg-[#4C3BCF]/20 border border-[#4C3BCF]/40 flex items-center justify-center">
                                        {lesson.status === 'completed' ? (
                                            <span className="material-symbols-outlined text-[#3DC2EC]">check_circle</span>
                                        ) : lesson.status === 'in-progress' ? (
                                            <span className="material-symbols-outlined text-[#4C3BCF]">play_circle</span>
                                        ) : (
                                            <span className="text-white font-bold">{lesson.order}</span>
                                        )}
                                    </div>

                                    {/* Lesson Content */}
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#3DC2EC] transition-colors">
                                                    {lesson.title}
                                                </h3>
                                                <p className="text-sm text-gray-400">{lesson.description}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl mb-1">{lesson.badge.icon}</div>
                                                <span className="text-xs text-gray-500">{lesson.points} pts</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-3 mt-3">
                                            <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                                <span className="material-symbols-outlined text-[14px]">schedule</span>
                                                {lesson.duration}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                                <span className="material-symbols-outlined text-[14px]">emoji_events</span>
                                                {lesson.badge.name}
                                            </div>
                                            {lesson.status === 'completed' && (
                                                <span className="px-2 py-0.5 rounded text-xs font-bold bg-green-500/10 text-green-400 border border-green-500/30">
                                                    Completed
                                                </span>
                                            )}
                                            {lesson.status === 'in-progress' && (
                                                <span className="px-2 py-0.5 rounded text-xs font-bold bg-[#3DC2EC]/10 text-[#3DC2EC] border border-[#3DC2EC]/30">
                                                    In Progress
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Arrow Icon */}
                                    <div className="flex-shrink-0 text-gray-600 group-hover:text-[#3DC2EC] transition-colors">
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Master Badge Card */}
                <div className="mt-8 bg-gradient-to-r from-[#4C3BCF]/20 to-[#3DC2EC]/20 rounded-xl border border-[#4B70F5]/30 p-6">
                    <div className="flex items-center gap-4">
                        <div className="text-5xl opacity-30 grayscale">👑</div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-1">Basic Auth Master</h3>
                            <p className="text-sm text-gray-400 mb-2">
                                Complete all 5 lessons to unlock this exclusive achievement
                            </p>
                            <div className="text-xs text-[#3DC2EC] font-bold">+200 Bonus Points</div>
                        </div>
                    </div>
                </div>

                {/* Module Stats */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#1e2029] rounded-lg border border-slate-800 p-4">
                        <div className="text-gray-400 text-xs font-medium mb-1">Total Duration</div>
                        <div className="text-white font-bold text-2xl">57 minutes</div>
                    </div>
                    <div className="bg-[#1e2029] rounded-lg border border-slate-800 p-4">
                        <div className="text-gray-400 text-xs font-medium mb-1">Total Points</div>
                        <div className="text-white font-bold text-2xl">{totalPoints + 200}</div>
                    </div>
                    <div className="bg-[#1e2029] rounded-lg border border-slate-800 p-4">
                        <div className="text-gray-400 text-xs font-medium mb-1">Difficulty</div>
                        <div className="text-green-400 font-bold text-2xl">Beginner</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
