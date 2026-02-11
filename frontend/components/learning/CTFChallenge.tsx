'use client';

import { useState } from 'react';

interface CTFChallengeProps {
    question: string;
    answer: string;
    points: number;
    hint?: string;
    type?: 'text' | 'multiple-choice';
    options?: string[];
}

export default function CTFChallenge({
    question,
    answer,
    points,
    hint,
    type = 'text',
    options,
}: CTFChallengeProps) {
    const [userAnswer, setUserAnswer] = useState('');
    const [showHint, setShowHint] = useState(false);
    const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
    const [attempts, setAttempts] = useState(0);

    const handleSubmit = () => {
        setAttempts(attempts + 1);
        if (userAnswer.trim().toLowerCase() === answer.toLowerCase()) {
            setStatus('correct');
        } else {
            setStatus('incorrect');
        }
    };

    const handleReset = () => {
        setUserAnswer('');
        setStatus('idle');
        setShowHint(false);
    };

    return (
        <div className="bg-gradient-to-br from-[#2E2360] to-[#1e163d] rounded-xl border border-[#4B70F5]/30 p-6 shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-yellow-500 text-xl">emoji_events</span>
                    CTF Challenge
                </h4>
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full border border-yellow-500/30 font-bold">
                    {points} points
                </span>
            </div>

            {/* Question */}
            <p className="text-slate-300 text-sm leading-relaxed mb-4">{question}</p>

            {/* Input or Options */}
            {status !== 'correct' && (
                <div className="space-y-3">
                    {type === 'text' ? (
                        <input
                            className="w-full bg-[#111218] border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white font-mono focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent outline-none transition-all placeholder-slate-500"
                            placeholder="Enter your answer..."
                            type="text"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                        />
                    ) : (
                        <div className="space-y-2">
                            {options?.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => setUserAnswer(option)}
                                    className={`
                    w-full text-left px-4 py-3 rounded-lg border transition-all text-sm
                    ${userAnswer === option
                                            ? 'bg-[#4C3BCF]/20 border-[#4C3BCF] text-white'
                                            : 'bg-[#111218] border-slate-700 text-slate-300 hover:border-slate-600'
                                        }
                  `}
                                >
                                    {String.fromCharCode(97 + index)}) {option}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Hint Button */}
                    {hint && !showHint && (
                        <button
                            onClick={() => setShowHint(true)}
                            className="text-xs text-[#3DC2EC] hover:text-white transition-colors flex items-center gap-1"
                        >
                            <span className="material-symbols-outlined text-[14px]">lightbulb</span>
                            Show Hint
                        </button>
                    )}

                    {/* Hint Display */}
                    {showHint && hint && (
                        <div className="flex items-start gap-2 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                            <span className="material-symbols-outlined text-blue-400 text-sm mt-0.5">info</span>
                            <p className="text-xs text-blue-200">{hint}</p>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        disabled={!userAnswer}
                        className="w-full bg-[#4C3BCF] hover:bg-[#4C3BCF]/90 disabled:bg-slate-700 disabled:cursor-not-allowed text-white text-sm px-4 py-2.5 rounded-lg transition-colors font-medium"
                    >
                        Submit Answer
                    </button>
                </div>
            )}

            {/* Feedback */}
            {status === 'correct' && (
                <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <span className="material-symbols-outlined text-green-400 text-xl">check_circle</span>
                    <div className="flex-1">
                        <h5 className="text-green-400 font-bold text-sm mb-1">Correct! 🎉</h5>
                        <p className="text-green-200 text-xs">
                            You've earned <strong>{points} points</strong>. Great job!
                        </p>
                    </div>
                    <button
                        onClick={handleReset}
                        className="text-xs text-green-400 hover:text-green-300 transition-colors"
                    >
                        Reset
                    </button>
                </div>
            )}

            {status === 'incorrect' && (
                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg mt-3">
                    <span className="material-symbols-outlined text-red-400 text-xl">cancel</span>
                    <div className="flex-1">
                        <h5 className="text-red-400 font-bold text-sm mb-1">Not quite right</h5>
                        <p className="text-red-200 text-xs">
                            {attempts >= 3 ? `The correct answer is: ${answer}` : 'Try again!'}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
