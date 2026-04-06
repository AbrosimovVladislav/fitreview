import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';
import { verifyRequest, unauthorized } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const user = await verifyRequest(req);
  if (!user) return unauthorized();

  const { data, error } = await sb
    .from('user_training')
    .select('training:training_id(id, title, russian_title, thumbnail, description)')
    .eq('user_id', user.frUserId);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  const trainings = (data ?? []).map((row: any) => row.training).filter(Boolean);
  return NextResponse.json(trainings);
}
