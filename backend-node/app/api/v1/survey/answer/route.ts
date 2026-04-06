import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';
import { verifyRequest, unauthorized } from '@/lib/auth';

// POST /survey/answer  body: { reviewId, questionId, answerValue }
// Upsert-by (review_id, question_id)
export async function POST(req: NextRequest) {
  const user = await verifyRequest(req);
  if (!user) return unauthorized();
  const body = await req.json();
  const reviewId = Number(body?.reviewId);
  const questionId = Number(body?.questionId);
  const answerValue = String(body?.answerValue ?? '');
  if (!reviewId || !questionId) {
    return NextResponse.json({ error: 'Missing reviewId/questionId' }, { status: 400 });
  }

  const { data: existing } = await sb
    .from('answer')
    .select('id')
    .eq('review_id', reviewId)
    .eq('question_id', questionId)
    .maybeSingle();

  if (existing) {
    const { error } = await sb
      .from('answer')
      .update({ value: answerValue, date: new Date().toISOString() })
      .eq('id', existing.id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  } else {
    const { error } = await sb.from('answer').insert({
      review_id: reviewId,
      question_id: questionId,
      value: answerValue,
      date: new Date().toISOString(),
    });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return new NextResponse(null, { status: 200 });
}
