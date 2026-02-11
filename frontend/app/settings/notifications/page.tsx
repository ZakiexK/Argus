'use client';

import { useState } from 'react';
import SettingsSidebar from '@/components/SettingsSidebar';

export default function NotificationsSettings() {
    const [ctfAnnouncements, setCtfAnnouncements] = useState(true);
    const [productUpdates, setProductUpdates] = useState(false);
    const [securityAlerts, setSecurityAlerts] = useState(true);

    return (
        <div className="flex-1 overflow-y-auto bg-[#0b0c15] p-8">
            <div className="max-w-[1400px] mx-auto flex gap-8">
                {/* Settings Sidebar */}
                <SettingsSidebar />

                {/* Settings Content */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* Page Header */}
                    <div>
                        <h1 className="text-4xl font-black text-white tracking-tight mb-2">Notifications</h1>
                        <p className="text-gray-400 text-base">
                            Manage your notification preferences and stay updated.
                        </p>
                    </div>

                    {/* Notifications Card */}
                    <div className="bg-[#2E2360] rounded-xl p-6 border border-[#4B70F5]/20">
                        <h2 className="text-xl font-bold text-white mb-6">Notification Preferences</h2>
                        <div className="space-y-5">
                            {/* CTF Announcements */}
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm text-white">CTF Announcements</span>
                                    <span className="text-xs text-gray-400">
                                        Receive updates about new challenges and events.
                                    </span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={ctfAnnouncements}
                                        onChange={(e) => setCtfAnnouncements(e.target.checked)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-[#4B70F5]/20 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#4C3BCF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4C3BCF]"></div>
                                </label>
                            </div>

                            <div className="h-px bg-[#4B70F5]/10"></div>

                            {/* Product Updates */}
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm text-white">Product Updates</span>
                                    <span className="text-xs text-gray-400">
                                        News about platform features and improvements.
                                    </span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={productUpdates}
                                        onChange={(e) => setProductUpdates(e.target.checked)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-[#4B70F5]/20 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#4C3BCF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4C3BCF]"></div>
                                </label>
                            </div>

                            <div className="h-px bg-[#4B70F5]/10"></div>

                            {/* Security Alerts (Always On) */}
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm text-white">Security Alerts</span>
                                    <span className="text-xs text-gray-400">
                                        Important notifications about your account security.
                                    </span>
                                </div>
                                <label className="relative inline-flex items-center cursor-not-allowed">
                                    <input type="checkbox" checked={securityAlerts} disabled className="sr-only peer" />
                                    <div className="w-11 h-6 bg-[#4C3BCF]/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4C3BCF]"></div>
                                </label>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-[#4C3BCF]/10 border border-[#4C3BCF]/30 rounded-lg">
                            <p className="text-sm text-[#3DC2EC] flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">info</span>
                                Security alerts cannot be disabled to ensure your account safety.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
