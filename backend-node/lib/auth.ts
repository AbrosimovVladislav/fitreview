import { NextRequest } from 'next/server';
import { sb } from './supabase';

export type AuthedUser = {
  authUserId: string;
  frUserId: number;
  email: string | null;
  name: string | null;
};

/**
 * Verify the Authorization: Bearer <jwt> header, return the linked fr_user row.
 * Returns null if missing/invalid token or no fr_user record yet.
 */
export async function verifyRequest(req: NextRequest): Promise<AuthedUser | null> {
  const auth = req.headers.get('authorization') || req.headers.get('Authorization');
  if (!auth?.startsWith('Bearer ')) return null;
  const token = auth.slice(7);

  const { data: userRes, error } = await sb.auth.getUser(token);
  if (error || !userRes.user) return null;

  const authUserId = userRes.user.id;
  const { data: frUser } = await sb
    .from('fr_user')
    .select('id, name, email')
    .eq('auth_user_id', authUserId)
    .maybeSingle();

  if (!frUser) return null;
  return {
    authUserId,
    frUserId: frUser.id,
    email: frUser.email,
    name: frUser.name,
  };
}

export function unauthorized() {
  return new Response(JSON.stringify({ error: 'Unauthorized' }), {
    status: 401,
    headers: { 'Content-Type': 'application/json' },
  });
}
