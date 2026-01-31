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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
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
                        Learn how Basic Auth works, discover its vulnerabilities, and master exploitation techniques
                    </p>
                </div>

                {/* Main Content */}
                <Tabs defaultValue="learn" className="space-y-6">
                    <TabsList className="bg-white border-2 border-gray-200 p-1">
                        <TabsTrigger value="learn" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                            📚 Learn
                        </TabsTrigger>
                        <TabsTrigger value="demo" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                            🔧 Interactive Demo
                        </TabsTrigger>
                        <TabsTrigger value="challenges" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                            🎯 Challenges
                        </TabsTrigger>
                    </TabsList>

                    {/* Learn Tab */}
                    <TabsContent value="learn" className="space-y-6">
                        <Card className="bg-white border-2 border-gray-200 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-gray-900 text-2xl">What is Basic Authentication?</CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-700 space-y-4">
                                <p className="leading-relaxed">
                                    Basic Authentication is one of the simplest authentication schemes built into the HTTP protocol.
                                    It sends credentials (username and password) encoded in Base64 with each request.
                                </p>

                                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                                    <h4 className="font-bold text-gray-900 mb-3 text-lg">How it works:</h4>
                                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                        <li>Client makes a request to a protected resource</li>
                                        <li>Server responds with <code className="bg-white px-2 py-1 rounded border border-gray-300 text-sm font-mono">401 Unauthorized</code> and <code className="bg-white px-2 py-1 rounded border border-gray-300 text-sm font-mono">WWW-Authenticate: Basic</code> header</li>
                                        <li>Client sends credentials as <code className="bg-white px-2 py-1 rounded border border-gray-300 text-sm font-mono">Authorization: Basic &lt;base64&gt;</code></li>
                                        <li>Server validates credentials and grants or denies access</li>
                                    </ol>
                                </div>

                                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-lg shadow-md">
                                    <h4 className="font-bold mb-2 text-lg">Example Header:</h4>
                                    <code className="text-sm font-mono bg-white/20 px-3 py-2 rounded block">
                                        Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
                                    </code>
                                    <p className="text-sm mt-3 text-blue-50">
                                        This decodes to: <span className="font-bold">username:password</span>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-2 border-gray-200 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-gray-900 text-2xl">🔓 Security Vulnerabilities</CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-700 space-y-4">
                                <div className="bg-red-50 border-2 border-red-200 p-5 rounded-lg">
                                    <h4 className="font-bold text-red-700 mb-2 text-lg">⚠️ Base64 is NOT Encryption</h4>
                                    <p className="text-gray-700">
                                        Base64 encoding is easily reversible. Anyone who intercepts the header can decode
                                        and read the credentials instantly.
                                    </p>
                                </div>

                                <div className="bg-red-50 border-2 border-red-200 p-5 rounded-lg">
                                    <h4 className="font-bold text-red-700 mb-2 text-lg">⚠️ No Built-in Protection</h4>
                                    <p className="text-gray-700">
                                        Basic Auth has no protection against replay attacks, brute force, or credential theft.
                                    </p>
                                </div>

                                <div className="bg-red-50 border-2 border-red-200 p-5 rounded-lg">
                                    <h4 className="font-bold text-red-700 mb-2 text-lg">⚠️ Sent with Every Request</h4>
                                    <p className="text-gray-700">
                                        Credentials are transmitted with every single request, increasing the attack surface.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-2 border-gray-200 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-gray-900 text-2xl">✅ Best Practices</CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-700">
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2 text-xl">✓</span>
                                        <span><strong>Always use HTTPS</strong> - Never send Basic Auth over HTTP</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2 text-xl">✓</span>
                                        <span><strong>Implement rate limiting</strong> - Prevent brute force attacks</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2 text-xl">✓</span>
                                        <span><strong>Use strong passwords</strong> - Avoid common or weak credentials</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2 text-xl">✓</span>
                                        <span><strong>Consider alternatives</strong> - Use OAuth 2.0, JWT, or API keys for production</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2 text-xl">✓</span>
                                        <span><strong>Monitor failed attempts</strong> - Detect and block malicious activity</span>
                                    </li>
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
