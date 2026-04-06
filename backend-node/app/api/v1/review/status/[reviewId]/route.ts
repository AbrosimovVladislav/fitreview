import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';
import { verifyRequest, unauthorized } from '@/lib/auth';

// GET /review/status/:reviewId — last status row for a review
export async function GET(req: NextRequest, { params }: { params: Promise<{ reviewId: string }> }) {
  const user = await verifyRequest(req);
  if (!user) return unauthorized();
  const { reviewId } = await params;
  const { data, error } = await sb
    .from('review_status')
    .select('*')
    .eq('review_id', Number(reviewId))
    .order('id', { ascending: false })
    .limit(1)
    .maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json(null, { status: 404 });
  return NextResponse.json({
    id: data.id,
    value: data.value,
    date: data.date,
  });
}
