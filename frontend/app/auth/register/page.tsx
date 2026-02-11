'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signUp } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validation
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters');
            return;
        }

        if (username.length < 3) {
            setError('Username must be at least 3 characters');
            return;
        }

        setLoading(true);

        try {
            const { error } = await signUp(email, password, username);

            if (error) {
                setError(error.message);
            } else {
                // Redirect to dashboard on successful registration
                router.push('/dashboard');
            }
        } catch (err) {
            setError('An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0b0c15] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo/Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Argus</h1>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4C3BCF]/20 border border-[#4C3BCF]/40 text-[#3DC2EC] text-sm font-medium">
                        <span className="material-symbols-outlined text-sm">shield</span>
                        Start Your Security Journey
                    </div>
                </div>

                {/* Registration Card */}
                <div className="bg-[#1e2029] rounded-2xl border border-slate-800 p-8 shadow-xl">
                    <h2 className="text-2xl font-bold text-white mb-2">Create Account</h2>
                    <p className="text-slate-400 mb-6">Join Argus and start learning today</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        {/* Username Input */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full bg-[#0b0c15] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#4C3BCF] focus:ring-1 focus:ring-[#4C3BCF] transition-colors"
                                placeholder="johndoe"
                            />
                            <p className="text-xs text-slate-500 mt-1">
                                This will be your unique identifier (min. 3 characters)
                            </p>
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full bg-[#0b0c15] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#4C3BCF] focus:ring-1 focus:ring-[#4C3BCF] transition-colors"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full bg-[#0b0c15] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#4C3BCF] focus:ring-1 focus:ring-[#4C3BCF] transition-colors"
                                placeholder="••••••••"
                            />
                            <p className="text-xs text-slate-500 mt-1">
                                Must be at least 8 characters
                            </p>
                        </div>

                        {/* Confirm Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full bg-[#0b0c15] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#4C3BCF] focus:ring-1 focus:ring-[#4C3BCF] transition-colors"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#4C3BCF] hover:bg-[#4C3BCF]/90 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-all shadow-lg shadow-[#4C3BCF]/25 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                    Creating account...
                                </>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined">person_add</span>
                                    Create Account
                                </>
                            )}
                        </button>
                    </form>

                    {/* Sign In Link */}
                    <div className="mt-6 text-center text-sm text-slate-400">
                        Already have an account?{' '}
                        <Link href="/auth/login" className="text-[#3DC2EC] hover:text-white font-medium transition-colors">
                            Sign in
                        </Link>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="mt-6 text-center">
                    <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
