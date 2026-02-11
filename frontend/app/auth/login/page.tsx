'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signIn } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const { error } = await signIn(email, password);

            if (error) {
                setError(error.message);
            } else {
                // Redirect to dashboard on successful login
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
                        <span className="material-symbols-outlined text-sm">lock</span>
                        Authentication Security Platform
                    </div>
                </div>

                {/* Login Card */}
                <div className="bg-[#1e2029] rounded-2xl border border-slate-800 p-8 shadow-xl">
                    <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                    <p className="text-slate-400 mb-6">Sign in to continue your learning journey</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
                                {error}
                            </div>
                        )}

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
                        </div>

                        {/* Forgot Password Link */}
                        <div className="text-right">
                            <Link
                                href="/auth/reset-password"
                                className="text-sm text-[#3DC2EC] hover:text-white transition-colors"
                            >
                                Forgot password?
                            </Link>
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
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined">login</span>
                                    Sign In
                                </>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-[#1e2029] text-slate-400">Or continue with</span>
                        </div>
                    </div>

                    {/* Social Login (Future) */}
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            disabled
                            className="flex items-center justify-center gap-2 bg-[#0b0c15] border border-slate-700 text-slate-400 py-2 rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="text-xl">G</span>
                            Google
                        </button>
                        <button
                            disabled
                            className="flex items-center justify-center gap-2 bg-[#0b0c15] border border-slate-700 text-slate-400 py-2 rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="material-symbols-outlined text-sm">code</span>
                            GitHub
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <div className="mt-6 text-center text-sm text-slate-400">
                        Don't have an account?{' '}
                        <Link href="/auth/register" className="text-[#3DC2EC] hover:text-white font-medium transition-colors">
                            Sign up
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
