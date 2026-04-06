import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';

// Mobile calls POST /auth/register after supabase.auth.signUp succeeded.
// Authorization: Bearer <access_token> from the new session.
// Body: { name?: string } (optional display name override).
export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization');
  if (!auth?.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Missing token' }, { status: 401 });
  }
  const token = auth.slice(7);
  const { data: userRes, error } = await sb.auth.getUser(token);
  if (error || !userRes.user) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
  const user = userRes.user;
  const body = await req.json().catch(() => ({}));
  const name = body?.name ?? (user.user_metadata?.name as string | undefined) ?? null;

  const { data: existing } = await sb
    .from('fr_user')
    .select('id')
    .eq('auth_user_id', user.id)
    .maybeSingle();
  if (existing) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }

  const { data: inserted, error: insErr } = await sb
    .from('fr_user')
    .insert({ auth_user_id: user.id, email: user.email, name })
    .select()
    .single();
  if (insErr) {
    return NextResponse.json({ error: insErr.message }, { status: 500 });
  }
  return NextResponse.json(inserted);
}
