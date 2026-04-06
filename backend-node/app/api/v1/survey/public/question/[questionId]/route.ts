import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';

// GET /survey/public/question/:questionId — returns question + answerOptions
export async function GET(_req: NextRequest, { params }: { params: Promise<{ questionId: string }> }) {
  const { questionId } = await params;
  const id = Number(questionId);
  const { data: q, error } = await sb.from('question').select('*').eq('id', id).maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!q) return NextResponse.json(null, { status: 404 });

  const { data: opts } = await sb
    .from('answer_option')
    .select('id, title, image')
    .eq('question_id', id)
    .order('id');

  return NextResponse.json({
    id: q.id,
    type: q.type,
    title: q.title,
    value: q.value,
    description: q.description,
    placeholder: q.placeholder,
    imageExample: q.image_example,
    answerOptions: opts ?? [],
  });
}
