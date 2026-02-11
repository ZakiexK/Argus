'use client';

import SettingsSidebar from '@/components/SettingsSidebar';

export default function GeneralSettings() {
    return (
        <div className="flex-1 overflow-y-auto bg-[#0b0c15] p-8">
            <div className="max-w-[1400px] mx-auto flex gap-8">
                {/* Settings Sidebar */}
                <SettingsSidebar />

                {/* Settings Content */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* Page Header */}
                    <div>
                        <h1 className="text-4xl font-black text-white tracking-tight mb-2">Account Settings</h1>
                        <p className="text-gray-400 text-base">
                            Manage your profile, security preferences, and lab progress.
                        </p>
                    </div>

                    {/* Public Profile Card */}
                    <div className="bg-[#2E2360] rounded-xl p-6 border border-[#4B70F5]/20">
                        <h2 className="text-xl font-bold text-white mb-6">Public Profile</h2>
                        <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
                            {/* Avatar */}
                            <div className="relative group">
                                <div
                                    className="bg-center bg-no-repeat bg-cover rounded-full w-24 h-24 border-4 border-[#402E7A]"
                                    style={{
                                        backgroundImage:
                                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuEtNBvyYzEfNosLnfW-st6EEYzCBpGjv1h5vwU9R5xLTwi2cATK2OKW7ggX3H0RKDjrYamJSKsbTIPWbX8_qma0557psseOAKhtmnM9NT_mXBw27EDcnMg69ChBysJ3QPUtlj6-XLFFlcWCkv5AsE0GEIKq1kQzpnwTThclYfvFmlxTnH0IynVQpr_yZIkF_DEALc8WpMlznFoMTT2HrePTCFwMIibqIdzt8LCu-1ZME7W-_S1H8tuM1vn7S1JufodFkF3a05msK7")',
                                    }}
                                />
                                <button
                                    className="absolute bottom-0 right-0 bg-[#4C3BCF] text-white rounded-full p-1.5 shadow-lg hover:bg-[#4C3BCF]/90 hover:scale-105 transition-all"
                                    title="Change Avatar"
                                >
                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                </button>
                            </div>

                            {/* Form Fields */}
                            <div className="flex-1 w-full space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Username */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                            Username
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500 text-[20px]">
                                                alternate_email
                                            </span>
                                            <input
                                                className="w-full bg-[#1e163d] border border-[#4B70F5]/30 rounded-lg py-2.5 pl-10 pr-3 focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent outline-none transition-all text-sm font-medium text-white"
                                                type="text"
                                                defaultValue="Agent 47"
                                            />
                                        </div>
                                    </div>

                                    {/* Rank Title (Disabled) */}
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                            Rank Title
                                        </label>
                                        <div className="w-full bg-[#1e163d]/50 border border-[#4B70F5]/20 rounded-lg py-2.5 px-3 text-sm font-medium text-gray-500 opacity-75 cursor-not-allowed">
                                            Script Kiddie
                                        </div>
                                    </div>
                                </div>

                                {/* Bio */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Bio</label>
                                    <textarea
                                        className="w-full bg-[#1e163d] border border-[#4B70F5]/30 rounded-lg py-2.5 px-3 focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent outline-none transition-all text-sm font-medium resize-none text-white"
                                        placeholder="Tell us about yourself..."
                                        rows={3}
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-3 pt-4 border-t border-[#4B70F5]/20">
                            <button className="px-5 py-2 rounded-lg border border-[#4B70F5]/30 text-sm font-bold text-gray-400 hover:bg-[#2E2360] hover:text-white transition-colors">
                                Cancel
                            </button>
                            <button className="px-5 py-2 rounded-lg bg-[#4C3BCF] text-white text-sm font-bold shadow-lg shadow-[#4C3BCF]/20 hover:shadow-[#4C3BCF]/40 hover:bg-[#4C3BCF]/90 transition-all">
                                Save Changes
                            </button>
                        </div>
                    </div>

                    {/* Contact Info Card */}
                    <div className="bg-[#2E2360] rounded-xl p-6 border border-[#4B70F5]/20">
                        <h2 className="text-xl font-bold text-white mb-6">Contact Info</h2>
                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                    Email Address
                                </label>
                                <div className="flex gap-3">
                                    <div className="relative flex-1">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-500 text-[20px]">
                                            mail
                                        </span>
                                        <input
                                            className="w-full bg-[#1e163d] border border-[#4B70F5]/30 rounded-lg py-2.5 pl-10 pr-3 focus:ring-2 focus:ring-[#4C3BCF] focus:border-transparent outline-none transition-all text-sm font-medium text-white"
                                            type="email"
                                            defaultValue="agent47@argus.io"
                                        />
                                    </div>
                                    <button className="shrink-0 px-4 py-2.5 rounded-lg bg-[#2E2360] border border-[#4B70F5]/30 text-sm font-bold text-gray-400 hover:bg-[#4C3BCF]/10 hover:text-white transition-all">
                                        Verify
                                    </button>
                                </div>
                                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] text-green-500">check_circle</span>
                                    Your email is verified.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
