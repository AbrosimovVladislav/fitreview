import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';

// POST /admin/public/submitReview?reviewId=...
export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const reviewId = Number(searchParams.get('reviewId'));
  if (!reviewId) return NextResponse.json({ error: 'Missing reviewId' }, { status: 400 });
  const { error } = await sb.from('review_status').insert({
    review_id: reviewId,
    value: 'ReviewResults',
    date: new Date().toISOString(),
  });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return new NextResponse(null, { status: 200 });
}
