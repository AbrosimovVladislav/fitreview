import { NextRequest, NextResponse } from 'next/server';
import { sb, STORAGE_BUCKET } from '@/lib/supabase';

// POST /storage/public/uploadImage  body: { imageName, imageBase64 }
// Returns the public URL (plain string, matching old backend).
export async function POST(req: NextRequest) {
  const body = await req.json();
  const imageName: string = body?.imageName;
  const imageBase64: string = body?.imageBase64;
  if (!imageName || !imageBase64) {
    return NextResponse.json({ error: 'Missing imageName/imageBase64' }, { status: 400 });
  }
  const buf = Buffer.from(imageBase64, 'base64');
  // Use PNG content-type to match old backend; actual bytes may be jpg — upload still works.
  const path = `${imageName}.png`;
  const { error } = await sb.storage
    .from(STORAGE_BUCKET)
    .upload(path, buf, { contentType: 'image/png', upsert: true });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  const {
    data: { publicUrl },
  } = sb.storage.from(STORAGE_BUCKET).getPublicUrl(path);
  return NextResponse.json(publicUrl);
}
