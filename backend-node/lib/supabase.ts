import { createClient } from '@supabase/supabase-js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SB = ReturnType<typeof createClient<any, 'public'>>;

function getClient(): SB {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in env');
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

let _sb: SB | null = null;
export const sb: SB = new Proxy({} as SB, {
  get(_target, prop) {
    if (!_sb) _sb = getClient();
    return (_sb as any)[prop];
  },
});

export const STORAGE_BUCKET = process.env.SUPABASE_STORAGE_BUCKET || 'fit-review';
