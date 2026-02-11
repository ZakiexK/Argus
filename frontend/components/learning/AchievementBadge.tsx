interface AchievementBadgeProps {
    icon: string;
    name: string;
    description?: string;
    earned: boolean;
    points?: number;
    size?: 'small' | 'medium' | 'large';
}

export default function AchievementBadge({
    icon,
    name,
    description,
    earned,
    points,
    size = 'medium',
}: AchievementBadgeProps) {
    const sizeClasses = {
        small: 'text-2xl',
        medium: 'text-4xl',
        large: 'text-6xl',
    };

    return (
        <div
            className={`
        group relative flex flex-col items-center gap-2 p-4 rounded-xl transition-all
        ${earned ? 'cursor-pointer hover:scale-105' : 'opacity-40 grayscale cursor-not-allowed'}
      `}
            title={description || name}
        >
            {/* Badge Icon */}
            <div
                className={`
          ${sizeClasses[size]}
          ${earned ? 'animate-pulse-slow' : ''}
        `}
            >
                {icon}
            </div>

            {/* Badge Name */}
            <div className="text-center">
                <h4
                    className={`
          text-sm font-bold
          ${earned ? 'text-white' : 'text-gray-600'}
        `}
                >
                    {name}
                </h4>
                {points && (
                    <p className="text-xs text-gray-500 mt-0.5">
                        {points} pts
                    </p>
                )}
            </div>

            {/* Tooltip on Hover (if earned) */}
            {earned && description && (
                <div className="absolute bottom-full mb-2 hidden group-hover:block z-10 w-48">
                    <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 shadow-xl">
                        <p className="text-xs text-slate-300 leading-relaxed">{description}</p>
                    </div>
                </div>
            )}

            {/* Locked Badge Overlay */}
            {!earned && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-gray-700 text-2xl">lock</span>
                </div>
            )}
        </div>
    );
}
