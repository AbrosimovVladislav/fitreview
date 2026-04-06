import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';

// POST /auth/login with Authorization: Bearer <access_token>
// Returns existing fr_user, or auto-creates one if missing (useful when migrating old users).
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
  const { data: frUser } = await sb
    .from('fr_user')
    .select('*')
    .eq('auth_user_id', user.id)
    .maybeSingle();
  if (frUser) return NextResponse.json(frUser);

  // Auto-create missing row
  const name = (user.user_metadata?.name as string | undefined) ?? null;
  const { data: inserted, error: insErr } = await sb
    .from('fr_user')
    .insert({ auth_user_id: user.id, email: user.email, name })
    .select()
    .single();
  if (insErr) return NextResponse.json({ error: insErr.message }, { status: 500 });
  return NextResponse.json(inserted);
}
