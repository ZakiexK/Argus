import { NextRequest, NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
    try {
        const supabase = createRouteHandlerClient({ cookies });
        const body = await request.json();

        const { module_slug, lesson_slug, challenge_id, answer } = body;

        // Verify user is authenticated
        const {
            data: { user },
            error: authError,
        } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Simple answer checking (in production, this should be more secure)
        // For now, we'll mark all submissions as correct (you can add validation logic)
        const correct = true; // TODO: Implement actual answer validation
        const points_earned = correct ? 50 : 0; // Default points

        // Check if submission already exists
        const { data: existing } = await supabase
            .from('ctf_submissions')
            .select('*')
            .eq('user_id', user.id)
            .eq('module_slug', module_slug)
            .eq('lesson_slug', lesson_slug)
            .eq('challenge_id', challenge_id)
            .single();

        if (existing) {
            // Update existing submission
            const { data, error } = await supabase
                .from('ctf_submissions')
                .update({
                    answer,
                    correct,
                    points_earned,
                    submitted_at: new Date().toISOString(),
                })
                .eq('id', existing.id)
                .select()
                .single();

            if (error) {
                console.error('Error updating submission:', error);
                return NextResponse.json({ error: 'Failed to update submission' }, { status: 500 });
            }

            // Update user stats if correct
            if (correct && !existing.correct) {
                await updateUserStats(supabase, user.id, points_earned);
            }

            return NextResponse.json({ success: true, correct, points_earned, data });
        }

        // Create new submission
        const { data, error } = await supabase
            .from('ctf_submissions')
            .insert({
                user_id: user.id,
                module_slug,
                lesson_slug,
                challenge_id,
                answer,
                correct,
                points_earned,
            })
            .select()
            .single();

        if (error) {
            console.error('Error creating submission:', error);
            return NextResponse.json({ error: 'Failed to create submission' }, { status: 500 });
        }

        // Update user stats
        if (correct) {
            await updateUserStats(supabase, user.id, points_earned);
        }

        return NextResponse.json({ success: true, correct, points_earned, data });
    } catch (error) {
        console.error('CTF submission error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

async function updateUserStats(supabase: any, userId: string, points: number) {
    // Get current stats
    const { data: stats } = await supabase
        .from('user_stats')
        .select('*')
        .eq('user_id', userId)
        .single();

    if (stats) {
        // Update existing stats
        await supabase
            .from('user_stats')
            .update({
                total_points: stats.total_points + points,
                last_activity_date: new Date().toISOString().split('T')[0],
            })
            .eq('user_id', userId);
    }
}
