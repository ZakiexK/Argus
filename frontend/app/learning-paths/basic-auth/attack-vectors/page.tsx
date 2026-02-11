'use client';

import Link from 'next/link';
import { CodeTabs, CTFChallenge } from '@/components/learning';
import ProtectedFeature from '@/components/ProtectedFeature';
import { useState } from 'react';

export default function AttackVectorsLesson() {
    const [attacking, setAttacking] = useState(false);
    const [attempts, setAttempts] = useState(0);

    const simulateAttack = () => {
        setAttacking(true);
        setAttempts(0);
        const interval = setInterval(() => {
            setAttempts((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setAttacking(false);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);
    };

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
                        ⚔️ Attack Vectors
                    </h1>
                    <p className="text-[#9ca2ba] text-lg leading-relaxed">
                        Understanding common security pitfalls and brute force attacks against Basic Auth
                    </p>

                    {/* Progress Bar */}
                    <div className="w-full bg-[#282c39] h-2 rounded-full overflow-hidden mb-2">
                        <div className="bg-[#4C3BCF] h-full rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-[#9ca2ba] font-mono mb-6">
                        <span>Lesson 4 of 5</span>
                        <span>80% Completed</span>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        {/* Common Pitfalls */}
                        <div className="bg-[#1e2029] rounded-xl border border-slate-800 p-6 md:p-8">
                            <h3 className="text-xl font-bold text-white mb-4">🔓 Common Security Pitfalls</h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                These are the most common mistakes developers make when implementing Basic Auth. Each one can lead to
                                serious security vulnerabilities.
                            </p>

                            <div className="space-y-4">
                                {/* Pitfall 1 */}
                                <div className="bg-[#111218] rounded-lg border border-red-500/30 p-5">
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="material-symbols-outlined text-red-500 text-xl shrink-0 mt-0.5">cancel</span>
                                        <div>
                                            <h4 className="text-red-400 font-bold text-base mb-2">Using Basic Auth without HTTPS</h4>
                                            <p className="text-sm text-slate-300 mb-3">
                                                Credentials sent in plaintext (Base64 ≠ secure). Vulnerable to:
                                            </p>
                                            <ul className="space-y-1 text-sm text-slate-400 ml-4">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-red-400 mt-1">•</span>
                                                    <span>Packet sniffing</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-red-400 mt-1">•</span>
                                                    <span>Man-in-the-middle (MITM) attacks</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-red-400 mt-1">•</span>
                                                    <span>Rogue Wi-Fi attacks</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Pitfall 2 */}
                                <div className="bg-[#111218] rounded-lg border border-red-500/30 p-5">
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="material-symbols-outlined text-red-500 text-xl shrink-0 mt-0.5">cancel</span>
                                        <div>
                                            <h4 className="text-red-400 font-bold text-base mb-2">Credential Reuse</h4>
                                            <p className="text-sm text-slate-300 mb-2">
                                                Users often reuse passwords across services. If one endpoint is compromised, attackers gain
                                                access to multiple services.
                                            </p>
                                            <p className="text-xs text-red-300 italic">
                                                One leaked endpoint → many compromised services
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Pitfall 3 */}
                                <div className="bg-[#111218] rounded-lg border border-red-500/30 p-5">
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="material-symbols-outlined text-red-500 text-xl shrink-0 mt-0.5">cancel</span>
                                        <div>
                                            <h4 className="text-red-400 font-bold text-base mb-2">No Rate Limiting</h4>
                                            <p className="text-sm text-slate-300 mb-2">
                                                Without rate limiting, attackers can try unlimited password combinations. This is especially
                                                dangerous on APIs.
                                            </p>
                                            <p className="text-xs text-yellow-300">
                                                ⚠️ Enables brute-force attacks
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Pitfall 4 */}
                                <div className="bg-[#111218] rounded-lg border border-red-500/30 p-5">
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-red-500 text-xl shrink-0 mt-0.5">cancel</span>
                                        <div>
                                            <h4 className="text-red-400 font-bold text-base mb-2">Hardcoded Credentials</h4>
                                            <p className="text-sm text-slate-300 mb-3">
                                                Seen in IoT devices, routers, and internal APIs. Attackers scan for these default credentials.
                                            </p>
                                            <div className="bg-[#0a0a0a] rounded p-3 border border-red-500/20">
                                                <code className="text-xs text-red-300 font-mono">
                                                    AUTH_USER = "admin"
                                                    <br />
                                                    AUTH_PASS = "admin"
                                                </code>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Brute Force Attacks */}
                        <div className="bg-[#1e2029] rounded-xl border border-slate-800 p-6 md:p-8">
                            <h3 className="text-xl font-bold text-white mb-4">🔨 Brute Force Attacks Against Basic Auth</h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Basic Auth is particularly vulnerable to brute force because it's stateless and has no built-in
                                protections. Here's why and how:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div className="bg-[#111218] rounded-lg border border-slate-700 p-4">
                                    <div className="text-yellow-400 font-bold text-sm mb-2">Stateless</div>
                                    <p className="text-xs text-slate-400">No session tracking, every request is independent</p>
                                </div>
                                <div className="bg-[#111218] rounded-lg border border-slate-700 p-4">
                                    <div className="text-yellow-400 font-bold text-sm mb-2">No Lockout</div>
                                    <p className="text-xs text-slate-400">No built-in account lockout after failures</p>
                                </div>
                                <div className="bg-[#111218] rounded-lg border border-slate-700 p-4">
                                    <div className="text-yellow-400 font-bold text-sm mb-2">Same Credentials</div>
                                    <p className="text-xs text-slate-400">Credentials sent with every single request</p>
                                </div>
                            </div>

                            <h4 className="text-white font-bold mb-3">Attack Flow:</h4>
                            <div className="space-y-2 mb-6 text-sm">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <span className="text-[#4C3BCF] font-mono">1.</span>
                                    <span>Attacker targets endpoint</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <span className="text-[#4C3BCF] font-mono">2.</span>
                                    <span>Tries many Base64 credentials</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <span className="text-[#4C3BCF] font-mono">3.</span>
                                    <span>Monitors HTTP status codes</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400 ml-8 text-xs">
                                    <span className="text-red-400">401</span>
                                    <span>→ Failed attempt</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400 ml-8 text-xs">
                                    <span className="text-green-400">200</span>
                                    <span>→ Success!</span>
                                </div>
                            </div>

                            <h4 className="text-white font-bold mb-3">🧰 Tools Used:</h4>
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="bg-[#0a0a0a] rounded px-3 py-2 text-xs text-slate-300 font-mono">Hydra</div>
                                <div className="bg-[#0a0a0a] rounded px-3 py-2 text-xs text-slate-300 font-mono">
                                    Burp Suite Intruder
                                </div>
                                <div className="bg-[#0a0a0a] rounded px-3 py-2 text-xs text-slate-300 font-mono">ffuf</div>
                                <div className="bg-[#0a0a0a] rounded px-3 py-2 text-xs text-slate-300 font-mono">Patator</div>
                            </div>

                            <div className="bg-[#0a0a0a] rounded-lg border border-slate-700 p-4">
                                <div className="text-xs text-slate-500 mb-2">Example command (conceptual):</div>
                                <code className="text-sm text-green-400 font-mono">
                                    hydra -L users.txt -P passwords.txt http-get://example.com/admin
                                </code>
                            </div>
                        </div>

                        {/* Interactive Simulator */}
                        <div className="bg-gradient-to-br from-[#2E2360] to-[#1e163d] rounded-xl border border-[#4B70F5]/30 p-6">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-red-500">science</span>
                                Brute Force Simulator
                            </h3>
                            <p className="text-sm text-slate-300 mb-6">
                                This simulation shows how quickly an attacker can try multiple passwords without rate limiting.
                            </p>

                            <div className="bg-[#111218] rounded-lg border border-slate-700 p-6 mb-4">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <div className="text-xs text-slate-400 mb-1">Attempts</div>
                                        <div className="text-3xl font-bold text-white font-mono">{attempts}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400 mb-1">Success Rate</div>
                                        <div className="text-3xl font-bold text-red-400 font-mono">0%</div>
                                    </div>
                                </div>

                                <div className="w-full bg-slate-800 rounded-full h-2 mb-4">
                                    <div
                                        className="bg-red-500 h-full rounded-full transition-all duration-100"
                                        style={{ width: `${attempts}%` }}
                                    ></div>
                                </div>

                                <div className="bg-[#0a0a0a] rounded p-3 max-h-32 overflow-y-auto">
                                    <div className="text-xs font-mono space-y-0.5">
                                        {Array.from({ length: Math.min(attempts, 10) }).map((_, i) => (
                                            <div key={i} className="text-slate-500">
                                                → admin:password{i + 1} <span className="text-red-400">[401 Unauthorized]</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={simulateAttack}
                                disabled={attacking}
                                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
                            >
                                {attacking ? (
                                    <>
                                        <span className="material-symbols-outlined animate-spin">sync</span>
                                        Attacking...
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined">play_arrow</span>
                                        Start Simulation
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Code Examples */}
                        <CodeTabs
                            title="Password Hashing (Server-Side Security)"
                            examples={[
                                {
                                    language: 'python',
                                    filename: 'hash_password.py',
                                    code: `import bcrypt

# Hash a password
password = "mypassword123"
hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

# Store 'hashed' in database (NOT plaintext!)

# Verify password later
def verify_password(password, hashed):
    return bcrypt.checkpw(password.encode('utf-8'), hashed)`,
                                },
                                {
                                    language: 'javascript',
                                    filename: 'hash_password.js',
                                    code: `const bcrypt = require('bcrypt');

// Hash a password
async function hashPassword(password) {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(password, saltRounds);
  return hashed;  // Store this in database
}

// Verify password later
async function verifyPassword(password, hashed) {
  return await bcrypt.compare(password, hashed);
}`,
                                },
                            ]}
                        />
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between items-center py-6 border-t border-slate-800 mt-8">
                        <Link href="/learning-paths/basic-auth/header-analysis">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-400 hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined">arrow_back</span>
                                Previous Lesson
                            </button>
                        </Link>
                        <Link href="/learning-paths/basic-auth/defense-strategies">
                            <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#4C3BCF] hover:bg-[#4C3BCF]/90 text-white font-medium shadow-lg shadow-[#4C3BCF]/20 transition-all">
                                Next Lesson
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* CTF Challenge */}
                <div className="xl:col-span-4">
                    <div className="sticky top-6">
                        <ProtectedFeature featureName="CTF challenges">
                            <CTFChallenge
                                question="Which of these implementations is MOST vulnerable?"
                                type="multiple-choice"
                                options={[
                                    'HTTPS + Basic Auth + bcrypt hashed passwords',
                                    'HTTP + Basic Auth + plaintext passwords',
                                    'HTTPS + Basic Auth + rate limiting',
                                    'HTTPS + Bearer tokens + OAuth2',
                                ]}
                                answer="HTTP + Basic Auth + plaintext passwords"
                                points={150}
                                hint="Look for the combination of insecure transport AND insecure storage"
                            />
                        </ProtectedFeature>

                        {/* Quick Stats */}
                        <div className="bg-[#1e2029] rounded-xl border border-slate-800 p-5">
                            <h4 className="text-white font-bold text-sm mb-3">Attack Statistics</h4>
                            <div className="space-y-3 text-xs">
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Attempts/second (unlimited)</span>
                                    <span className="text-red-400 font-bold">~1000+</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Common passwords tried</span>
                                    <span className="text-yellow-400 font-bold">10,000+</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Time to crack weak password</span>
                                    <span className="text-red-400 font-bold">&lt; 1 min</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
