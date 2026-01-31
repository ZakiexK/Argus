'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { supabase } from '@/lib/supabase';
import { challengeApi } from '@/lib/api';
import { toast } from 'sonner';

interface Challenge {
    id: string;
    module_type: string;
    level: number;
    title: string;
    description: string;
    points: number;
    hints: string[];
}

export default function ChallengeList({ moduleType }: { moduleType: string }) {
    const [challenges, setChallenges] = useState<Challenge[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
    const [flagInput, setFlagInput] = useState('');
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        loadChallenges();
    }, [moduleType]);

    const loadChallenges = async () => {
        try {
            const { data, error } = await supabase
                .from('challenges')
                .select('*')
                .eq('module_type', moduleType)
                .order('level');

            if (error) throw error;
            setChallenges(data || []);
        } catch (error) {
            console.error('Error loading challenges:', error);
            toast.error('Failed to load challenges');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmitFlag = async () => {
        if (!selectedChallenge || !flagInput.trim()) {
            toast.error('Please enter a flag');
            return;
        }

        try {
            const result = await challengeApi.submitFlag(selectedChallenge.id, flagInput);

            if (result.data.correct) {
                toast.success(`🎉 Correct! You earned ${selectedChallenge.points} points!`);
                setFlagInput('');
                setSelectedChallenge(null);
            } else {
                toast.error('Incorrect flag. Try again!');
            }
        } catch (error) {
            toast.error('Error submitting flag');
        }
    };

    if (loading) {
        return <div className="text-center text-slate-400 py-8">Loading challenges...</div>;
    }

    return (
        <div className="space-y-6">
            {/* Progress Overview */}
            <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                    <CardTitle className="text-white">Your Progress</CardTitle>
                    <CardDescription>Complete challenges to earn points</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-300">Completed: 0 / {challenges.length}</span>
                            <span className="text-slate-300">Points: 0 / {challenges.reduce((sum, c) => sum + c.points, 0)}</span>
                        </div>
                        <Progress value={0} className="h-2" />
                    </div>
                </CardContent>
            </Card>

            {/* Challenges List */}
            <div className="space-y-4">
                {challenges.map((challenge) => (
                    <Card key={challenge.id} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <CardTitle className="text-white">Level {challenge.level}: {challenge.title}</CardTitle>
                                        <Badge variant="outline">{challenge.points} pts</Badge>
                                    </div>
                                    <CardDescription className="text-slate-400">
                                        {challenge.description}
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        onClick={() => setSelectedChallenge(challenge)}
                                        className="bg-blue-600 hover:bg-blue-700"
                                    >
                                        Start Challenge
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="bg-slate-800 border-slate-700 text-white">
                                    <DialogHeader>
                                        <DialogTitle>Level {challenge.level}: {challenge.title}</DialogTitle>
                                        <DialogDescription className="text-slate-400">
                                            {challenge.description}
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                        <div className="bg-slate-900/50 p-4 rounded border border-slate-700">
                                            <p className="text-sm text-slate-300 mb-2">🎯 Objective:</p>
                                            <p className="text-sm text-slate-400">{challenge.description}</p>
                                        </div>

                                        {challenge.hints && challenge.hints.length > 0 && (
                                            <div>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => setShowHint(!showHint)}
                                                    className="mb-2"
                                                >
                                                    {showHint ? 'Hide Hint' : 'Show Hint 💡'}
                                                </Button>
                                                {showHint && (
                                                    <div className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded">
                                                        <p className="text-sm text-yellow-300">{challenge.hints[0]}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        <div className="space-y-2">
                                            <label className="text-sm text-slate-300">Submit Flag:</label>
                                            <Input
                                                placeholder="FLAG{...}"
                                                value={flagInput}
                                                onChange={(e) => setFlagInput(e.target.value)}
                                                className="bg-slate-900/50 border-slate-600"
                                                onKeyDown={(e) => e.key === 'Enter' && handleSubmitFlag()}
                                            />
                                            <Button
                                                onClick={handleSubmitFlag}
                                                className="w-full bg-green-600 hover:bg-green-700"
                                            >
                                                Submit Flag 🚩
                                            </Button>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
