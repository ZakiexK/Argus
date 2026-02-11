'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import Link from 'next/link';

interface ProtectedFeatureProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
    featureName?: string;
}

export default function ProtectedFeature({
    children,
    fallback,
    featureName = 'this feature',
}: ProtectedFeatureProps) {
    const { user, loading } = useAuth();
    const [showDetails, setShowDetails] = useState(false);

    if (loading) {
        return (
            <div className="bg-[#1e2029] rounded-xl border border-slate-800 p-8 text-center">
                <span className="material-symbols-outlined animate-spin text-4xl text-[#4C3BCF]">
                    progress_activity
                </span>
                <p className="text-slate-400 mt-2">Loading...</p>
            </div>
        );
    }

    if (!user) {
        return fallback || (
            <div className="bg-[#2E2360] rounded-xl border border-[#4B70F5]/30 p-8 text-center relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4C3BCF]/10 to-transparent pointer-events-none" />

                <div className="relative z-10">
                    {/* Lock Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#4C3BCF]/20 border border-[#4C3BCF]/40 mb-4">
                        <span className="material-symbols-outlined text-4xl text-[#4C3BCF]">lock</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2">Sign In Required</h3>

                    {/* Description */}
                    <p className="text-slate-300 mb-6 max-w-md mx-auto">
                        Create a free account to unlock <span className="text-[#3DC2EC] font-medium">{featureName}</span>,
                        track your progress, and earn achievements!
                    </p>

                    {/* Benefits List */}
                    {showDetails && (
                        <div className="bg-[#1e2029] rounded-lg p-4 mb-6 text-left max-w-sm mx-auto">
                            <p className="text-sm font-medium text-white mb-3">With an account, you get:</p>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#3DC2EC] text-sm">check_circle</span>
                                    Solve CTF challenges and earn points
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#3DC2EC] text-sm">check_circle</span>
                                    Unlock achievements and badges
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#3DC2EC] text-sm">check_circle</span>
                                    Track your learning progress
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#3DC2EC] text-sm">check_circle</span>
                                    View personalized dashboard stats
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                        <Link href="/auth/register">
                            <button className="px-6 py-3 rounded-lg bg-[#4C3BCF] hover:bg-[#4C3BCF]/90 text-white font-medium transition-all shadow-lg shadow-[#4C3BCF]/25 flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">person_add</span>
                                Create Free Account
                            </button>
                        </Link>
                        <Link href="/auth/login">
                            <button className="px-6 py-3 rounded-lg bg-[#1e2029] hover:bg-[#252530] text-white font-medium border border-slate-700 transition-all flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">login</span>
                                Sign In
                            </button>
                        </Link>
                    </div>

                    {/* Toggle Details */}
                    <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                        {showDetails ? 'Show less' : 'Why do I need an account?'}
                    </button>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
