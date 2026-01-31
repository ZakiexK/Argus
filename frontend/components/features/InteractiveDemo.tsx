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

        // Generate auth header
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
            <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                    <CardTitle className="text-white">📤 Request Configuration</CardTitle>
                    <CardDescription>Configure your Basic Auth credentials</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="username" className="text-slate-300">Username</Label>
                        <Input
                            id="username"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="bg-slate-900/50 border-slate-600 text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-slate-300">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-slate-900/50 border-slate-600 text-white"
                        />
                    </div>

                    {authHeader && (
                        <div className="bg-slate-900/50 p-3 rounded border border-slate-700">
                            <p className="text-xs text-slate-400 mb-1">Generated Header:</p>
                            <code className="text-xs text-blue-300 break-all">{authHeader}</code>
                        </div>
                    )}

                    <div className="flex gap-2">
                        <Button
                            onClick={() => handleTest(false)}
                            disabled={loading}
                            className="flex-1 bg-blue-600 hover:bg-blue-700"
                        >
                            {loading ? 'Testing...' : 'Test Secure Endpoint'}
                        </Button>
                        <Button
                            onClick={() => handleTest(true)}
                            disabled={loading}
                            variant="outline"
                            className="flex-1 border-orange-500/50 text-orange-400 hover:bg-orange-500/10"
                        >
                            {loading ? 'Testing...' : 'Test Vulnerable 🚩'}
                        </Button>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-lg">
                        <p className="text-xs text-yellow-300">
                            💡 Hint: Try common credentials like admin/admin on the vulnerable endpoint!
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Response Panel */}
            <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                    <CardTitle className="text-white">📥 Response</CardTitle>
                    <CardDescription>Server response and security analysis</CardDescription>
                </CardHeader>
                <CardContent>
                    {!response ? (
                        <div className="text-center text-slate-400 py-12">
                            <div className="text-4xl mb-3">🔍</div>
                            <p>Submit a request to see the response</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Badge variant={response.success ? 'default' : 'destructive'}>
                                    {response.status} {response.success ? 'Success' : 'Failed'}
                                </Badge>
                                {response.data.flag && (
                                    <Badge className="bg-yellow-400/20 text-yellow-300 border-yellow-400/50">
                                        🚩 Flag Found!
                                    </Badge>
                                )}
                            </div>

                            <div className="bg-slate-900/50 p-4 rounded border border-slate-700">
                                <p className="text-xs text-slate-400 mb-2">Response Body:</p>
                                <pre className="text-xs text-slate-200 overflow-x-auto">
                                    {JSON.stringify(response.data, null, 2)}
                                </pre>
                            </div>

                            {response.success && (
                                <div className="bg-green-500/10 border border-green-500/30 p-3 rounded">
                                    <p className="text-sm text-green-300">✅ Authentication successful!</p>
                                    {response.data.flag && (
                                        <p className="text-sm text-yellow-300 mt-2">
                                            🎉 Flag: <code>{response.data.flag}</code>
                                        </p>
                                    )}
                                </div>
                            )}

                            {!response.success && (
                                <div className="bg-red-500/10 border border-red-500/30 p-3 rounded">
                                    <p className="text-sm text-red-300">❌ Authentication failed</p>
                                    <p className="text-xs text-slate-400 mt-1">
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
