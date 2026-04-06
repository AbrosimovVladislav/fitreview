import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';

// GET /training/public/exercises/:region/:subcategory
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ arg1: string; arg2: string }> }
) {
  const { arg1: region, arg2: subcategory } = await params;
  const { data, error } = await sb
    .from('exercise')
    .select('*')
    .eq('region', region.toUpperCase())
    .eq('subcategory', subcategory.toUpperCase());
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data ?? []);
}
