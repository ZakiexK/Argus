'use client';

import Link from 'next/link';
import { VisualFlow, CTFChallenge, CodeTabs } from '@/components/learning';
import ProtectedFeature from '@/components/ProtectedFeature';
import { useState } from 'react';

export default function HeaderAnalysisLesson() {
    const [showDecoded, setShowDecoded] = useState(false);

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
                        🔍 Header Analysis
                    </h1>
                    <p className="text-[#9ca2ba] text-lg leading-relaxed">
                        Understanding what attackers see when analyzing HTTP requests with Basic Auth
                    </p>

                    {/* Progress Bar */}
                    <div className="w-full bg-[#282c39] h-2 rounded-full overflow-hidden mb-2">
                        <div className="bg-[#4C3BCF] h-full rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-[#9ca2ba] font-mono mb-6">
                        <span>Lesson 3 of 5</span>
                        <span>60% Completed</span>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        {/* Sample Request */}
                        <div className="bg-[#1e2029] rounded-xl border border-slate-800 p-6 md:p-8">
                            <h3 className="text-xl font-bold text-white mb-4">Sample HTTP Request</h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Let's examine what a typical HTTP request with Basic Authentication looks like. This is exactly what
                                travels over the network when a client authenticates.
                            </p>

                            {/* Interactive Request Inspector */}
                            <div className="bg-[#111218] rounded-lg border border-slate-800 overflow-hidden">
                                <div className="bg-gradient-to-r from-[#4B70F5] to-[#4C3BCF] px-4 py-2 flex items-center justify-between">
                                    <span className="text-white text-xs font-mono font-bold">HTTP REQUEST</span>
                                    {showDecoded ? (
                                        <span className="text-xs bg-red-500/20 text-red-300 px-2 py-0.5 rounded border border-red-500/30">
                                            🔓 EXPOSED
                                        </span>
                                    ) : (
                                        <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded border border-green-500/30">
                                            🔒 ENCODED
                                        </span>
                                    )}
                                </div>
                                <div className="p-4 font-mono text-sm">
                                    <div className="text-green-400">GET /dashboard HTTP/1.1</div>
                                    <div className="text-blue-400">Host: example.com</div>
                                    <div className="text-yellow-400 flex items-center gap-2 group">
                                        <span>Authorization: Basic dXNlcjpwYXNz</span>
                                        <button
                                            onClick={() => setShowDecoded(!showDecoded)}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-slate-700 hover:bg-slate-600 px-2 py-0.5 rounded text-white"
                                        >
                                            {showDecoded ? 'Hide' : 'Decode'}
                                        </button>
                                    </div>

                                    {showDecoded && (
                                        <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded">
                                            <div className="text-xs text-red-400 mb-2 uppercase font-bold">⚠️ Decoded Credentials:</div>
                                            <div className="text-red-300 font-mono">
                                                username: <strong>user</strong>
                                                <br />
                                                password: <strong>pass</strong>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* What Attackers See */}
                        <div className="bg-[#1e2029] rounded-xl border border-slate-800 p-6 md:p-8">
                            <h3 className="text-xl font-bold text-white mb-4">What an Attacker Sees on HTTP</h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                When Basic Auth is used over plain HTTP (not HTTPS), attackers can easily intercept and decode the
                                credentials. Here's what they can see:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div className="bg-[#111218] rounded-lg border border-red-500/30 p-4">
                                    <div className="text-red-400 font-bold text-sm mb-2 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg">visibility</span>
                                        Full Header
                                    </div>
                                    <p className="text-xs text-slate-400">Entire HTTP request is visible in plaintext</p>
                                </div>
                                <div className="bg-[#111218] rounded-lg border border-red-500/30 p-4">
                                    <div className="text-red-400 font-bold text-sm mb-2 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg">code</span>
                                        Base64 String
                                    </div>
                                    <p className="text-xs text-slate-400">Encoded credentials are exposed</p>
                                </div>
                                <div className="bg-[#111218] rounded-lg border border-red-500/30 p-4">
                                    <div className="text-red-400 font-bold text-sm mb-2 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg">lock_open</span>
                                        Decodable
                                    </div>
                                    <p className="text-xs text-slate-400">Anyone can decode Base64 instantly</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                                <span className="material-symbols-outlined text-red-500 shrink-0 mt-0.5">dangerous</span>
                                <div>
                                    <h4 className="font-bold text-red-500 text-sm uppercase tracking-wider mb-1">Critical Vulnerability</h4>
                                    <p className="text-sm text-red-200/80">
                                        Without HTTPS, credentials are transmitted in plaintext (Base64 is just encoding). Any attacker on
                                        the same network can capture and decode them in seconds.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Tools Attackers Use */}
                        <div className="bg-[#1e2029] rounded-xl border border-slate-800 p-6 md:p-8">
                            <h3 className="text-xl font-bold text-white mb-4">Tools Attackers Use</h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                Professional attackers and penetration testers use various tools to intercept and analyze HTTP traffic:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-[#111218] rounded-lg border border-slate-700 p-4 hover:border-[#4C3BCF]/50 transition-all group">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="size-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-[#4C3BCF]/20 transition-all">
                                            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#4C3BCF]">
                                                network_check
                                            </span>
                                        </div>
                                        <h4 className="font-bold text-white">Wireshark</h4>
                                    </div>
                                    <p className="text-xs text-slate-400">Packet analyzer that captures all network traffic</p>
                                </div>

                                <div className="bg-[#111218] rounded-lg border border-slate-700 p-4 hover:border-[#4C3BCF]/50 transition-all group">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="size-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-[#4C3BCF]/20 transition-all">
                                            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#4C3BCF]">terminal</span>
                                        </div>
                                        <h4 className="font-bold text-white">tcpdump</h4>
                                    </div>
                                    <p className="text-xs text-slate-400">Command-line packet capture utility</p>
                                </div>

                                <div className="bg-[#111218] rounded-lg border border-slate-700 p-4 hover:border-[#4C3BCF]/50 transition-all group">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="size-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-[#4C3BCF]/20 transition-all">
                                            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#4C3BCF]">security</span>
                                        </div>
                                        <h4 className="font-bold text-white">Burp Suite</h4>
                                    </div>
                                    <p className="text-xs text-slate-400">Web security testing platform with proxy capabilities</p>
                                </div>

                                <div className="bg-[#111218] rounded-lg border border-slate-700 p-4 hover:border-[#4C3BCF]/50 transition-all group">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="size-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-[#4C3BCF]/20 transition-all">
                                            <span className="material-symbols-outlined text-slate-400 group-hover:text-[#4C3BCF]">
                                                developer_mode
                                            </span>
                                        </div>
                                        <h4 className="font-bold text-white">Browser DevTools</h4>
                                    </div>
                                    <p className="text-xs text-slate-400">Built-in browser tools show all HTTP headers</p>
                                </div>
                            </div>
                        </div>

                        {/* Code Examples */}
                        <CodeTabs
                            title="Decoding Basic Auth Headers"
                            examples={[
                                {
                                    language: 'python',
                                    filename: 'decode_header.py',
                                    code: `import base64

# Extract the encoded part
header = "Basic dXNlcjpwYXNz"
encoded = header.split(" ")[1]

# Decode from Base64
decoded = base64.b64decode(encoded).decode('utf-8')
username, password = decoded.split(':')

print(f"Username: {username}")  # user
print(f"Password: {password}")  # pass`,
                                },
                                {
                                    language: 'javascript',
                                    filename: 'decode_header.js',
                                    code: `// Extract the encoded part
const header = "Basic dXNlcjpwYXNz";
const encoded = header.split(" ")[1];

// Decode from Base64
const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
const [username, password] = decoded.split(':');

console.log(\`Username: \${username}\`);  // user
console.log(\`Password: \${password}\`);  // pass`,
                                },
                                {
                                    language: 'bash',
                                    filename: 'decode_header.sh',
                                    code: `# Decode Base64 header
echo "dXNlcjpwYXNz" | base64 -d
# Output: user:pass

# Or with the full header
echo "Basic dXNlcjpwYXNz" | cut -d' ' -f2 | base64 -d`,
                                },
                            ]}
                        />
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-between items-center py-6 border-t border-slate-800 mt-8">
                        <Link href="/learning-paths/basic-auth/encoding-vs-encryption">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-400 hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined">arrow_back</span>
                                Previous Lesson
                            </button>
                        </Link>
                        <Link href="/learning-paths/basic-auth/attack-vectors">
                            <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#4C3BCF] hover:bg-[#4C3BCF]/90 text-white font-medium shadow-lg shadow-[#4C3BCF]/20 transition-all">
                                Next Lesson
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Column: CTF Challenge (4 cols) */}
                <div className="xl:col-span-4">
                    <div className="sticky top-6">
                        <ProtectedFeature featureName="CTF challenges">
                            <CTFChallenge
                                question="Decode this Base64 header value and extract the username: YnJ1Y2U6d2F5bmUxMjM="
                                answer="bruce"
                                points={100}
                                hint="Decode the Base64 string, then extract everything before the colon (:)"
                            />
                        </ProtectedFeature>

                        {/* Quick Reference */}
                        <div className="bg-[#1e2029] rounded-xl border border-slate-800 p-5">
                            <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#3DC2EC]">help</span>
                                Quick Reference
                            </h4>
                            <div className="space-y-3 text-xs">
                                <div>
                                    <h5 className="text-slate-300 font-semibold mb-1">HTTP (Unsafe)</h5>
                                    <p className="text-slate-500">Headers visible in plaintext</p>
                                </div>
                                <div>
                                    <h5 className="text-slate-300 font-semibold mb-1">HTTPS (Safe)</h5>
                                    <p className="text-slate-500">Encrypted with TLS/SSL</p>
                                </div>
                                <div>
                                    <h5 className="text-slate-300 font-semibold mb-1">Base64 Decode</h5>
                                    <code className="text-[#3DC2EC] bg-[#111218] px-2 py-0.5 rounded block mt-1">
                                        echo "..." | base64 -d
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
