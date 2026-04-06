import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';
import { verifyRequest, unauthorized } from '@/lib/auth';

// GET /review/id — last review id for the authed user, as a string (or null)
export async function GET(req: NextRequest) {
  const user = await verifyRequest(req);
  if (!user) return unauthorized();

  const { data, error } = await sb
    .from('review')
    .select('id')
    .eq('fr_user_id', user.frUserId)
    .order('id', { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data ? String(data.id) : null);
}
