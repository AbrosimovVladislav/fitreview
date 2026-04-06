import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';
import { verifyRequest, unauthorized } from '@/lib/auth';

// GET /review/:reviewId — ReviewDetailsDto
export async function GET(req: NextRequest, { params }: { params: Promise<{ reviewId: string }> }) {
  const user = await verifyRequest(req);
  if (!user) return unauthorized();
  const { reviewId } = await params;
  const id = Number(reviewId);

  const { data: review } = await sb.from('review').select('*').eq('id', id).maybeSingle();
  if (!review) return NextResponse.json(null, { status: 404 });

  const [{ data: frUser }, { data: bodySegments }, { data: resultsItems }, { data: answers }] = await Promise.all([
    sb.from('fr_user').select('*').eq('id', review.fr_user_id).maybeSingle(),
    sb.from('body_segment').select('*').eq('review_id', id).order('id'),
    sb.from('review_results_item').select('*').eq('review_id', id).order('id'),
    sb
      .from('answer')
      .select('value, question:question_id(title)')
      .eq('review_id', id),
  ]);

  const stripQuotes = (s?: string | null) => (s ?? '').replace(/"/g, '');
  const weight = answers?.find((a: any) => a.question?.title === 'Weight')?.value;
  const age = answers?.find((a: any) => a.question?.title === 'Age')?.value;

  const userData = {
    weight: weight ? Number(stripQuotes(weight)) : null,
    age: age ? Number(stripQuotes(age)) : null,
    fatIndex: review.fat_index ? Number(stripQuotes(review.fat_index)) : null,
  };

  // Camel-case conversion to match old DTO shape
  const camelFrUser = frUser && {
    id: frUser.id,
    name: frUser.name,
    email: frUser.email,
    firebaseId: frUser.firebase_id,
  };
  const camelBodySegments = (bodySegments ?? []).map((b: any) => ({
    id: b.id,
    name: b.name,
    title: b.title,
    segmentGroup: b.segment_group,
    estimation: b.estimation,
    userImage: b.user_image,
    diagramImage: b.diagram_image,
    description: b.description,
  }));
  const camelResults = (resultsItems ?? []).map((r: any) => ({
    id: r.id,
    title: r.title,
    description: r.description,
    estimation: r.estimation,
    iconType: r.icon_type,
    type: r.type,
  }));

  return NextResponse.json({
    id: review.id,
    date: review.date,
    estimation: review.estimation,
    userData,
    frUser: camelFrUser,
    bodySegments: camelBodySegments,
    reviewResultsItems: camelResults,
  });
}
