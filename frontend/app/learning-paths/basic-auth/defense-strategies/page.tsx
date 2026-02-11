'use client';

import Link from 'next/link';
import { CodeTabs, CTFChallenge } from '@/components/learning';
import ProtectedFeature from '@/components/ProtectedFeature';

export default function DefenseStrategiesLesson() {
    return (
        <main className="flex-1 overflow-y-auto bg-[#0b0c15]">
            <div className="max-w-[1600px] mx-auto p-6 md:p-8 grid grid-cols-1 xl:grid-cols-12 gap-8">
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
                        🛡️ Defense Strategies
                    </h1>
                    <p className="text-[#9ca2ba] text-lg leading-relaxed">
                        Best practices for securing Basic Auth and better authentication alternatives
                    </p>

                    {/* Progress Bar */}
                    <div className="w-full bg-[#282c39] h-2 rounded-full overflow-hidden mb-2">
                        <div className="bg-gradient-to-r from-[#4C3BCF] to-green-500 h-full rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" style={{ width: '100%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-[#9ca2ba] font-mono mb-6">
                        <span>Lesson 5 of 5</span>
                        <span className="text-green-400 font-bold">100% Complete! 🎉</span>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        {/* Best Practices */}
                        <div className="bg-[#1e2029] rounded-xl border border-slate-800 p-6 md:p-8">
                            <h3 className="text-xl font-bold text-white mb-4">🛡️ How Professionals Secure Basic Auth</h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                If you must use Basic Auth, here are the essential security measures to implement:
                            </p>

                            <div className="space-y-4">
                                {/* Practice 1 */}
                                <div className="bg-[#111218] rounded-lg border border-green-500/30 p-5">
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="material-symbols-outlined text-green-500 text-xl shrink-0 mt-0.5">check_circle</span>
                                        <div>
                                            <h4 className="text-green-400 font-bold text-base mb-2">✅ Always Use HTTPS</h4>
                                            <p className="text-sm text-slate-300 mb-2">
                                                TLS encryption protects the entire HTTP request, including headers. This is the #1 most
                                                important security measure.
                                            </p>
                                            <ul className="space-y-1 text-sm text-slate-400 ml-4">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-green-400 mt-1">•</span>
                                                    <span>TLS encrypts headers end-to-end</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-green-400 mt-1">•</span>
                                                    <span>Prevents packet sniffing & MITM attacks</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Practice 2 */}
                                <div className="bg-[#111218] rounded-lg border border-green-500/30 p-5">
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="material-symbols-outlined text-green-500 text-xl shrink-0 mt-0.5">check_circle</span>
                                        <div>
                                            <h4 className="text-green-400 font-bold text-base mb-2">✅ Strong Passwords</h4>
                                            <p className="text-sm text-slate-300 mb-2">Require long, random, unique passwords:</p>
                                            <ul className="space-y-1 text-sm text-slate-400 ml-4">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-green-400 mt-1">•</span>
                                                    <span>Minimum 12+ characters</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-green-400 mt-1">•</span>
                                                    <span>Mix of letters, numbers, symbols</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-green-400 mt-1">•</span>
                                                    <span>No password reuse across services</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Practice 3 */}
                                <div className="bg-[#111218] rounded-lg border border-green-500/30 p-5">
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="material-symbols-outlined text-green-500 text-xl shrink-0 mt-0.5">check_circle</span>
                                        <div>
                                            <h4 className="text-green-400 font-bold text-base mb-2">✅ Rate Limiting</h4>
                                            <p className="text-sm text-slate-300 mb-2">Limit login attempts to prevent brute force:</p>
                                            <ul className="space-y-1 text-sm text-slate-400 ml-4">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-green-400 mt-1">•</span>
                                                    <span>Limit attempts per IP address</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-green-400 mt-1">•</span>
                                                    <span>Introduce delays after failures</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-green-400 mt-1">•</span>
                                                    <span>Use exponential backoff</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Practice 4 */}
                                <div className="bg-[#111218] rounded-lg border border-green-500/30 p-5">
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="material-symbols-outlined text-green-500 text-xl shrink-0 mt-0.5">check_circle</span>
                                        <div>
                                            <h4 className="text-green-400 font-bold text-base mb-2">✅ Account Lockouts</h4>
                                            <p className="text-sm text-slate-300">
                                                Temporary account locks after multiple failed attempts (e.g., 5 failures = 15 min lockout)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Practice 5 */}
                                <div className="bg-[#111218] rounded-lg border border-green-500/30 p-5">
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-green-500 text-xl shrink-0 mt-0.5">check_circle</span>
                                        <div>
                                            <h4 className="text-green-400 font-bold text-base mb-2">✅ Server-Side Password Hashing</h4>
                                            <p className="text-sm text-slate-300 mb-2">Never store passwords in plaintext. Use:</p>
                                            <div className="flex gap-2">
                                                <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded border border-green-500/30 font-mono">
                                                    bcrypt
                                                </span>
                                                <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded border border-green-500/30 font-mono">
                                                    argon2
                                                </span>
                                                <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded border border-green-500/30 font-mono">
                                                    scrypt
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Code Examples */}
                        <CodeTabs
                            title="Implementing Rate Limiting"
                            examples={[
                                {
                                    language: 'python',
                                    filename: 'rate_limiter.py',
                                    code: `from flask import Flask, request, abort
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)
limiter = Limiter(
    app,
    key_func=get_remote_address,
    default_limits=["200 per day", "50 per hour"]
)

@app.route("/admin")
@limiter.limit("5 per minute")  # Max 5 login attempts/min
def admin():
    # Check Basic Auth credentials
    auth = request.authorization
    if not auth or not check_credentials(auth.username, auth.password):
        abort(401)
    return "Welcome, admin!"`,
                                },
                                {
                                    language: 'javascript',
                                    filename: 'rate_limiter.js',
                                    code: `const rateLimit = require('express-rate-limit');
const express = require('express');
const app = express();

// Rate limiter: max 5 requests per minute
const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // 5 requests
  message: 'Too many login attempts, try again later'
});

app.get('/admin', loginLimiter, (req, res) => {
  const auth = req.headers.authorization;
  // Check credentials...
  res.send('Welcome, admin!');
});`,
                                },
                            ]}
                        />

                        {/* Better Alternatives */}
                        <div className="bg-[#1e2029] rounded-xl border border-slate-800 p-6 md:p-8">
                            <h3 className="text-xl font-bold text-white mb-4">🚀 Better Authentication Alternatives</h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Basic Auth is acceptable for internal tools, but for production applications, consider these modern
                                alternatives:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-[#111218] rounded-lg border border-[#4C3BCF]/30 p-5">
                                    <div className="text-3xl mb-3">🎫</div>
                                    <h4 className="text-white font-bold mb-2">JWT (JSON Web Tokens)</h4>
                                    <p className="text-xs text-slate-400 mb-3">Stateless token-based authentication</p>
                                    <div className="text-xs text-green-400">✓ Best for APIs & SPAs</div>
                                </div>

                                <div className="bg-[#111218] rounded-lg border border-[#4C3BCF]/30 p-5">
                                    <div className="text-3xl mb-3">🔐</div>
                                    <h4 className="text-white font-bold mb-2">OAuth 2.0</h4>
                                    <p className="text-xs text-slate-400 mb-3">Delegated authorization framework</p>
                                    <div className="text-xs text-green-400">✓ Third-party integrations</div>
                                </div>

                                <div className="bg-[#111218] rounded-lg border border-[#4C3BCF]/30 p-5">
                                    <div className="text-3xl mb-3">🍪</div>
                                    <h4 className="text-white font-bold mb-2">Session Cookies</h4>
                                    <p className="text-xs text-slate-400 mb-3">Server-side session management</p>
                                    <div className="text-xs text-green-400">✓ Traditional web apps</div>
                                </div>
                            </div>
                        </div>

                        {/* When to Use Basic Auth */}
                        <div className="bg-[#1e2029] rounded-xl border border-slate-800 p-6 md:p-8">
                            <h3 className="text-xl font-bold text-white mb-4">🎯 When Should You Use Basic Auth?</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h4 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined">check_circle</span>
                                        Acceptable Use Cases
                                    </h4>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-400 mt-1">✔️</span>
                                            <span>Internal tools & admin panels</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-400 mt-1">✔️</span>
                                            <span>Services behind VPN</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-400 mt-1">✔️</span>
                                            <span>Temporary protection during development</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-400 mt-1">✔️</span>
                                            <span>Quick API prototyping</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined">cancel</span>
                                        Avoid For
                                    </h4>
                                    <ul className="space-y-2 text-sm text-slate-300">
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-400 mt-1">❌</span>
                                            <span>Public production applications</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-400 mt-1">❌</span>
                                            <span>User-facing authentication</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-400 mt-1">❌</span>
                                            <span>Sensitive financial/medical systems</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-400 mt-1">❌</span>
                                            <span>Mobile applications</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-5">
                                <h5 className="text-blue-300 font-bold text-sm mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined">psychology</span>
                                    Final Security Rule
                                </h5>
                                <p className="text-sm text-slate-300 mb-3">
                                    <strong className="text-white">Basic Auth is not broken</strong> — it's often misused.
                                </p>
                                <div className="grid grid-cols-2 gap-4 text-xs">
                                    <div>
                                        <div className="text-green-400 font-bold mb-1">Used Correctly:</div>
                                        <div className="text-slate-400">✓ HTTPS</div>
                                        <div className="text-slate-400">✓ Strong credentials</div>
                                        <div className="text-slate-400">✓ Rate limits</div>
                                    </div>
                                    <div>
                                        <div className="text-red-400 font-bold mb-1">Used Incorrectly:</div>
                                        <div className="text-slate-400">→ Instant compromise</div>
                                        <div className="text-slate-400">→ Credential theft</div>
                                        <div className="text-slate-400">→ Brute force attacks</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Attacker vs Defender Table */}
                        <div className="bg-[#1e2029] rounded-xl border border-slate-800 overflow-hidden">
                            <div className="p-6 md:p-8">
                                <h3 className="text-xl font-bold text-white mb-4">⚔️ Attacker vs Defender Mindset</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-[#111218] border-t border-b border-slate-700">
                                        <tr>
                                            <th className="text-left p-4 text-sm font-bold text-slate-300">Perspective</th>
                                            <th className="text-left p-4 text-sm font-bold text-slate-300">Reality</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr className="border-b border-slate-800">
                                            <td className="p-4 text-yellow-400 font-medium">Developer</td>
                                            <td className="p-4 text-slate-300">
                                                "It's encoded, so it's safe" <span className="text-red-400 font-bold">❌</span>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-slate-800">
                                            <td className="p-4 text-red-400 font-medium">Attacker</td>
                                            <td className="p-4 text-slate-300">
                                                "I'll just decode it" <span className="text-green-400 font-bold">✅</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-green-400 font-medium">Defender</td>
                                            <td className="p-4 text-slate-300">
                                                "TLS + rate limits or no Basic Auth" <span className="text-green-400 font-bold">✅</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Completion Message */}
                        <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-8 text-center">
                            <div className="text-6xl mb-4">🎉</div>
                            <h3 className="text-2xl font-bold text-white mb-2">Congratulations!</h3>
                            <p className="text-slate-300 mb-4">
                                You've completed the Basic Authentication module and earned the{' '}
                                <strong className="text-[#3DC2EC]">Basic Auth Master</strong> badge!
                            </p>
                            <div className="flex items-center justify-center gap-2 text-sm text-green-400">
                                <span className="material-symbols-outlined">verified</span>
                                <span className="font-bold">+200 Bonus Points</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between items-center py-6 border-t border-slate-800 mt-8">
                        <Link href="/learning-paths/basic-auth/attack-vectors">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-400 hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined">arrow_back</span>
                                Previous Lesson
                            </button>
                        </Link>
                        <Link href="/learning-paths/basic-auth">
                            <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium shadow-lg shadow-green-600/20 transition-all">
                                Complete Module
                                <span className="material-symbols-outlined">check_circle</span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Column: CTF Challenge (4 cols) */}
                <div className="xl:col-span-4">
                    <div className="sticky top-6 space-y-6">
                        <ProtectedFeature featureName="CTF challenges">
                            <CTFChallenge
                                question="Which auth method is BEST for a mobile banking app?"
                                type="multiple-choice"
                                options={[
                                    'HTTP Basic Auth',
                                    'OAuth 2.0 with refresh tokens',
                                    'Hardcoded API keys',
                                    'Session cookies only',
                                ]}
                                answer="OAuth 2.0 with refresh tokens"
                                points={150}
                                hint="Consider security, token refresh, and revocation capabilities"
                            />
                        </ProtectedFeature>

                        {/* Module Completion */}
                        <div className="bg-gradient-to-br from-[#4C3BCF] to-[#3DC2EC] rounded-xl border border-[#4B70F5]/30 p-6 text-center">
                            <div className="text-4xl mb-3">👑</div>
                            <h4 className="text-white font-bold text-lg mb-2">Module Complete!</h4>
                            <p className="text-sm text-white/80 mb-4">You've mastered Basic Authentication</p>
                            <div className="bg-white/10 rounded-lg p-3">
                                <div className="text-2xl font-bold text-white">750</div>
                                <div className="text-xs text-white/70">Total Points Earned</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
