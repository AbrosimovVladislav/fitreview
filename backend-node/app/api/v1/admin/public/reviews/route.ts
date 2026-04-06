import { NextResponse } from 'next/server';
import { sb } from '@/lib/supabase';

// GET /admin/public/reviews — list of AdminShortReviewDto
export async function GET() {
  const { data: reviews, error } = await sb
    .from('review')
    .select('id, date, fr_user:fr_user_id(name, email)')
    .order('id', { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const result = await Promise.all(
    (reviews ?? []).map(async (r: any) => {
      const { data: status } = await sb
        .from('review_status')
        .select('value')
        .eq('review_id', r.id)
        .order('id', { ascending: false })
        .limit(1)
        .maybeSingle();
      return {
        id: String(r.id),
        name: r.fr_user?.name ?? null,
        email: r.fr_user?.email ?? null,
        status: status?.value ?? null,
        date: r.date,
      };
    })
  );
  return NextResponse.json(result);
}
