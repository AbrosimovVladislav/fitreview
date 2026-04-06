import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';
import { verifyRequest, unauthorized } from '@/lib/auth';

// GET /survey/answer/:reviewId/:questionId → AnswerDto { questionId, answerValue } | null
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ reviewId: string; questionId: string }> }
) {
  const user = await verifyRequest(req);
  if (!user) return unauthorized();
  const { reviewId, questionId } = await params;
  const { data, error } = await sb
    .from('answer')
    .select('value, question_id')
    .eq('review_id', Number(reviewId))
    .eq('question_id', Number(questionId))
    .maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json(null);
  return NextResponse.json({ questionId: data.question_id, answerValue: data.value });
}
