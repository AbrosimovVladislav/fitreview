import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data, error } = await sb.from('exercise').select('*').eq('id', Number(id)).maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json(null, { status: 404 });
  return NextResponse.json(data);
}
