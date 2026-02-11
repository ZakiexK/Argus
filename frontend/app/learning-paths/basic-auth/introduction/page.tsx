'use client';

import Link from 'next/link';
import { VisualFlow, CTFChallenge } from '@/components/learning';
import ProtectedFeature from '@/components/ProtectedFeature';

export default function IntroductionLesson() {
    return (
        <main className="flex-1 overflow-y-auto bg-[#0b0c15]">
            <div className="max-w-[1400px] mx-auto p-6 md:p-8 grid grid-cols-1 xl:grid-cols-12 gap-8">
                {/* Left Column: Lesson Content (8 cols) */}
                <div className="xl:col-span-8 flex flex-col gap-8">
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
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                        🔐 Introduction to Basic Auth
                    </h1>
                    <p className="text-[#9ca2ba] text-lg leading-relaxed">
                        What is HTTP Basic Authentication and when should you use it?
                    </p>

                    {/* Progress Bar */}
                    <div className="w-full bg-[#282c39] h-2 rounded-full overflow-hidden mb-2">
                        <div className="bg-[#4C3BCF] h-full rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-[#9ca2ba] font-mono mb-6">
                        <span>Lesson 1 of 5</span>
                        <span>20% Completed</span>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <div className="bg-[#1e2029] rounded-xl border border-slate-800 p-6 md:p-8">
                            <h3 className="text-xl font-bold text-white mb-4">What is HTTP Basic Authentication?</h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                HTTP Basic Authentication is one of the simplest authentication mechanisms defined in{' '}
                                <strong className="text-white">RFC 7617</strong>. It works by sending a username and password
                                with every HTTP request, encoded using Base64, inside the{' '}
                                <code className="text-[#4C3BCF] bg-[#4C3BCF]/10 px-1.5 py-0.5 rounded">Authorization</code>{' '}
                                header.
                            </p>
                            <div className="flex items-start gap-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                                <span className="material-symbols-outlined text-yellow-500 shrink-0 mt-0.5">warning</span>
                                <div>
                                    <h4 className="font-bold text-yellow-500 text-sm uppercase tracking-wider mb-1">Important</h4>
                                    <p className="text-sm text-yellow-200/80">
                                        Basic Auth is <strong>not secure by default</strong>. It becomes acceptable only when combined
                                        with HTTPS.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* How It Works */}
                        <div className="bg-[#1e2029] rounded-xl border border-slate-800 p-6 md:p-8">
                            <h3 className="text-xl font-bold text-white mb-4">How Basic Auth Works</h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                The authentication flow follows a simple 4-step process:
                            </p>

                            <div className="space-y-4 mb-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 size-8 rounded-full bg-[#4C3BCF]/20 border border-[#4C3BCF] flex items-center justify-center text-white font-bold text-sm">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Client requests a protected resource</h4>
                                        <code className="text-xs text-slate-400 block font-mono bg-[#111218] p-2 rounded">
                                            GET /admin HTTP/1.1
                                        </code>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 size-8 rounded-full bg-[#4C3BCF]/20 border border-[#4C3BCF] flex items-center justify-center text-white font-bold text-sm">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Server responds with a challenge</h4>
                                        <code className="text-xs text-slate-400 block font-mono bg-[#111218] p-2 rounded">
                                            HTTP/1.1 401 Unauthorized
                                            <br />
                                            WWW-Authenticate: Basic realm="Admin Area"
                                        </code>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 size-8 rounded-full bg-[#4C3BCF]/20 border border-[#4C3BCF] flex items-center justify-center text-white font-bold text-sm">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Client sends credentials</h4>
                                        <p className="text-sm text-slate-400 mb-2">
                                            Browser encodes <code className="text-[#3DC2EC]">username:password</code> to Base64
                                        </p>
                                        <code className="text-xs text-slate-400 block font-mono bg-[#111218] p-2 rounded">
                                            Authorization: Basic YWRtaW46cGFzc3dvcmQxMjM=
                                        </code>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 size-8 rounded-full bg-[#4C3BCF]/20 border border-[#4C3BCF] flex items-center justify-center text-white font-bold text-sm">
                                        4
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Server decodes and verifies</h4>
                                        <p className="text-sm text-slate-400">
                                            The server decodes, splits at <code className="text-[#3DC2EC]">:</code>, and verifies
                                            credentials
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Flow */}
                        <VisualFlow
                            title="Authentication Flow Visualization"
                            steps={[
                                { icon: 'laptop_mac', label: 'Client', description: 'Sends request' },
                                { icon: 'lock', label: 'Challenge', description: '401 response' },
                                { icon: 'key', label: 'Credentials', description: 'Base64 encoded' },
                                { icon: 'dns', label: 'Server', description: 'Validates access' },
                            ]}
                        />
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between items-center py-6 border-t border-slate-800 mt-8">
                        <Link href="/learning-paths/basic-auth">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-400 hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined">arrow_back</span>
                                Back to Overview
                            </button>
                        </Link>
                        <Link href="/learning-paths/basic-auth/encoding-vs-encryption">
                            <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#4C3BCF] hover:bg-[#4C3BCF]/90 text-white font-medium shadow-lg shadow-[#4C3BCF]/20 transition-all">
                                Next Lesson
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Column: CTF Challenge (4 cols) */}
                <div className="xl:col-span-4">
                    <div className="sticky top-6 space-y-6">
                        <ProtectedFeature featureName="CTF challenges">
                            <CTFChallenge
                                question="Which header contains Basic Auth credentials?"
                                type="multiple-choice"
                                options={['Content-Type', 'Authorization', 'Authentication', 'X-Auth-Token']}
                                answer="Authorization"
                                points={50}
                                hint="Look for the header that starts with 'Basic' in the examples above."
                            />
                        </ProtectedFeature>

                        {/* Key Takeaways */}
                        <div className="bg-[#1e2029] rounded-xl border border-slate-800 p-5">
                            <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#3DC2EC]">checklist</span>
                                Key Takeaways
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4C3BCF] mt-0.5">•</span>
                                    <span>Basic Auth uses the Authorization header</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4C3BCF] mt-0.5">•</span>
                                    <span>Credentials are Base64 encoded (not encrypted)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4C3BCF] mt-0.5">•</span>
                                    <span>Must be used with HTTPS in production</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#4C3BCF] mt-0.5">•</span>
                                    <span>Defined in RFC 7617</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
