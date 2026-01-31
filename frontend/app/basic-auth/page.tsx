'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import InteractiveDemo from '@/components/features/InteractiveDemo';
import ChallengeList from '@/components/features/ChallengeList';

export default function BasicAuthPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
                        ← Back to Modules
                    </Link>
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-4xl font-bold text-white">Basic Authentication</h1>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                            Beginner
                        </Badge>
                    </div>
                    <p className="text-slate-300 text-lg">
                        Learn how Basic Auth works, discover its vulnerabilities, and master exploitation techniques
                    </p>
                </div>

                {/* Main Content */}
                <Tabs defaultValue="learn" className="space-y-6">
                    <TabsList className="bg-slate-800 border border-slate-700">
                        <TabsTrigger value="learn">📚 Learn</TabsTrigger>
                        <TabsTrigger value="demo">🔧 Interactive Demo</TabsTrigger>
                        <TabsTrigger value="challenges">🎯 Challenges</TabsTrigger>
                    </TabsList>

                    {/* Learn Tab */}
                    <TabsContent value="learn" className="space-y-6">
                        <Card className="bg-slate-800/50 border-slate-700">
                            <CardHeader>
                                <CardTitle className="text-white">What is Basic Authentication?</CardTitle>
                            </CardHeader>
                            <CardContent className="text-slate-300 space-y-4">
                                <p>
                                    Basic Authentication is one of the simplest authentication schemes built into the HTTP protocol.
                                    It sends credentials (username and password) encoded in Base64 with each request.
                                </p>

                                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                    <h4 className="font-semibold text-white mb-2">How it works:</h4>
                                    <ol className="list-decimal list-inside space-y-2">
                                        <li>Client makes a request to a protected resource</li>
                                        <li>Server responds with <code className="bg-slate-700 px-2 py-1 rounded">401 Unauthorized</code> and <code className="bg-slate-700 px-2 py-1 rounded">WWW-Authenticate: Basic</code> header</li>
                                        <li>Client sends credentials as <code className="bg-slate-700 px-2 py-1 rounded">Authorization: Basic &lt;base64&gt;</code></li>
                                        <li>Server validates credentials and grants or denies access</li>
                                    </ol>
                                </div>

                                <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-300 mb-2">Example Header:</h4>
                                    <code className="text-sm text-blue-200">
                                        Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
                                    </code>
                                    <p className="text-sm text-slate-400 mt-2">
                                        This decodes to: <span className="text-white">username:password</span>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-800/50 border-slate-700">
                            <CardHeader>
                                <CardTitle className="text-white">🔓 Security Vulnerabilities</CardTitle>
                            </CardHeader>
                            <CardContent className="text-slate-300 space-y-3">
                                <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                                    <h4 className="font-semibold text-red-300 mb-2">⚠️ Base64 is NOT Encryption</h4>
                                    <p className="text-sm">
                                        Base64 encoding is easily reversible. Anyone who intercepts the header can decode
                                        and read the credentials instantly.
                                    </p>
                                </div>

                                <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                                    <h4 className="font-semibold text-red-300 mb-2">⚠️ No Built-in Protection</h4>
                                    <p className="text-sm">
                                        Basic Auth has no protection against replay attacks, brute force, or credential theft.
                                    </p>
                                </div>

                                <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                                    <h4 className="font-semibold text-red-300 mb-2">⚠️ Sent with Every Request</h4>
                                    <p className="text-sm">
                                        Credentials are transmitted with every single request, increasing the attack surface.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-800/50 border-slate-700">
                            <CardHeader>
                                <CardTitle className="text-white">✅ Best Practices</CardTitle>
                            </CardHeader>
                            <CardContent className="text-slate-300 space-y-2">
                                <ul className="list-disc list-inside space-y-2">
                                    <li><strong>Always use HTTPS</strong> - Never send Basic Auth over HTTP</li>
                                    <li><strong>Implement rate limiting</strong> - Prevent brute force attacks</li>
                                    <li><strong>Use strong passwords</strong> - Avoid common or weak credentials</li>
                                    <li><strong>Consider alternatives</strong> - Use OAuth 2.0, JWT, or API keys for production</li>
                                    <li><strong>Monitor failed attempts</strong> - Detect and block malicious activity</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Interactive Demo Tab */}
                    <TabsContent value="demo">
                        <InteractiveDemo />
                    </TabsContent>

                    {/* Challenges Tab */}
                    <TabsContent value="challenges">
                        <ChallengeList moduleType="basic-auth" />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
