'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SettingsSidebar() {
    const pathname = usePathname();

    const settingsNav = [
        {
            name: 'General',
            href: '/settings/general',
            icon: 'person',
        },
        {
            name: 'Security',
            href: '/settings/security',
            icon: 'lock',
            disabled: true,
        },
        {
            name: ' Notifications',
            href: '/settings/notifications',
            icon: 'notifications',
        },
        {
            name: 'Preferences',
            href: '/settings/preferences',
            icon: 'tune',
            disabled: true,
        },
    ];

    return (
        <div className="w-64 flex-shrink-0">
            <div className="sticky top-6">
                <nav className="flex flex-col space-y-1">
                    {settingsNav.map((item) => {
                        const isActive = pathname === item.href;

                        if (item.disabled) {
                            return (
                                <div
                                    key={item.name}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 cursor-not-allowed opacity-50"
                                >
                                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                    <span className="text-sm font-medium">{item.name}</span>
                                    <span className="ml-auto text-xs bg-gray-700/50 px-2 py-0.5 rounded">Soon</span>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${isActive
                                        ? 'bg-[#4C3BCF]/10 text-[#4C3BCF] font-bold'
                                        : 'text-gray-400 hover:bg-[#2E2360] hover:text-[#3DC2EC] font-medium'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                {item.name}
                            </Link>
                        );
                    })}

                    <div className="h-px bg-[#4B70F5]/10 my-2"></div>

                    <Link
                        href="/settings/danger-zone"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-500/10 font-medium text-sm transition-all opacity-50 cursor-not-allowed"
                    >
                        <span className="material-symbols-outlined text-[20px]">warning</span>
                        Danger Zone
                        <span className="ml-auto text-xs bg-gray-700/50 px-2 py-0.5 rounded">Soon</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
}
