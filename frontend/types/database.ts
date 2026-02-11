// Database types for Supabase tables
export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string;
                    username: string;
                    display_name: string | null;
                    avatar_url: string | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id: string;
                    username: string;
                    display_name?: string | null;
                    avatar_url?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    username?: string;
                    display_name?: string | null;
                    avatar_url?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            lesson_progress: {
                Row: {
                    id: string;
                    user_id: string;
                    module_slug: string;
                    lesson_slug: string;
                    completed: boolean;
                    completed_at: string | null;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    user_id: string;
                    module_slug: string;
                    lesson_slug: string;
                    completed?: boolean;
                    completed_at?: string | null;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    user_id?: string;
                    module_slug?: string;
                    lesson_slug?: string;
                    completed?: boolean;
                    completed_at?: string | null;
                    created_at?: string;
                };
            };
            ctf_submissions: {
                Row: {
                    id: string;
                    user_id: string;
                    module_slug: string;
                    lesson_slug: string;
                    challenge_id: string;
                    answer: string;
                    correct: boolean;
                    points_earned: number;
                    submitted_at: string;
                };
                Insert: {
                    id?: string;
                    user_id: string;
                    module_slug: string;
                    lesson_slug: string;
                    challenge_id: string;
                    answer: string;
                    correct: boolean;
                    points_earned?: number;
                    submitted_at?: string;
                };
                Update: {
                    id?: string;
                    user_id?: string;
                    module_slug?: string;
                    lesson_slug?: string;
                    challenge_id?: string;
                    answer?: string;
                    correct?: boolean;
                    points_earned?: number;
                    submitted_at?: string;
                };
            };
            user_achievements: {
                Row: {
                    id: string;
                    user_id: string;
                    achievement_id: string;
                    module_slug: string | null;
                    earned_at: string;
                };
                Insert: {
                    id?: string;
                    user_id: string;
                    achievement_id: string;
                    module_slug?: string | null;
                    earned_at?: string;
                };
                Update: {
                    id?: string;
                    user_id?: string;
                    achievement_id?: string;
                    module_slug?: string | null;
                    earned_at?: string;
                };
            };
            user_stats: {
                Row: {
                    user_id: string;
                    total_points: number;
                    modules_completed: number;
                    current_streak: number;
                    longest_streak: number;
                    last_activity_date: string | null;
                    updated_at: string;
                };
                Insert: {
                    user_id: string;
                    total_points?: number;
                    modules_completed?: number;
                    current_streak?: number;
                    longest_streak?: number;
                    last_activity_date?: string | null;
                    updated_at?: string;
                };
                Update: {
                    user_id?: string;
                    total_points?: number;
                    modules_completed?: number;
                    current_streak?: number;
                    longest_streak?: number;
                    last_activity_date?: string | null;
                    updated_at?: string;
                };
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
    };
}
