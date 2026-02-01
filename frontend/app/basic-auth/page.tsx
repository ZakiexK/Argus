'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { motion } from 'framer-motion';
import InteractiveDemo from '@/components/features/InteractiveDemo';
import ChallengeList from '@/components/features/ChallengeList';
import CodeExecutionViewer from '@/components/features/CodeExecutionViewer';

export default function BasicAuthPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <Link href="/" className="text-blue-600 hover:text-blue-700 mb-4 inline-block font-medium">
                        ← Back to Modules
                    </Link>
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            Basic Authentication
                        </h1>
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                            Beginner
                        </Badge>
                    </div>
                    <p className="text-gray-600 text-lg">
                        Learn how Basic Auth works through interactive animations and hands-on challenges
                    </p>
                </motion.div>

                {/* Main Content */}
                <Tabs defaultValue="learn" className="space-y-6">
                    <TabsList className="bg-white border-2 border-gray-200 p-1">
                        <TabsTrigger value="learn" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                            📚 Learn
                        </TabsTrigger>
                        <TabsTrigger value="visualize" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                            🎬 Code Animation
                        </TabsTrigger>
                        <TabsTrigger value="demo" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                            🔧 Interactive Demo
                        </TabsTrigger>
                        <TabsTrigger value="challenges" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                            🎯 Challenges
                        </TabsTrigger>
                    </TabsList>

                    {/* Learn Tab */}
                    <TabsContent value="learn" className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Card className="bg-white border-2 border-gray-200 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-gray-900 text-2xl">What is Basic Authentication?</CardTitle>
                                </CardHeader>
                                <CardContent className="text-gray-700 space-y-4">
                                    <p className="leading-relaxed text-lg">
                                        Basic Authentication is the simplest HTTP authentication method. It sends credentials (username and password)
                                        with each request, encoded in Base64.
                                    </p>

                                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
                                        <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                                            <span className="text-2xl">🔄</span>
                                            How it works - Step by Step
                                        </h4>
                                        <div className="space-y-4">
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 }}
                                                className="flex gap-4 items-start"
                                            >
                                                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-blue-600 flex-shrink-0">
                                                    1
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">Client makes request</p>
                                                    <p className="text-sm text-gray-600">Browser tries to access protected resource</p>
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className="flex gap-4 items-start"
                                            >
                                                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-purple-600 flex-shrink-0">
                                                    2
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">Server responds with 401</p>
                                                    <p className="text-sm text-gray-600">Includes header: <code className="bg-white px-2 py-1 rounded border text-xs">WWW-Authenticate: Basic</code></p>
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 }}
                                                className="flex gap-4 items-start"
                                            >
                                                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-green-600 flex-shrink-0">
                                                    3
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">Client sends credentials</p>
                                                    <p className="text-sm text-gray-600">Format: <code className="bg-white px-2 py-1 rounded border text-xs">username:password</code> → Base64</p>
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 }}
                                                className="flex gap-4 items-start"
                                            >
                                                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-orange-600 flex-shrink-0">
                                                    4
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">Server validates & responds</p>
                                                    <p className="text-sm text-gray-600">Returns 200 OK if valid, 401 if invalid</p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-xl shadow-md">
                                        <h4 className="font-bold mb-3 text-lg flex items-center gap-2">
                                            <span className="text-2xl">💡</span>
                                            Example Header
                                        </h4>
                                        <div className="bg-white/10 backdrop-blur p-4 rounded-lg space-y-2">
                                            <p className="text-sm font-semibold">Plain text credentials:</p>
                                            <code className="text-sm font-mono block bg-white/20 px-3 py-2 rounded">
                                                username:password
                                            </code>
                                            <p className="text-sm font-semibold mt-3">Base64 encoded:</p>
                                            <code className="text-sm font-mono block bg-white/20 px-3 py-2 rounded break-all">
                                                dXNlcm5hbWU6cGFzc3dvcmQ=
                                            </code>
                                            <p className="text-sm font-semibold mt-3">HTTP Header:</p>
                                            <code className="text-sm font-mono block bg-white/20 px-3 py-2 rounded break-all">
                                                Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
                                            </code>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card className="bg-white border-2 border-gray-200 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-gray-900 text-2xl flex items-center gap-2">
                                        <span className="text-3xl">⚠️</span>
                                        Security Vulnerabilities
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-red-50 border-2 border-red-200 p-5 rounded-xl">
                                            <h4 className="font-bold text-red-700 mb-2 text-lg">🚨 Not Encryption!</h4>
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                Base64 is encoding, not encryption. Anyone can decode it instantly using <code className="bg-white px-1 rounded">atob()</code> in JavaScript!
                                            </p>
                                            <div className="bg-white p-3 rounded mt-3">
                                                <code className="text-xs font-mono text-red-600">
                                                    atob("ZGVtbzpwYXNzd29yZA==") <br />
                                                    → "demo:password"
                                                </code>
                                            </div>
                                        </div>

                                        <div className="bg-red-50 border-2 border-red-200 p-5 rounded-xl">
                                            <h4 className="font-bold text-red-700 mb-2 text-lg">🔓 Always Sent</h4>
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                Credentials are sent with EVERY request. One intercepted request = compromised account!
                                            </p>
                                        </div>

                                        <div className="bg-red-50 border-2 border-red-200 p-5 rounded-xl">
                                            <h4 className="font-bold text-red-700 mb-2 text-lg">🎯 Brute Force</h4>
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                Without rate limiting, attackers can try thousands of password combinations quickly.
                                            </p>
                                        </div>

                                        <div className="bg-red-50 border-2 border-red-200 p-5 rounded-xl">
                                            <h4 className="font-bold text-red-700 mb-2 text-lg">📡 Man-in-the-Middle</h4>
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                Over HTTP (not HTTPS), anyone on the network can see your credentials in plain text!
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Card className="bg-white border-2 border-gray-200 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-gray-900 text-2xl flex items-center gap-2">
                                        <span className="text-3xl">✅</span>
                                        Best Practices
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {[
                                            { icon: '🔒', title: 'Always use HTTPS', desc: 'Encrypts the entire connection' },
                                            { icon: '⏱️', title: 'Rate limiting', desc: 'Prevent brute force attacks' },
                                            { icon: '🔐', title: 'Strong passwords', desc: 'Use password managers' },
                                            { icon: '🔄', title: 'Consider alternatives', desc: 'OAuth 2.0, JWT for production' },
                                        ].map((practice, i) => (
                                            <div key={i} className="bg-green-50 border-2 border-green-200 p-4 rounded-lg flex gap-3">
                                                <div className="text-3xl">{practice.icon}</div>
                                                <div>
                                                    <p className="font-bold text-green-700">{practice.title}</p>
                                                    <p className="text-sm text-gray-600">{practice.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </TabsContent>

                    {/* Code Animation Tab */}
                    <TabsContent value="visualize">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <CodeExecutionViewer
                                title="Basic Auth Implementation"
                                description="Watch the code execute line-by-line and see what happens behind the scenes"
                            />
                        </motion.div>
                    </TabsContent>

                    {/* Interactive Demo Tab */}
                    <TabsContent value="demo">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <InteractiveDemo />
                        </motion.div>
                    </TabsContent>

                    {/* Challenges Tab */}
                    <TabsContent value="challenges">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <ChallengeList moduleType="basic-auth" />
                        </motion.div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
