'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CodeExecutionViewerProps {
    title: string;
    description: string;
}

export default function CodeExecutionViewer({ title, description }: CodeExecutionViewerProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const codeSteps = [
        {
            line: 1,
            code: 'const username = "demo";',
            explanation: 'Define the username credential',
            highlight: 'username',
            visual: { type: 'variable', name: 'username', value: 'demo' },
        },
        {
            line: 2,
            code: 'const password = "password";',
            explanation: 'Define the password credential',
            highlight: 'password',
            visual: { type: 'variable', name: 'password', value: 'password' },
        },
        {
            line: 3,
            code: 'const credentials = username + ":" + password;',
            explanation: 'Combine credentials with colon separator',
            highlight: 'credentials',
            visual: { type: 'concat', result: 'demo:password' },
        },
        {
            line: 4,
            code: 'const encoded = btoa(credentials);',
            explanation: 'Encode credentials to Base64',
            highlight: 'encoded',
            visual: { type: 'encode', input: 'demo:password', output: 'ZGVtbzpwYXNzd29yZA==' },
        },
        {
            line: 5,
            code: 'const authHeader = "Basic " + encoded;',
            explanation: 'Create Authorization header with Basic scheme',
            highlight: 'authHeader',
            visual: { type: 'header', value: 'Basic ZGVtbzpwYXNzd29yZA==' },
        },
        {
            line: 6,
            code: 'fetch("/api/resource", {',
            explanation: 'Make HTTP request to server',
            highlight: 'fetch',
            visual: { type: 'request', status: 'pending' },
        },
        {
            line: 7,
            code: '  headers: { Authorization: authHeader }',
            explanation: 'Send Authorization header with request',
            highlight: 'Authorization',
            visual: { type: 'request', status: 'sending' },
        },
        {
            line: 8,
            code: '});',
            explanation: 'Server receives and validates credentials',
            highlight: '',
            visual: { type: 'response', status: 'success', code: 200 },
        },
    ];

    const handlePlay = () => {
        setIsPlaying(true);
        setCurrentStep(0);

        const interval = setInterval(() => {
            setCurrentStep((prev) => {
                if (prev >= codeSteps.length - 1) {
                    setIsPlaying(false);
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            });
        }, 1500);
    };

    const handleReset = () => {
        setCurrentStep(0);
        setIsPlaying(false);
    };

    const renderVisualization = (visual: any) => {
        switch (visual.type) {
            case 'variable':
                return (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg"
                    >
                        <p className="font-mono text-sm text-blue-900">
                            <span className="font-bold">{visual.name}</span> = "{visual.value}"
                        </p>
                    </motion.div>
                );

            case 'concat':
                return (
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="bg-purple-50 border-2 border-purple-200 p-4 rounded-lg"
                    >
                        <p className="font-mono text-sm text-purple-900">
                            Combined: <span className="font-bold">"{visual.result}"</span>
                        </p>
                    </motion.div>
                );

            case 'encode':
                return (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="space-y-3"
                    >
                        <div className="bg-orange-50 border-2 border-orange-200 p-4 rounded-lg">
                            <p className="text-xs font-semibold text-orange-700 mb-1">Input (Plain Text):</p>
                            <p className="font-mono text-sm text-orange-900">{visual.input}</p>
                        </div>
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl text-center"
                        >
                            🔄
                        </motion.div>
                        <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                            <p className="text-xs font-semibold text-green-700 mb-1">Output (Base64):</p>
                            <p className="font-mono text-sm text-green-900 break-all">{visual.output}</p>
                        </div>
                    </motion.div>
                );

            case 'header':
                return (
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg"
                    >
                        <p className="text-xs font-semibold text-blue-700 mb-2">HTTP Header:</p>
                        <p className="font-mono text-sm text-blue-900 break-all">
                            Authorization: {visual.value}
                        </p>
                    </motion.div>
                );

            case 'request':
                return (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="space-y-3"
                    >
                        {visual.status === 'pending' && (
                            <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-lg flex items-center gap-3">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                    className="text-2xl"
                                >
                                    ⏳
                                </motion.div>
                                <p className="font-semibold text-yellow-700">Preparing request...</p>
                            </div>
                        )}
                        {visual.status === 'sending' && (
                            <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg">
                                <motion.div
                                    animate={{ x: [0, 100, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="text-3xl"
                                >
                                    📤 ➡️ 🖥️
                                </motion.div>
                                <p className="font-semibold text-blue-700 mt-2">Sending to server...</p>
                            </div>
                        )}
                    </motion.div>
                );

            case 'response':
                return (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-green-50 border-2 border-green-200 p-6 rounded-lg text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className="text-5xl mb-3"
                        >
                            ✅
                        </motion.div>
                        <p className="font-bold text-green-700 text-lg">Authentication Successful!</p>
                        <p className="text-sm text-green-600 mt-2">HTTP {visual.code} OK</p>
                    </motion.div>
                );

            default:
                return null;
        }
    };

    return (
        <Card className="bg-white border-2 border-gray-200 shadow-lg">
            <CardHeader>
                <CardTitle className="text-gray-900 text-2xl">{title}</CardTitle>
                <CardDescription className="text-gray-600">{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Code Panel */}
                    <div className="space-y-4">
                        <div className="flex gap-2 mb-4">
                            <Button
                                onClick={handlePlay}
                                disabled={isPlaying}
                                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                            >
                                {isPlaying ? '▶️ Playing...' : '▶️ Play Animation'}
                            </Button>
                            <Button
                                onClick={handleReset}
                                variant="outline"
                                className="border-gray-300"
                            >
                                🔄 Reset
                            </Button>
                        </div>

                        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                            {codeSteps.map((step, index) => (
                                <motion.div
                                    key={step.line}
                                    initial={{ opacity: 0.3 }}
                                    animate={{
                                        opacity: index <= currentStep ? 1 : 0.3,
                                        backgroundColor: index === currentStep ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="py-1 px-2 rounded"
                                >
                                    <span className="text-gray-500 select-none mr-4">{step.line}</span>
                                    <span className="text-gray-100">{step.code}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Current Step Explanation */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg"
                            >
                                <Badge className="mb-2 bg-blue-600">
                                    Step {currentStep + 1} of {codeSteps.length}
                                </Badge>
                                <p className="text-gray-900 font-semibold">
                                    {codeSteps[currentStep].explanation}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Visualization Panel */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border-2 border-gray-200">
                        <h3 className="font-bold text-gray-900 mb-4 text-center">Visual Representation</h3>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {renderVisualization(codeSteps[currentStep].visual)}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6">
                    <div className="flex gap-1">
                        {codeSteps.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`h-2 flex-1 rounded-full ${index <= currentStep ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gray-200'
                                    }`}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: index <= currentStep ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
