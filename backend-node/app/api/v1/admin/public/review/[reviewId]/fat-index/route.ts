import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';

export async function PUT(req: NextRequest, { params }: { params: Promise<{ reviewId: string }> }) {
  const { reviewId } = await params;
  const body = await req.json();
  const { error } = await sb
    .from('review')
    .update({ fat_index: body.fatIndex })
    .eq('id', Number(reviewId));
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return new NextResponse(null, { status: 200 });
}
