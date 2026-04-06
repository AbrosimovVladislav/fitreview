import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';
import { verifyRequest, unauthorized } from '@/lib/auth';

// POST /review/status  body: { reviewId, status }
export async function POST(req: NextRequest) {
  const user = await verifyRequest(req);
  if (!user) return unauthorized();
  const body = await req.json();
  const reviewId = Number(body?.reviewId);
  const status = body?.status;
  if (!reviewId || !status) {
    return NextResponse.json({ error: 'Missing reviewId or status' }, { status: 400 });
  }
  const { error } = await sb.from('review_status').insert({
    review_id: reviewId,
    value: status,
    date: new Date().toISOString(),
  });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return new NextResponse(null, { status: 200 });
}
