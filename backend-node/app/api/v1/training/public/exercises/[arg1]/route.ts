import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';

// GET /training/public/exercises/:trainingId — returns exercises of a training
export async function GET(_req: NextRequest, { params }: { params: Promise<{ arg1: string }> }) {
  const { arg1 } = await params;
  const trainingId = Number(arg1);
  if (!Number.isFinite(trainingId)) {
    return NextResponse.json({ error: 'Invalid trainingId' }, { status: 400 });
  }
  const { data, error } = await sb
    .from('training_exercise')
    .select('exercise:exercise_id(*)')
    .eq('training_id', trainingId);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  const exercises = (data ?? []).map((row: any) => row.exercise).filter(Boolean);
  return NextResponse.json(exercises);
}
