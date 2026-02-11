'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const { user, signOut, loading } = useAuth();

    const navItems = [
        {
            name: 'Dashboard',
            href: '/dashboard',
            icon: 'dashboard',
            enabled: true,
        },
        {
            name: 'Learning Paths',
            href: '/learning-paths',
            icon: 'school',
            enabled: true,
        },
        {
            name: 'CTF Challenges',
            href: '/ctf-challenges',
            icon: 'flag',
            enabled: false,
        },
        {
            name: 'Leaderboard',
            href: '/leaderboard',
            icon: 'leaderboard',
            enabled: false,
        },
        {
            name: 'Profile',
            href: '/profile',
            icon: 'person',
            enabled: false,
        },
        {
            name: 'Settings',
            href: '/settings',
            icon: 'settings',
            enabled: true,
        },
    ];

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                <span className="material-symbols-outlined">menu</span>
            </button>

            {/* Sidebar */}
            <aside
                className={`
          fixed md:relative h-screen w-64 bg-[#1e163d] border-r border-[#4B70F5]/20 
          flex-shrink-0 transition-transform duration-300 z-40
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
            >
                <div className="flex flex-col h-full">
                    {/* Brand */}
                    <div className="h-20 flex items-center justify-start px-6 border-b border-[#4B70F5]/10">
                        <div className="flex items-center gap-3">
                            <div
                                className="bg-center bg-no-repeat bg-cover rounded-full size-10 shadow-[0_0_15px_rgba(61,194,236,0.3)]"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgWBCTP_TJrDv-jRoLVdixbfD-VkF5MNVuj5qIrhAkKDfOX9InhaxQHBD8xeBws3yDWggrgtnGuZ38R_Q99b4jcoEyWgL-cfFnvQuI2RMJ22RG2E10wWqhkT9mOz8e_25JK-wciYVRah6AZ0SOeLF58z5KFq-GMORcpYQXpLHBAboWri1YcLHAjYXAMIH4iYw-2KWP3iIPdtd9pK0bPtLfbRNtlNGrwh2dioJcOOhzB93kS1fYBrYedO5dqolhPbyg53UHDyhD4gWF")',
                                }}
                            />
                            <div className="flex flex-col">
                                <h1 className="text-white text-lg font-bold tracking-wide">Argus</h1>
                                <p className="text-[#3DC2EC] text-xs font-medium">v2.0.4</p>
                            </div>
                        </div>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex-1 overflow-y-auto py-6 flex flex-col gap-2 px-3">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

                            if (!item.enabled) {
                                return (
                                    <div
                                        key={item.name}
                                        className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 cursor-not-allowed opacity-50"
                                    >
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                        <span className="text-sm font-medium">{item.name}</span>
                                        <span className="ml-auto text-xs bg-gray-700 px-2 py-0.5 rounded">Soon</span>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`
                    flex items-center gap-3 px-3 py-3 rounded-xl transition-colors group
                    ${isActive
                                            ? 'bg-[#4C3BCF]/20 text-white'
                                            : 'text-gray-400 hover:text-white hover:bg-[#4B70F5]/10'
                                        }
                  `}
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    <span
                                        className={`material-symbols-outlined transition-colors ${isActive ? 'text-[#3DC2EC]' : 'group-hover:text-[#3DC2EC]'
                                            }`}
                                    >
                                        {item.icon}
                                    </span>
                                    <span className="text-sm font-medium">{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Bottom User Section */}
                    <div className="p-4 border-t border-[#4B70F5]/10">
                        {loading ? (
                            <div className="flex items-center justify-center py-3">
                                <span className="material-symbols-outlined animate-spin text-slate-400">progress_activity</span>
                            </div>
                        ) : user ? (
                            <div className="space-y-2">
                                <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#4B70F5]/10">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-bold text-white leading-none truncate">{user.email?.split('@')[0] || 'User'}</p>
                                        <p className="text-xs text-[#3DC2EC] font-medium mt-1">Level 1 • Beginner</p>
                                    </div>
                                    <div className="size-10 rounded-full bg-[#4C3BCF] flex items-center justify-center text-white font-bold text-sm ring-2 ring-[#4B70F5]/30">
                                        {(user.email?.charAt(0) || 'U').toUpperCase()}
                                    </div>
                                </div>
                                <button
                                    onClick={async () => {
                                        await signOut();
                                        router.push('/');
                                    }}
                                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-sm">logout</span>
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <Link href="/auth/login">
                                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#4C3BCF] hover:bg-[#4C3BCF]/90 text-white font-medium transition-colors shadow-lg shadow-[#4C3BCF]/25">
                                    <span className="material-symbols-outlined">login</span>
                                    Sign In
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}
        </>
    );
};

export default Sidebar;
