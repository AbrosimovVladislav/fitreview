import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';
import { verifyRequest, unauthorized } from '@/lib/auth';

// POST /review — create a new review for the authed user, return its id (bigint serialized as number)
export async function POST(req: NextRequest) {
  const user = await verifyRequest(req);
  if (!user) return unauthorized();

  const { data, error } = await sb
    .from('review')
    .insert({ fr_user_id: user.frUserId, date: new Date().toISOString() })
    .select('id')
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Create initial status
  await sb.from('review_status').insert({
    review_id: data.id,
    value: 'Survey',
    date: new Date().toISOString(),
  });

  return NextResponse.json(data.id);
}
