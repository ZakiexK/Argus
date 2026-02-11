'use client';

import Link from 'next/link';
import { VisualFlow } from '@/components/learning';


export default function EncodingVsEncryptionLesson() {
    return (
        <main className="flex-1 overflow-y-auto bg-[#0b0c15]">
            <div className="max-w-[1600px] mx-auto p-6 md:p-8 grid grid-cols-1 xl:grid-cols-12 gap-8">
                {/* Left Column: Lesson Content (8 cols) */}
                <div className="xl:col-span-8 flex flex-col gap-8">
                    {/* Lesson Header */}
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/learning-paths/basic-auth"
                            className="inline-flex items-center gap-2 text-[#3DC2EC] hover:text-white transition-colors text-sm font-medium w-fit"
                        >
                            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                            Back to Module
                        </Link>

                        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#4C3BCF]/10 text-[#4C3BCF] text-xs font-medium mb-3 border border-[#4C3BCF]/20 w-fit">
                            Difficulty: Beginner
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2">
                            Encoding vs Encryption
                        </h1>
                        <p className="text-[#9ca2ba] text-lg leading-relaxed max-w-3xl">
                            Learn why Base64 encoding is NOT encryption, understand the critical security implications, and master the mechanics of HTTP Basic Auth.
                        </p>

                        {/* Progress Bar */}
                        <div className="w-full bg-[#282c39] h-2 rounded-full overflow-hidden mt-2">
                            <div className="bg-[#4C3BCF] h-full rounded-full" style={{ width: '40%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-[#9ca2ba] font-mono">
                            <span>Lesson 2 of 5</span>
                            <span>40% Completed</span>
                        </div>
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <div className="bg-[#1e2029] rounded-xl border border-slate-800 p-6 md:p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#4C3BCF]">school</span>
                                The Mechanics
                            </h3>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                HTTP Basic authentication is a simple challenge and response mechanism with which a server
                                can request authentication information (a user ID and password) from a client. When a
                                client (like your browser) wants to access a protected resource, it sends the user ID and
                                password joined by a single colon{' '}
                                <code className="text-[#4C3BCF] bg-[#4C3BCF]/10 px-1 rounded">:</code>.
                            </p>
                            <div className="bg-[#111218] rounded-lg border border-slate-800 p-4 mb-6 relative group">
                                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="text-slate-400 hover:text-white p-1">
                                        <span className="material-symbols-outlined text-sm">content_copy</span>
                                    </button>
                                </div>
                                <div className="text-xs text-slate-500 mb-2 font-mono uppercase">Request Header Example</div>
                                <code className="text-sm text-green-400 block font-mono">
                                    GET /admin HTTP/1.1
                                    <br />
                                    Host: www.example.com
                                    <br />
                                    <span className="text-yellow-400">Authorization: Basic YWRtaW46cGFzc3dvcmQxMjM=</span>
                                </code>
                            </div>
                            <p className="text-slate-300 mb-4 leading-relaxed">
                                The string following <code className="text-[#4C3BCF] bg-[#4C3BCF]/10 px-1 rounded">Basic</code> is
                                a Base64 encoded string of{' '}
                                <code className="text-[#4C3BCF] bg-[#4C3BCF]/10 px-1 rounded">username:password</code>.
                            </p>
                            <div className="flex items-start gap-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                                <span className="material-symbols-outlined text-yellow-500 shrink-0 mt-0.5">warning</span>
                                <div>
                                    <h4 className="font-bold text-yellow-500 text-sm uppercase tracking-wider mb-1">
                                        Security Warning
                                    </h4>
                                    <p className="text-sm text-yellow-200/80">
                                        Base64 is an <strong>encoding</strong> scheme, not encryption. Anyone who can intercept the
                                        request can easily decode the string and retrieve the plaintext credentials. This is why
                                        Basic Auth must always be used over HTTPS.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Flow */}
                        <VisualFlow
                            title="Visualizing the Flow"
                            steps={[
                                { icon: 'laptop_mac', label: 'Client', description: 'Sends credentials' },
                                { icon: 'dns', label: 'Server', description: 'Validates' },
                            ]}
                        />
                    </div>

                    {/* Navigation Actions */}
                    <div className="flex justify-between items-center py-6 border-t border-slate-800">
                        <Link href="/learning-paths/basic-auth/introduction">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-400 hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined">arrow_back</span>
                                Previous Lesson
                            </button>
                        </Link>
                        <Link href="/learning-paths/basic-auth/header-analysis">
                            <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#4C3BCF] hover:bg-[#4C3BCF]/90 text-white font-medium shadow-lg shadow-[#4C3BCF]/20 transition-all">
                                Next Lesson
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Column: Interactive Widget (4 cols) */}
                <div className="xl:col-span-4 space-y-6">
                    {/* Encoder Widget */}
                    <div className="sticky top-6">
                        <div className="bg-[#1e2029] rounded-xl border border-slate-800 shadow-xl overflow-hidden">
                            {/* Widget Header */}
                            <div className="bg-gradient-to-r from-[#4B70F5] to-[#4C3BCF] p-4 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-white">
                                    <span className="material-symbols-outlined">terminal</span>
                                    <h3 className="font-bold text-sm tracking-wide">BASE64 PLAYGROUND</h3>
                                </div>
                                <div className="flex gap-1">
                                    <div className="size-2.5 rounded-full bg-white/20"></div>
                                    <div className="size-2.5 rounded-full bg-white/20"></div>
                                    <div className="size-2.5 rounded-full bg-white/20"></div>
                                </div>
                            </div>
                            <div className="p-5 flex flex-col gap-5">
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Experiment with encoding credentials. Notice how the output changes as you type.
                                </p>
                                {/* Input Section */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                                        Credentials (user:pass)
                                    </label>
                                    <input
                                        className="w-full bg-[#111218] border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white font-mono focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent outline-none transition-all placeholder-slate-500"
                                        type="text"
                                        defaultValue="admin:password123"
                                    />
                                </div>
                                {/* Arrow Down */}
                                <div className="flex justify-center">
                                    <div className="bg-slate-800 p-1.5 rounded-full text-slate-400">
                                        <span className="material-symbols-outlined block text-lg">arrow_downward</span>
                                    </div>
                                </div>
                                {/* Output Section */}
                                <div className="space-y-2">
                                    <label className="flex justify-between text-xs font-semibold text-slate-300 uppercase tracking-wider">
                                        <span>Encoded Output</span>
                                        <span className="text-[#4C3BCF] cursor-pointer hover:underline">Copy</span>
                                    </label>
                                    <div className="w-full bg-[#111218] border border-[#4C3BCF]/30 rounded-lg px-3 py-3 text-sm text-green-400 font-mono break-all shadow-[0_0_15px_-3px_rgba(76,113,246,0.2)]">
                                        YWRtaW46cGFzc3dvcmQxMjM=
                                    </div>
                                </div>
                                {/* Mini Challenge */}
                                <div className="mt-4 pt-5 border-t border-slate-700">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                                            <span className="material-symbols-outlined text-yellow-500 text-lg">emoji_events</span>
                                            Mini CTF Challenge
                                        </h4>
                                        <span className="text-[10px] bg-slate-800 text-slate-500 px-2 py-0.5 rounded">10 pts</span>
                                    </div>
                                    <p className="text-xs text-slate-400 mb-3">Decode this string to find the flag:</p>
                                    <div className="bg-slate-900 p-2 rounded border border-slate-800 text-xs font-mono text-slate-400 mb-3 select-all">
                                        Q1RGe2Jhc2ljX2F1dGhfaXNfZWFzeX0=
                                    </div>
                                    <div className="flex gap-2">
                                        <input
                                            className="flex-1 bg-transparent border border-slate-700 rounded px-2 py-1.5 text-xs text-white focus:border-[#4C3BCF] outline-none"
                                            placeholder="Enter Flag"
                                            type="text"
                                        />
                                        <button className="bg-[#4C3BCF] hover:bg-[#4C3BCF]/90 text-white text-xs px-3 py-1.5 rounded transition-colors font-medium">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Related Modules */}
                        <div className="mt-6 bg-[#151720] rounded-xl p-4 border border-slate-800/50">
                            <h4 className="text-sm font-bold text-white mb-2">Related Modules</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-xs text-slate-400 hover:text-[#4C3BCF] cursor-pointer transition-colors">
                                    <span className="material-symbols-outlined text-sm">lock_open</span>
                                    <span>Digest Authentication</span>
                                </li>
                                <li className="flex items-center gap-2 text-xs text-slate-400 hover:text-[#4C3BCF] cursor-pointer transition-colors">
                                    <span className="material-symbols-outlined text-sm">key</span>
                                    <span>OAuth 2.0 Fundamentals</span>
                                </li>
                                <li className="flex items-center gap-2 text-xs text-slate-400 hover:text-[#4C3BCF] cursor-pointer transition-colors">
                                    <span className="material-symbols-outlined text-sm">cookie</span>
                                    <span>Session Management</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
