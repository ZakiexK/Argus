import { NextRequest, NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
    try {
        const supabase = createRouteHandlerClient({ cookies });
        const body = await request.json();

        const { module_slug, lesson_slug, completed } = body;

        // Verify user is authenticated
        const {
            data: { user },
            error: authError,
        } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Check if progress entry exists
        const { data: existing } = await supabase
            .from('lesson_progress')
            .select('*')
            .eq('user_id', user.id)
            .eq('module_slug', module_slug)
            .eq('lesson_slug', lesson_slug)
            .single();

        if (existing) {
            // Update existing progress
            const { data, error } = await supabase
                .from('lesson_progress')
                .update({
                    completed,
                    completed_at: completed ? new Date().toISOString() : null,
                })
                .eq('id', existing.id)
                .select()
                .single();

            if (error) {
                console.error('Error updating progress:', error);
                return NextResponse.json({ error: 'Failed to update progress' }, { status: 500 });
            }

            return NextResponse.json({ success: true, data });
        }

        // Create new progress entry
        const { data, error } = await supabase
            .from('lesson_progress')
            .insert({
                user_id: user.id,
                module_slug,
                lesson_slug,
                completed,
                completed_at: completed ? new Date().toISOString() : null,
            })
            .select()
            .single();

        if (error) {
            console.error('Error creating progress:', error);
            return NextResponse.json({ error: 'Failed to create progress' }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Progress update error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// GET endpoint to fetch user's progress
export async function GET(request: NextRequest) {
    try {
        const supabase = createRouteHandlerClient({ cookies });

        // Verify user is authenticated
        const {
            data: { user },
            error: authError,
        } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Get all progress for the user
        const { data, error } = await supabase
            .from('lesson_progress')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching progress:', error);
            return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Progress fetch error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
