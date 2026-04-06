import { NextRequest, NextResponse } from 'next/server';
import { sb, STORAGE_BUCKET } from '@/lib/supabase';

// POST /admin/public/body-segment/image  (multipart/form-data)
// fields: bodySegmentId, reviewId, imageType, file
export async function POST(req: NextRequest) {
  const form = await req.formData();
  const bodySegmentId = Number(form.get('bodySegmentId'));
  const reviewId = Number(form.get('reviewId'));
  const imageType = String(form.get('imageType') ?? '');
  const file = form.get('file') as File | null;
  if (!bodySegmentId || !reviewId || !file) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }
  const buf = Buffer.from(await file.arrayBuffer());
  const path = `review/${reviewId}/${bodySegmentId}-${imageType}-${Date.now()}.png`;
  const { error: upErr } = await sb.storage
    .from(STORAGE_BUCKET)
    .upload(path, buf, { contentType: file.type || 'image/png', upsert: true });
  if (upErr) return NextResponse.json({ error: upErr.message }, { status: 500 });
  const {
    data: { publicUrl },
  } = sb.storage.from(STORAGE_BUCKET).getPublicUrl(path);

  const column = imageType === 'diagramImage' ? 'diagram_image' : 'user_image';
  const { error: updErr } = await sb
    .from('body_segment')
    .update({ [column]: publicUrl })
    .eq('id', bodySegmentId);
  if (updErr) return NextResponse.json({ error: updErr.message }, { status: 500 });

  return NextResponse.json({ imageLink: publicUrl });
}
