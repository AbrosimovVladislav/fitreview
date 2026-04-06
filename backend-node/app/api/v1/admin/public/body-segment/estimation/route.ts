import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { error } = await sb
    .from('body_segment')
    .update({ estimation: body.estimation })
    .eq('id', body.bodySegmentId);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return new NextResponse(null, { status: 200 });
}
