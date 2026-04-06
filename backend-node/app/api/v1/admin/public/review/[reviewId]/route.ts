import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';

// GET /admin/public/review/:reviewId → AdminReviewDetailsDto
export async function GET(_req: NextRequest, { params }: { params: Promise<{ reviewId: string }> }) {
  const { reviewId } = await params;
  const id = Number(reviewId);

  const { data: review } = await sb.from('review').select('*').eq('id', id).maybeSingle();
  if (!review) return new NextResponse(null, { status: 404 });

  const [{ data: user }, { data: status }, { data: bodySegments }, { data: results }, { data: answers }] =
    await Promise.all([
      sb.from('fr_user').select('name, email').eq('id', review.fr_user_id).maybeSingle(),
      sb
        .from('review_status')
        .select('value')
        .eq('review_id', id)
        .order('id', { ascending: false })
        .limit(1)
        .maybeSingle(),
      sb.from('body_segment').select('*').eq('review_id', id).order('id'),
      sb.from('review_results_item').select('*').eq('review_id', id).order('id'),
      sb
        .from('answer')
        .select('value, question:question_id(title, type)')
        .eq('review_id', id),
    ]);

  const answerDtos =
    (answers ?? [])
      .filter((a: any) => a.question?.type !== 'PHOTO')
      .map((a: any) => ({ question: a.question?.title ?? '', answer: a.value })) ?? [];
  const photoDtos =
    (answers ?? [])
      .filter((a: any) => a.question?.type === 'PHOTO')
      .map((a: any) => ({ question: a.question?.title ?? '', answer: (a.value ?? '').replace(/"/g, '') })) ?? [];

  const bodySegmentDtos = (bodySegments ?? []).map((b: any) => ({
    id: b.id,
    name: b.name,
    title: b.title,
    segmentGroup: b.segment_group,
    userImage: b.user_image,
    diagramImage: b.diagram_image,
    description: b.description,
    estimation: b.estimation,
  }));

  const resultsDtos = (results ?? []).map((r: any) => ({
    id: r.id,
    reviewId: id,
    title: r.title,
    description: r.description,
    estimation: r.estimation,
    iconType: r.icon_type,
    type: r.type,
  }));

  return NextResponse.json({
    userName: user?.name ?? null,
    userEmail: user?.email ?? null,
    status: status?.value ?? null,
    creationDate: review.date,
    estimation: review.estimation,
    fatIndex: review.fat_index,
    answers: answerDtos,
    photos: photoDtos,
    bodySegments: bodySegmentDtos,
    reviewResultsItems: resultsDtos,
  });
}
