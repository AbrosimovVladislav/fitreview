import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';
import { verifyRequest, unauthorized } from '@/lib/auth';

// POST /passcode/verify  body: { passcode }
export async function POST(req: NextRequest) {
  const user = await verifyRequest(req);
  if (!user) return unauthorized();
  const body = await req.json();
  const code: string | undefined = body?.passcode;
  if (!code) return NextResponse.json({ error: 'Missing passcode' }, { status: 400 });

  const { data: p } = await sb
    .from('passcode')
    .select('*')
    .eq('code', code)
    .eq('is_active', true)
    .maybeSingle();
  if (!p) return NextResponse.json({ error: 'Invalid passcode' }, { status: 400 });

  const { error } = await sb
    .from('passcode')
    .update({
      is_active: false,
      activated_at: new Date().toISOString(),
      fr_user_id: user.frUserId,
    })
    .eq('id', p.id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json('Passcode successfully activated');
}
