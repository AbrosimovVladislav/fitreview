import { NextRequest, NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';

// POST /admin/public/review/results-item  body: AdminReviewResultsItemDto (id optional → update, else insert)
export async function POST(req: NextRequest) {
  const body = await req.json();
  const row = {
    title: body.title,
    description: body.description,
    estimation: body.estimation ?? 0,
    icon_type: body.iconType,
    type: body.type,
    review_id: body.reviewId,
  };
  if (body.id) {
    const { data, error } = await sb
      .from('review_results_item')
      .update(row)
      .eq('id', body.id)
      .select()
      .single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({
      id: data.id,
      reviewId: data.review_id,
      title: data.title,
      description: data.description,
      estimation: data.estimation,
      iconType: data.icon_type,
      type: data.type,
    });
  } else {
    const { data, error } = await sb
      .from('review_results_item')
      .insert(row)
      .select()
      .single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({
      id: data.id,
      reviewId: data.review_id,
      title: data.title,
      description: data.description,
      estimation: data.estimation,
      iconType: data.icon_type,
      type: data.type,
    });
  }
}
