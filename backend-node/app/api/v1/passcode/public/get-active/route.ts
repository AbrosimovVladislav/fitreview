import { NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';

export async function GET() {
  const { data } = await sb
    .from('passcode')
    .select('*')
    .eq('is_active', true)
    .order('id', { ascending: false })
    .limit(1)
    .maybeSingle();
  return NextResponse.json(data);
}
