import { NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';

function randomCode(): string {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

export async function POST() {
  const rows = Array.from({ length: 10 }, () => ({
    code: randomCode(),
    is_active: true,
    created_at: new Date().toISOString(),
  }));
  const { data, error } = await sb.from('passcode').insert(rows).select();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
