'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function ResetPasswordPage() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess(false);
        setLoading(true);

        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/auth/update-password`,
            });

            if (error) {
                setError(error.message);
            } else {
                setSuccess(true);
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
                        <span className="material-symbols-outlined text-sm">lock_reset</span>
                        Password Recovery
                    </div>
                </div>

                {/* Reset Card */}
                <div className="bg-[#1e2029] rounded-2xl border border-slate-800 p-8 shadow-xl">
                    <h2 className="text-2xl font-bold text-white mb-2">Reset Password</h2>
                    <p className="text-slate-400 mb-6">
                        Enter your email and we'll send you a link to reset your password
                    </p>

                    {success ? (
                        <div className="space-y-4">
                            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                                <div className="flex items-center gap-2 text-green-400 font-medium mb-2">
                                    <span className="material-symbols-outlined">check_circle</span>
                                    Email Sent!
                                </div>
                                <p className="text-sm text-slate-300">
                                    Check your inbox for a password reset link. If you don't see it, check your spam folder.
                                </p>
                            </div>

                            <Link href="/auth/login">
                                <button className="w-full bg-[#4C3BCF] hover:bg-[#4C3BCF]/90 text-white font-medium py-3 rounded-lg transition-all shadow-lg shadow-[#4C3BCF]/25">
                                    Back to Sign In
                                </button>
                            </Link>
                        </div>
                    ) : (
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

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#4C3BCF] hover:bg-[#4C3BCF]/90 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-all shadow-lg shadow-[#4C3BCF]/25 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined">send</span>
                                        Send Reset Link
                                    </>
                                )}
                            </button>
                        </form>
                    )}

                    {!success && (
                        <div className="mt-6 text-center text-sm text-slate-400">
                            Remember your password?{' '}
                            <Link href="/auth/login" className="text-[#3DC2EC] hover:text-white font-medium transition-colors">
                                Sign in
                            </Link>
                        </div>
                    )}
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
