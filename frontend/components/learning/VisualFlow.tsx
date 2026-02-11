interface FlowStep {
    icon: string;
    label: string;
    description?: string;
}

interface VisualFlowProps {
    title?: string;
    steps: FlowStep[];
    arrows?: boolean;
    direction?: 'horizontal' | 'vertical';
}

export default function VisualFlow({
    title = 'Process Flow',
    steps,
    arrows = true,
    direction = 'horizontal',
}: VisualFlowProps) {
    return (
        <div className="bg-[#1e2029] rounded-xl border border-slate-800 p-6 md:p-8 shadow-sm">
            {title && <h3 className="text-xl font-bold text-white mb-6">{title}</h3>}

            <div className="relative w-full min-h-64 bg-[#111218] rounded-lg border border-slate-800 flex items-center justify-center overflow-hidden p-8">
                {/* Grid Background */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'radial-gradient(#4c71f6 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                    }}
                ></div>

                {/* Flow Content */}
                <div
                    className={`
            flex items-center justify-center gap-6 md:gap-8 relative z-10
            ${direction === 'vertical' ? 'flex-col' : 'flex-row flex-wrap'}
          `}
                >
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-center gap-6">
                            {/* Step Card */}
                            <div className="flex flex-col items-center gap-2 text-center">
                                <div className="size-16 md:size-20 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 hover:border-[#4C3BCF]/50 transition-all group">
                                    <span className="material-symbols-outlined text-3xl md:text-4xl text-slate-400 group-hover:text-[#4C3BCF] transition-colors">
                                        {step.icon}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-xs md:text-sm font-mono text-slate-300 font-medium">
                                        {step.label}
                                    </span>
                                    {step.description && (
                                        <p className="text-[10px] text-slate-500 mt-1 max-w-[100px]">{step.description}</p>
                                    )}
                                </div>
                            </div>

                            {/* Arrow between steps (except last) */}
                            {arrows && index < steps.length - 1 && (
                                <div
                                    className={`
                    flex items-center justify-center
                    ${direction === 'vertical' ? 'rotate-90' : ''}
                  `}
                                >
                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="text-[10px] text-[#4C3BCF] font-mono bg-[#4C3BCF]/10 px-2 py-0.5 rounded whitespace-nowrap">
                                            {index + 1} → {index + 2}
                                        </span>
                                        <div className="h-0.5 w-16 md:w-20 bg-gradient-to-r from-slate-700 via-[#4C3BCF] to-slate-700"></div>
                                        <span className="material-symbols-outlined text-[#4C3BCF] text-sm animate-pulse">
                                            arrow_forward
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
