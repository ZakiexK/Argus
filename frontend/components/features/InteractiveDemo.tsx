'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { authApi } from '@/lib/api';
import { toast } from 'sonner';

export default function InteractiveDemo() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<any>(null);
    const [authHeader, setAuthHeader] = useState('');

    const handleTest = async (isVulnerable: boolean) => {
        if (!username || !password) {
            toast.error('Please enter both username and password');
            return;
        }

        setLoading(true);
        setResponse(null);

        const credentials = btoa(`${username}:${password}`);
        setAuthHeader(`Authorization: Basic ${credentials}`);

        try {
            const result = isVulnerable
                ? await authApi.testVulnerableAuth(username, password)
                : await authApi.testBasicAuth(username, password);

            setResponse({
                success: true,
                status: result.status,
                data: result.data,
            });

            if (result.data.flag) {
                toast.success(`🎉 Flag captured: ${result.data.flag}`);
            } else {
                toast.success('Authentication successful!');
            }
        } catch (error: any) {
            setResponse({
                success: false,
                status: error.response?.status || 500,
                data: error.response?.data || { detail: 'Network error' },
            });
            toast.error('Authentication failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid md:grid-cols-2 gap-6">
            {/* Request Panel */}
            <Card className="bg-white border-2 border-gray-200 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-gray-900 text-2xl">📤 Request Configuration</CardTitle>
                    <CardDescription className="text-gray-600">Configure your Basic Auth credentials</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="username" className="text-gray-700 font-medium">Username</Label>
                        <Input
                            id="username"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border-2 border-gray-200 focus:border-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-2 border-gray-200 focus:border-blue-500"
                        />
                    </div>

                    {authHeader && (
                        <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                            <p className="text-xs font-semibold text-blue-700 mb-1">Generated Header:</p>
                            <code className="text-xs text-blue-600 break-all font-mono">{authHeader}</code>
                        </div>
                    )}

                    <div className="flex gap-2">
                        <Button
                            onClick={() => handleTest(false)}
                            disabled={loading}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                        >
                            {loading ? 'Testing...' : 'Test Secure'}
                        </Button>
                        <Button
                            onClick={() => handleTest(true)}
                            disabled={loading}
                            className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                        >
                            {loading ? 'Testing...' : 'Test Vulnerable 🚩'}
                        </Button>
                    </div>

                    <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-lg">
                        <p className="text-sm text-yellow-800 font-medium">
                            💡 Hint: Try admin/admin on the vulnerable endpoint!
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Response Panel */}
            <Card className="bg-white border-2 border-gray-200 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-gray-900 text-2xl">📥 Response</CardTitle>
                    <CardDescription className="text-gray-600">Server response and security analysis</CardDescription>
                </CardHeader>
                <CardContent>
                    {!response ? (
                        <div className="text-center text-gray-400 py-16">
                            <div className="text-6xl mb-4">🔍</div>
                            <p className="text-lg">Submit a request to see the response</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Badge className={response.success ? 'bg-green-100 text-green-700 border-green-200' : 'bg-red-100 text-red-700 border-red-200'}>
                                    {response.status} {response.success ? 'Success' : 'Failed'}
                                </Badge>
                                {response.data.flag && (
                                    <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">
                                        🚩 Flag Found!
                                    </Badge>
                                )}
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
                                <p className="text-xs font-semibold text-gray-600 mb-2">Response Body:</p>
                                <pre className="text-sm text-gray-800 overflow-x-auto font-mono">
                                    {JSON.stringify(response.data, null, 2)}
                                </pre>
                            </div>

                            {response.success && (
                                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                                    <p className="font-semibold text-green-700">✅ Authentication successful!</p>
                                    {response.data.flag && (
                                        <p className="font-semibold text-yellow-700 mt-2">
                                            🎉 Flag: <code className="bg-yellow-100 px-2 py-1 rounded">{response.data.flag}</code>
                                        </p>
                                    )}
                                </div>
                            )}

                            {!response.success && (
                                <div className="bg-red-50 border-2 border-red-200 p-4 rounded-lg">
                                    <p className="font-semibold text-red-700">❌ Authentication failed</p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {response.data.detail || 'Invalid credentials'}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
