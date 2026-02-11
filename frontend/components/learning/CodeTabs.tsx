'use client';

import { useState } from 'react';

interface CodeExample {
    language: string;
    code: string;
    filename?: string;
}

interface CodeTabsProps {
    examples: CodeExample[];
    title?: string;
}

export default function CodeTabs({ examples, title }: CodeTabsProps) {
    const [activeTab, setActiveTab] = useState(0);

    const languageIcons: { [key: string]: string } = {
        python: '🐍',
        javascript: '🟨',
        bash: '💻',
        curl: '🌐',
    };

    const languageLabels: { [key: string]: string } = {
        python: 'Python',
        javascript: 'Node.js',
        bash: 'Bash',
        curl: 'cURL',
    };

    const copyToClipboard = (code: string) => {
        navigator.clipboard.writeText(code);
        // Could add a toast notification here
    };

    return (
        <div className="bg-[#1e2029] rounded-xl border border-slate-800 overflow-hidden">
            {title && (
                <div className="px-6 pt-5 pb-3">
                    <h3 className="text-white font-bold text-lg">{title}</h3>
                </div>
            )}

            {/* Tab Headers */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#151720] border-b border-slate-800">
                {examples.map((example, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
              ${activeTab === index
                                ? 'bg-[#4C3BCF] text-white shadow-lg shadow-[#4C3BCF]/20'
                                : 'bg-transparent text-gray-400 hover:text-white hover:bg-slate-800/50'
                            }
            `}
                    >
                        <span className="text-base">{languageIcons[example.language] || '📄'}</span>
                        <span>{languageLabels[example.language] || example.language}</span>
                    </button>
                ))}
            </div>

            {/* Code Display */}
            <div className="relative">
                <div className="absolute top-3 right-3 z-10">
                    <button
                        onClick={() => copyToClipboard(examples[activeTab].code)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors backdrop-blur-sm"
                    >
                        <span className="material-symbols-outlined text-[16px]">content_copy</span>
                        Copy
                    </button>
                </div>

                {examples[activeTab].filename && (
                    <div className="px-6 pt-4 pb-2">
                        <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
                            <span className="material-symbols-outlined text-[14px]">description</span>
                            {examples[activeTab].filename}
                        </div>
                    </div>
                )}

                <div className="px-6 pb-6 pt-2">
                    <pre className="bg-[#111218] rounded-lg border border-slate-800 p-4 overflow-x-auto">
                        <code className="text-sm font-mono text-green-400 leading-relaxed">
                            {examples[activeTab].code}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}
